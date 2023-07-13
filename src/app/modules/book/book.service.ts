import { IBook } from './book.interface';
import { Book } from './book.model';

const CreateBook = async (book: IBook): Promise<IBook | null> => {
  const createBook = await Book.create(book);
  if (!createBook) {
    throw new Error('Failed to create book!');
  }
  return createBook;
};

export const BookService = {
  CreateBook,
};
