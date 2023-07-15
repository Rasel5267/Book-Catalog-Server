"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.BookService = void 0;
const book_interface_1 = require("./book.interface");
const book_model_1 = require("./book.model");
const CreateBook = (book, user) => __awaiter(void 0, void 0, void 0, function* () {
    const createBook = yield book_model_1.Book.create(Object.assign(Object.assign({}, book), { publisher: user._id }));
    if (!createBook) {
        throw new Error('Failed to create book!');
    }
    return createBook;
});
const GetBooks = (filters) => __awaiter(void 0, void 0, void 0, function* () {
    const { searchTerm } = filters, filtersData = __rest(filters, ["searchTerm"]);
    const andConditions = [];
    if (searchTerm) {
        andConditions.push({
            $or: book_interface_1.bookSearchableFields.map(field => ({
                [field]: {
                    $regex: searchTerm,
                    $options: 'i',
                },
            })),
        });
    }
    if (Object.keys(filtersData).length) {
        andConditions.push({
            $and: Object.entries(filtersData).map(([field, value]) => ({
                [field]: { $regex: value, $options: 'i' },
            })),
        });
    }
    let query = book_model_1.Book.find().populate({
        path: 'reviews.reviewer',
        model: 'User',
        select: 'name',
    });
    if (andConditions.length > 0) {
        query = query.and(andConditions);
    }
    const books = yield query;
    if (!books) {
        throw new Error('No cow found!');
    }
    return books;
});
const GetBookById = (id) => __awaiter(void 0, void 0, void 0, function* () {
    const books = yield book_model_1.Book.findById(id);
    if (!books) {
        throw new Error('No book found!');
    }
    return books;
});
const UpdateBook = (id, user, payload) => __awaiter(void 0, void 0, void 0, function* () {
    const book = yield book_model_1.Book.findById(id);
    if (!book) {
        throw new Error('No book found!');
    }
    const areEqual = book.publisher && book.publisher.toString() === user._id;
    if (!areEqual) {
        throw new Error('You are not allowed to edit this book!');
    }
    if ('publisher' in payload) {
        throw new Error('Cannot update the publisher field');
    }
    const updatedBook = yield book_model_1.Book.findByIdAndUpdate(id, payload, {
        new: true,
    });
    if (!updatedBook) {
        throw new Error('Failed to update book!');
    }
    return updatedBook;
});
const DeleteBook = (id, user) => __awaiter(void 0, void 0, void 0, function* () {
    const book = yield book_model_1.Book.findById(id);
    if (!book) {
        throw new Error('No book found!');
    }
    const areEqual = book.publisher && book.publisher.toString() === user._id;
    if (areEqual) {
        const deletedBook = yield book_model_1.Book.findByIdAndDelete(id);
        if (!deletedBook) {
            throw new Error('No user found!');
        }
    }
});
const AddReview = (id, user, reviewData) => __awaiter(void 0, void 0, void 0, function* () {
    const book = yield book_model_1.Book.findById(id);
    if (!book) {
        throw new Error('No book found!');
    }
    // Extract the "review" value if reviewData is an object
    const review = typeof reviewData === 'string' ? reviewData : reviewData.review;
    const newReview = {
        review: review,
        reviewer: user._id,
    };
    book.reviews.push(newReview);
    const updatedBook = yield book.save();
    return updatedBook;
});
exports.BookService = {
    CreateBook,
    GetBooks,
    GetBookById,
    UpdateBook,
    DeleteBook,
    AddReview,
};
