import { Request, Response } from 'express';
import httpStatus from 'http-status';
import { catchAsync } from '../../../shared/catchAsync';
import { sendResponse } from '../../../shared/sendResponse';
import { IBook } from './book.interface';
import { BookService } from './book.service';

const createBook = catchAsync(async (req: Request, res: Response) => {
  const book = req.body;
  const result = await BookService.CreateBook(book);

  sendResponse<IBook>(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Books retrieved successfully',
    data: result,
  });
});

const getBook = catchAsync(async (req: Request, res: Response) => {
  const result = await BookService.GetBook();

  sendResponse<IBook[]>(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Books retrieved successfully',
    data: result,
  });
});

const getBookById = catchAsync(async (req: Request, res: Response) => {
  const id = req.params.id;
  const result = await BookService.GetBookById(id);

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
  const id = req.params.id;
  const user = req.user;
  const updatedData = req.body;
  const result = await BookService.UpdateBook(id, user, updatedData);

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
  const id = req.params.id;
  const user = req.user;
  await BookService.DeleteBook(id, user);

  sendResponse<IBook>(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Book deleted successfully',
  });
});

export const BookController = {
  createBook,
  getBook,
  getBookById,
  updateBook,
  deleteBook,
};
