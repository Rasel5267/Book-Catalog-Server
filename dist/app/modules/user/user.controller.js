"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserController = void 0;
const http_status_1 = __importDefault(require("http-status"));
const catchAsync_1 = require("../../../shared/catchAsync");
const sendResponse_1 = require("../../../shared/sendResponse");
const user_service_1 = require("./user.service");
const getUsers = (0, catchAsync_1.catchAsync)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield user_service_1.UserService.GetUsers();
    (0, sendResponse_1.sendResponse)(res, {
        statusCode: http_status_1.default.OK,
        success: true,
        message: 'Users retrieved successfully',
        data: result,
    });
}));
const getUserById = (0, catchAsync_1.catchAsync)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const id = req.params.id;
    const result = yield user_service_1.UserService.GetUserById(id);
    (0, sendResponse_1.sendResponse)(res, {
        statusCode: http_status_1.default.OK,
        success: true,
        message: 'User retrieved successfully',
        data: result,
    });
}));
const updateUser = (0, catchAsync_1.catchAsync)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const id = req.params.id;
    const updatedData = req.body;
    const result = yield user_service_1.UserService.UpdateUser(id, updatedData);
    (0, sendResponse_1.sendResponse)(res, {
        statusCode: http_status_1.default.OK,
        success: true,
        message: 'User updated successfully',
        data: result,
    });
}));
const deleteUser = (0, catchAsync_1.catchAsync)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const id = req.params.id;
    yield user_service_1.UserService.DeleteUser(id);
    (0, sendResponse_1.sendResponse)(res, {
        statusCode: http_status_1.default.OK,
        success: true,
        message: 'User deleted successfully',
    });
}));
const getUserProfile = (0, catchAsync_1.catchAsync)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    if (!req.user) {
        return;
    }
    const user = req.user;
    const result = yield user_service_1.UserService.GetUserProfile(user);
    (0, sendResponse_1.sendResponse)(res, {
        statusCode: http_status_1.default.OK,
        success: true,
        message: "User's information retrieved successfully",
        data: result,
    });
}));
const addToWishlist = (0, catchAsync_1.catchAsync)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    if (!req.user || !req.body) {
        return res.sendStatus(http_status_1.default.BAD_REQUEST);
    }
    const addBookId = req.params.addBookId;
    const user = req.user;
    yield user_service_1.UserService.AddToWishlist(addBookId, user);
    (0, sendResponse_1.sendResponse)(res, {
        statusCode: http_status_1.default.OK,
        success: true,
        message: 'Book added to wishlist successfully',
    });
}));
const getWishlist = (0, catchAsync_1.catchAsync)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    if (!req.user) {
        return;
    }
    const user = req.user;
    const result = yield user_service_1.UserService.GetWishlists(user);
    (0, sendResponse_1.sendResponse)(res, {
        statusCode: http_status_1.default.OK,
        success: true,
        message: 'Book retrieved successfully from Wishlist',
        data: result,
    });
}));
const removeFromWishlist = (0, catchAsync_1.catchAsync)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    if (!req.user) {
        return;
    }
    const user = req.user;
    const removeWBookId = req.params.removeWBookId;
    yield user_service_1.UserService.RemoveFromWishlist(user, removeWBookId);
    (0, sendResponse_1.sendResponse)(res, {
        statusCode: http_status_1.default.OK,
        success: true,
        message: 'Book successfully remove from Wishlist',
    });
}));
const addToReadingList = (0, catchAsync_1.catchAsync)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    if (!req.user || !req.body) {
        return res.sendStatus(http_status_1.default.BAD_REQUEST);
    }
    const readingBookId = req.params.readingBookId;
    const user = req.user;
    yield user_service_1.UserService.AddToReadingList(readingBookId, user);
    (0, sendResponse_1.sendResponse)(res, {
        statusCode: http_status_1.default.OK,
        success: true,
        message: 'Book added to Reading List successfully',
    });
}));
const getReadingList = (0, catchAsync_1.catchAsync)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    if (!req.user) {
        return;
    }
    const user = req.user;
    const result = yield user_service_1.UserService.GetReadingLists(user);
    (0, sendResponse_1.sendResponse)(res, {
        statusCode: http_status_1.default.OK,
        success: true,
        message: 'Book retrieved successfully from Reading List',
        data: result,
    });
}));
const removeFromReadingList = (0, catchAsync_1.catchAsync)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    if (!req.user) {
        return;
    }
    const user = req.user;
    const removeRBookId = req.params.removeRBookId;
    yield user_service_1.UserService.RemoveFromReadingList(user, removeRBookId);
    (0, sendResponse_1.sendResponse)(res, {
        statusCode: http_status_1.default.OK,
        success: true,
        message: 'Book successfully remove from Reading List',
    });
}));
const addToFinishedBook = (0, catchAsync_1.catchAsync)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    if (!req.user || !req.body) {
        return res.sendStatus(http_status_1.default.BAD_REQUEST);
    }
    const finishedBookId = req.params.finishedBookId;
    const user = req.user;
    yield user_service_1.UserService.AddToFinishedBook(finishedBookId, user);
    (0, sendResponse_1.sendResponse)(res, {
        statusCode: http_status_1.default.OK,
        success: true,
        message: 'Book added to Finished Book List successfully',
    });
}));
const getFinishedBooks = (0, catchAsync_1.catchAsync)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    if (!req.user) {
        return;
    }
    const user = req.user;
    const result = yield user_service_1.UserService.GetFinishedBooks(user);
    (0, sendResponse_1.sendResponse)(res, {
        statusCode: http_status_1.default.OK,
        success: true,
        message: 'Book retrieved successfully from Finished Book List',
        data: result,
    });
}));
const removeFromFinishedBooks = (0, catchAsync_1.catchAsync)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    if (!req.user) {
        return;
    }
    const user = req.user;
    const removeFBookId = req.params.removeFBookId;
    yield user_service_1.UserService.RemoveFromFinishedBooks(user, removeFBookId);
    (0, sendResponse_1.sendResponse)(res, {
        statusCode: http_status_1.default.OK,
        success: true,
        message: 'Book successfully remove from Finished Books List',
    });
}));
exports.UserController = {
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
    removeFromWishlist,
    removeFromReadingList,
    removeFromFinishedBooks,
};
