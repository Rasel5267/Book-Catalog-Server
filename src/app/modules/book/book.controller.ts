import { Request, Response } from 'express';
import httpStatus from 'http-status';
import { catchAsync } from '../../../shared/catchAsync';
import pick from '../../../shared/pick';
import { sendResponse } from '../../../shared/sendResponse';
import { bookFilterableFields } from './book.constant';
import { IBook } from './book.interface';
import { BookService } from './book.service';

const createBook = catchAsync(async (req: Request, res: Response) => {
  if (!req.user || !req.body) {
    return res.sendStatus(httpStatus.BAD_REQUEST);
  }
  const book = req.body;
  const user = req.user;
  const result = await BookService.CreateBook(book, user);

  sendResponse<IBook>(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Books Created successfully',
    data: result,
  });
});

const getBooks = catchAsync(async (req: Request, res: Response) => {
  const filters = pick(req.query, bookFilterableFields);

  const result = await BookService.GetBooks(filters);

  sendResponse<IBook[]>(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Books retrieved successfully',
    data: result,
  });
});

const getBookById = catchAsync(async (req: Request, res: Response) => {
  const getBookId = req.params.getBookId;
  const result = await BookService.GetBookById(getBookId);

  sendResponse<IBook>(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Book retrieved successfully',
    data: result,
  });
});

const updateBook = catchAsync(async (req: Request, res: Response) => {
  if (!req.user || !req.body) {
    return res.sendStatus(httpStatus.BAD_REQUEST);
  }
  const updateBookId = req.params.updateBookId;
  const user = req.user;
  const updatedData = req.body;
  const result = await BookService.UpdateBook(updateBookId, user, updatedData);

  sendResponse<IBook>(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Book updated successfully',
    data: result,
  });
});

const deleteBook = catchAsync(async (req: Request, res: Response) => {
  if (!req.user || !req.body) {
    return res.sendStatus(httpStatus.BAD_REQUEST);
  }
  const deleteBookId = req.params.deleteBookId;
  const user = req.user;
  await BookService.DeleteBook(deleteBookId, user);

  sendResponse<IBook>(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Book deleted successfully',
  });
});

const addReview = catchAsync(async (req: Request, res: Response) => {
  if (!req.user || !req.body) {
    return res.sendStatus(httpStatus.BAD_REQUEST);
  }
  const id = req.params.id;
  const user = req.user;
  const reviewData = req.body;
  const result = await BookService.AddReview(id, user, reviewData);

  sendResponse<IBook>(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Add Review successfully',
    data: result,
  });
});

export const BookController = {
  createBook,
  getBooks,
  getBookById,
  updateBook,
  deleteBook,
  addReview,
};
