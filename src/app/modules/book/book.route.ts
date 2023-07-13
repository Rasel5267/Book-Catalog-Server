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

router.get('/', BookController.getBook);

export const BookRoutes = router;
