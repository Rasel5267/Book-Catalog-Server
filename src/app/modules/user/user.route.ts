import express from 'express';
import auth from '../../middleware/auth';
import { UserController } from './user.controller';

const router = express.Router();

router.get('/my-profile', auth(), UserController.getUserProfile);

router.get('/:id', auth(), UserController.getUserById);
router.patch('/:id', auth(), UserController.updateUser);
router.delete('/:id', auth(), UserController.deleteUser);

router.get('/', auth(), UserController.getUsers);

export const UserRoutes = router;
