"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserRoutes = void 0;
const express_1 = __importDefault(require("express"));
const auth_1 = __importDefault(require("../../middleware/auth"));
const user_controller_1 = require("./user.controller");
const router = express_1.default.Router();
// Bonus part
router.get('/wishlist', (0, auth_1.default)(), user_controller_1.UserController.getWishlist);
router.get('/readingList', (0, auth_1.default)(), user_controller_1.UserController.getReadingList);
router.get('/finishedBooks', (0, auth_1.default)(), user_controller_1.UserController.getFinishedBooks);
router.post('/addToWishlist/:addBookId', (0, auth_1.default)(), user_controller_1.UserController.addToWishlist);
router.post('/addToReadingList/:readingBookId', (0, auth_1.default)(), user_controller_1.UserController.addToReadingList);
router.post('/addToFinishedBook/:finishedBookId', (0, auth_1.default)(), user_controller_1.UserController.addToFinishedBook);
router.post('/removeFromWishlist/:removeWBookId', (0, auth_1.default)(), user_controller_1.UserController.removeFromWishlist);
router.post('/removeFromReadingList/:removeRBookId', (0, auth_1.default)(), user_controller_1.UserController.removeFromReadingList);
router.post('/removeFromFinishedBooks/:removeFBookId', (0, auth_1.default)(), user_controller_1.UserController.removeFromFinishedBooks);
//user
router.get('/:id', (0, auth_1.default)(), user_controller_1.UserController.getUserById);
router.patch('/:id', (0, auth_1.default)(), user_controller_1.UserController.updateUser);
router.delete('/:id', (0, auth_1.default)(), user_controller_1.UserController.deleteUser);
router.get('/', (0, auth_1.default)(), user_controller_1.UserController.getUsers);
router.get('/my-profile', (0, auth_1.default)(), user_controller_1.UserController.getUserProfile);
exports.UserRoutes = router;
