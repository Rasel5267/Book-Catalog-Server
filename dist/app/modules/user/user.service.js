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
exports.UserService = void 0;
const user_model_1 = require("../user/user.model");
const GetUsers = () => __awaiter(void 0, void 0, void 0, function* () {
    const GetAllUsers = yield user_model_1.User.find({});
    if (!GetAllUsers) {
        throw new Error('No user found!');
    }
    return GetAllUsers;
});
const GetUserById = (id) => __awaiter(void 0, void 0, void 0, function* () {
    const user = yield user_model_1.User.findById(id);
    if (!user) {
        throw new Error('No user found!');
    }
    return user;
});
const UpdateUser = (id, payload) => __awaiter(void 0, void 0, void 0, function* () {
    const { email } = payload, updatePayload = __rest(payload, ["email"]);
    const user = yield user_model_1.User.findById(id);
    if (!user) {
        throw new Error('No user found!');
    }
    if (email && email !== user.email) {
        throw new Error('Updating email is not allowed!');
    }
    // Update the remaining fields
    Object.assign(user, updatePayload);
    const updatedUser = yield user.save();
    return updatedUser;
});
const DeleteUser = (id) => __awaiter(void 0, void 0, void 0, function* () {
    const deletedUser = yield user_model_1.User.findByIdAndDelete(id);
    if (!deletedUser) {
        throw new Error('No user found!');
    }
});
const GetUserProfile = (user) => __awaiter(void 0, void 0, void 0, function* () {
    const { _id } = user;
    const userInfo = yield user_model_1.User.findById(_id).exec();
    return userInfo;
});
const AddToWishlist = (addBookId, user) => __awaiter(void 0, void 0, void 0, function* () {
    const { _id } = user;
    const userInfo = yield user_model_1.User.findById(_id);
    if (!userInfo) {
        throw new Error('User not found');
    }
    // Check if the book ID already exists in the wishlist
    if (userInfo.wishlist.includes(addBookId)) {
        throw new Error('Book already exists in the wishlist');
    }
    userInfo.wishlist.push(addBookId);
    yield userInfo.save();
});
const GetWishlists = (user) => __awaiter(void 0, void 0, void 0, function* () {
    const userInfo = yield user_model_1.User.findById(user._id).populate('wishlist');
    if (!userInfo) {
        throw new Error('User not found');
    }
    return userInfo.wishlist;
});
const RemoveFromWishlist = (user, removeWBookId) => __awaiter(void 0, void 0, void 0, function* () {
    yield user_model_1.User.findOneAndUpdate({ _id: user._id }, { $pull: { wishlist: removeWBookId } }, { new: true });
});
const AddToReadingList = (readingBookId, user) => __awaiter(void 0, void 0, void 0, function* () {
    const { _id } = user;
    const userInfo = yield user_model_1.User.findById(_id);
    if (!userInfo) {
        throw new Error('User not found');
    }
    // Check if the book ID already exists in the wishlist
    if (userInfo.readingList.includes(readingBookId)) {
        throw new Error('Book already exists in the Reading List');
    }
    // Remove the book from the wishlist
    const bookIndex = userInfo.wishlist.indexOf(readingBookId);
    if (bookIndex !== -1) {
        userInfo.wishlist.splice(bookIndex, 1);
    }
    userInfo.readingList.push(readingBookId);
    yield userInfo.save();
});
const GetReadingLists = (user) => __awaiter(void 0, void 0, void 0, function* () {
    const userInfo = yield user_model_1.User.findById(user._id).populate('readingList');
    if (!userInfo) {
        throw new Error('User not found');
    }
    return userInfo.readingList;
});
const RemoveFromReadingList = (user, removeRBookId) => __awaiter(void 0, void 0, void 0, function* () {
    yield user_model_1.User.findOneAndUpdate({ _id: user._id }, { $pull: { readingList: removeRBookId } }, { new: true });
});
const AddToFinishedBook = (finishedBookId, user) => __awaiter(void 0, void 0, void 0, function* () {
    const { _id } = user;
    const userInfo = yield user_model_1.User.findById(_id);
    if (!userInfo) {
        throw new Error('User not found');
    }
    // Check if the book ID already exists in the wishlist
    if (userInfo.finishedBooks.includes(finishedBookId)) {
        throw new Error('Book already exists in the Finished Book List');
    }
    // Remove the book from the wishlist
    const bookIndex = userInfo.readingList.indexOf(finishedBookId);
    if (bookIndex !== -1) {
        userInfo.readingList.splice(bookIndex, 1);
    }
    userInfo.finishedBooks.push(finishedBookId);
    yield userInfo.save();
});
const GetFinishedBooks = (user) => __awaiter(void 0, void 0, void 0, function* () {
    const userInfo = yield user_model_1.User.findById(user._id).populate('finishedBooks');
    if (!userInfo) {
        throw new Error('User not found');
    }
    return userInfo.finishedBooks;
});
const RemoveFromFinishedBooks = (user, removeFBookId) => __awaiter(void 0, void 0, void 0, function* () {
    yield user_model_1.User.findOneAndUpdate({ _id: user._id }, { $pull: { finishedBooks: removeFBookId } }, { new: true });
});
exports.UserService = {
    GetUsers,
    GetUserById,
    UpdateUser,
    DeleteUser,
    GetUserProfile,
    AddToWishlist,
    GetWishlists,
    AddToReadingList,
    GetReadingLists,
    AddToFinishedBook,
    GetFinishedBooks,
    RemoveFromWishlist,
    RemoveFromReadingList,
    RemoveFromFinishedBooks,
};
