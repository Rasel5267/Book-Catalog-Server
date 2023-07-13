import { JwtPayload } from 'jsonwebtoken';
import { IBook } from './book.interface';
import { Book } from './book.model';

const CreateBook = async (book: IBook): Promise<IBook | null> => {
  const createBook = await Book.create(book);
  if (!createBook) {
    throw new Error('Failed to create book!');
  }
  return createBook;
};

const GetBook = async (): Promise<IBook[] | null> => {
  const books = await Book.find().populate('publisher', 'name');
  if (!books) {
    throw new Error('No book found!');
  }
  return books;
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

  const userId = String(user._id);
  console.log(typeof userId);

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
  GetBook,
  GetBookById,
  UpdateBook,
  DeleteBook,
};
