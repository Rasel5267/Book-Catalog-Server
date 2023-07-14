import { Request, Response } from 'express';
import httpStatus from 'http-status';
import { catchAsync } from '../../../shared/catchAsync';
import { sendResponse } from '../../../shared/sendResponse';
import { IUser } from '../user/user.interface';
import { UserService } from './user.service';

const getUsers = catchAsync(async (req: Request, res: Response) => {
  const result = await UserService.GetUsers();

  sendResponse<IUser[]>(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Users retrieved successfully',
    data: result,
  });
});

const getUserById = catchAsync(async (req: Request, res: Response) => {
  const id = req.params.id;
  const result = await UserService.GetUserById(id);

  sendResponse<IUser>(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'User retrieved successfully',
    data: result,
  });
});

const updateUser = catchAsync(async (req: Request, res: Response) => {
  const id = req.params.id;
  const updatedData = req.body;
  const result = await UserService.UpdateUser(id, updatedData);

  sendResponse<IUser>(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'User updated successfully',
    data: result,
  });
});

const deleteUser = catchAsync(async (req: Request, res: Response) => {
  const id = req.params.id;
  await UserService.DeleteUser(id);

  sendResponse<IUser>(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'User deleted successfully',
  });
});

const getUserProfile = catchAsync(async (req: Request, res: Response) => {
  if (!req.user) {
    return;
  }
  const user = req.user;
  const result = await UserService.GetUserProfile(user);

  sendResponse<IUser>(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: "User's information retrieved successfully",
    data: result,
  });
});

const addToWishlist = catchAsync(async (req: Request, res: Response) => {
  if (!req.user || !req.body) {
    return res.sendStatus(httpStatus.BAD_REQUEST);
  }
  const addBookId = req.params.addBookId;
  const user = req.user;
  await UserService.AddToWishlist(addBookId, user);

  sendResponse<IUser>(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Book added to wishlist successfully',
  });
});

const getWishlist = catchAsync(async (req: Request, res: Response) => {
  if (!req.user) {
    return;
  }
  const user = req.user;
  const result = await UserService.GetWishlists(user);

  sendResponse<string[]>(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Book retrieved successfully from Wishlist',
    data: result,
  });
});

const addToReadingList = catchAsync(async (req: Request, res: Response) => {
  if (!req.user || !req.body) {
    return res.sendStatus(httpStatus.BAD_REQUEST);
  }
  const readingBookId = req.params.readingBookId;
  const user = req.user;
  await UserService.AddToReadingList(readingBookId, user);

  sendResponse<IUser>(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Book added to Reading List successfully',
  });
});

const getReadingList = catchAsync(async (req: Request, res: Response) => {
  if (!req.user) {
    return;
  }
  const user = req.user;
  const result = await UserService.GetReadingLists(user);

  sendResponse<string[]>(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Book retrieved successfully from Reading List',
    data: result,
  });
});

const addToFinishedBook = catchAsync(async (req: Request, res: Response) => {
  if (!req.user || !req.body) {
    return res.sendStatus(httpStatus.BAD_REQUEST);
  }
  const finishedBookId = req.params.finishedBookId;
  const user = req.user;
  await UserService.AddToFinishedBook(finishedBookId, user);

  sendResponse<IUser>(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Book added to Finished Book List successfully',
  });
});

const getFinishedBooks = catchAsync(async (req: Request, res: Response) => {
  if (!req.user) {
    return;
  }
  const user = req.user;
  const result = await UserService.GetFinishedBooks(user);

  sendResponse<string[]>(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Book retrieved successfully from Finished Book List',
    data: result,
  });
});

export const UserController = {
  getUsers,
  getUserById,
  updateUser,
  deleteUser,
  getUserProfile,
  addToWishlist,
  getWishlist,
  addToReadingList,
  getReadingList,
  addToFinishedBook,
  getFinishedBooks,
};
