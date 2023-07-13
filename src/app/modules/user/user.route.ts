import express from 'express';
import { UserController } from './user.controller';

const router = express.Router();

router.get('/:id', UserController.getUserById);
router.patch('/:id', UserController.updateUser);

router.get('/', UserController.getUsers);

export const UserRoutes = router;
