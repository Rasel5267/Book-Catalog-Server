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

export const BookService = {
  CreateBook,
  GetBook,
  GetBookById,
};
