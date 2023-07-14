import express from 'express';
import auth from '../../middleware/auth';
import { UserController } from './user.controller';

const router = express.Router();

// Bonus part
router.get('/wishlist', auth(), UserController.getWishlist);
router.post('/addToWishlist/:addBookId', auth(), UserController.addToWishlist);

//user
router.get('/:id', auth(), UserController.getUserById);
router.patch('/:id', auth(), UserController.updateUser);
router.delete('/:id', auth(), UserController.deleteUser);

router.get('/', auth(), UserController.getUsers);
router.get('/my-profile', auth(), UserController.getUserProfile);

export const UserRoutes = router;
