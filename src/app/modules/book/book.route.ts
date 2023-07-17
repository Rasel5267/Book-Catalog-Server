import express from 'express';
import auth from '../../middleware/auth';
import { validateRequest } from '../../middleware/validateRequest';
import { BookController } from './book.controller';
import { BookValidation } from './book.validation';

const router = express.Router();

router.post(
  '/create',
  validateRequest(BookValidation.createBookZodSchema),
  auth(),
  BookController.createBook
);

router.post('/review/:id', auth(), BookController.addReview);

router.get('/:getBookId', BookController.getBookById);

router.patch('/:updateBookId', auth(), BookController.updateBook);

router.delete('/:deleteBookId', auth(), BookController.deleteBook);

router.get('/', BookController.getBooks);

export const BookRoutes = router;
