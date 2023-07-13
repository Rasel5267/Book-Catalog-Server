import { Request, Response } from 'express';
import httpStatus from 'http-status';
import { catchAsync } from '../../../shared/catchAsync';
import { sendResponse } from '../../../shared/sendResponse';
import { IBook } from './book.interface';
import { BookService } from './book.service';

const createBooks = catchAsync(async (req: Request, res: Response) => {
  const book = req.body;
  const result = await BookService.CreateBook(book);

  sendResponse<IBook>(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Books retrieved successfully',
    data: result,
  });
});

export const BookController = {
  createBooks,
};
