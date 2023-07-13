import express from 'express';
import { validateRequest } from '../../middleware/validateRequest';
import { BookValidation } from './book.validation';
import { BookController } from './book.controller';
import auth from '../../middleware/auth';

const router = express.Router();

router.post(
  '/create',
  validateRequest(BookValidation.createBookZodSchema),
  auth(),
  BookController.createBooks
);

export const BookRoutes = router;
