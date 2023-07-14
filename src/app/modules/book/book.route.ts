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

router.get('/:id', BookController.getBookById);

router.patch('/:id', auth(), BookController.updateBook);

router.delete('/:id', auth(), BookController.deleteBook);

router.get('/', BookController.getBooks);

export const BookRoutes = router;
