import express from 'express';
import auth from '../../middleware/auth';
import { UserController } from './user.controller';

const router = express.Router();

// Bonus part
router.get('/wishlist', auth(), UserController.getWishlist);
router.get('/readingList', auth(), UserController.getReadingList);
router.get('/finishedBooks', auth(), UserController.getFinishedBooks);
router.post('/addToWishlist/:addBookId', auth(), UserController.addToWishlist);
router.post(
  '/addToReadingList/:readingBookId',
  auth(),
  UserController.addToReadingList
);
router.post(
  '/addToFinishedBook/:finishedBookId',
  auth(),
  UserController.addToFinishedBook
);

//user
router.get('/:id', auth(), UserController.getUserById);
router.patch('/:id', auth(), UserController.updateUser);
router.delete('/:id', auth(), UserController.deleteUser);

router.get('/', auth(), UserController.getUsers);
router.get('/my-profile', auth(), UserController.getUserProfile);

export const UserRoutes = router;
