import { JwtPayload } from 'jsonwebtoken';
import { SortOrder } from 'mongoose';
import { paginationHelpers } from '../../../helpers/paginationHelper';
import { IGenericResponse } from '../../../interfaces/common';
import { IPaginationOptions } from '../../../interfaces/pagination';
import { IBook, IBookFilter, bookSearchableFields } from './book.interface';
import { Book } from './book.model';

const CreateBook = async (
  book: IBook,
  user: JwtPayload
): Promise<IBook | null> => {
  const createBook = await Book.create({ ...book, publisher: user._id });
  if (!createBook) {
    throw new Error('Failed to create book!');
  }
  return createBook;
};

const GetBooks = async (
  filters: IBookFilter,
  paginationOptions: IPaginationOptions
): Promise<IGenericResponse<IBook[]>> => {
  const { searchTerm, ...filtersData } = filters;

  const andConditions = [];

  if (searchTerm) {
    andConditions.push({
      $or: bookSearchableFields.map(field => ({
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

  const { page, limit, sortBy, sortOrder } =
    paginationHelpers.calculatePagination(paginationOptions);

  const sortConditions: { [key: string]: SortOrder } = {};

  if (sortBy && sortOrder) {
    sortConditions[sortBy] = sortOrder;
  }

  let query = Book.find();

  if (andConditions.length > 0) {
    query = query.and(andConditions);
  }

  const books = await query
    .sort(sortConditions)
    .skip((page - 1) * limit)
    .limit(limit);

  let totalQuery = Book.find();

  if (andConditions.length > 0) {
    totalQuery = totalQuery.and(andConditions);
  }

  const total = await totalQuery.countDocuments();

  if (!books) {
    throw new Error('No cow found!');
  }

  return {
    meta: {
      page,
      limit,
      total,
    },
    data: books,
  };
};

const GetBookById = async (id: string): Promise<IBook | null> => {
  const books = await Book.findById(id);
  if (!books) {
    throw new Error('No book found!');
  }
  return books;
};

const UpdateBook = async (
  id: string,
  user: JwtPayload,
  payload: Partial<IBook>
): Promise<IBook | null> => {
  const book = await Book.findById(id);

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

  const updatedBook = await Book.findByIdAndUpdate(id, payload, {
    new: true,
  });

  if (!updatedBook) {
    throw new Error('Failed to update book!');
  }

  return updatedBook;
};

const DeleteBook = async (id: string, user: JwtPayload): Promise<void> => {
  const book = await Book.findById(id);

  const userId = String(user._id);
  console.log(typeof userId);

  if (!book) {
    throw new Error('No book found!');
  }

  const areEqual = book.publisher && book.publisher.toString() === user._id;

  if (areEqual) {
    const deletedBook = await Book.findByIdAndDelete(id);
    if (!deletedBook) {
      throw new Error('No user found!');
    }
  }
};

export const BookService = {
  CreateBook,
  GetBooks,
  GetBookById,
  UpdateBook,
  DeleteBook,
};
