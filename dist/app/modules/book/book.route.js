"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.BookRoutes = void 0;
const express_1 = __importDefault(require("express"));
const auth_1 = __importDefault(require("../../middleware/auth"));
const validateRequest_1 = require("../../middleware/validateRequest");
const book_controller_1 = require("./book.controller");
const book_validation_1 = require("./book.validation");
const router = express_1.default.Router();
router.post('/create', (0, validateRequest_1.validateRequest)(book_validation_1.BookValidation.createBookZodSchema), (0, auth_1.default)(), book_controller_1.BookController.createBook);
router.post('/review/:id', (0, auth_1.default)(), book_controller_1.BookController.addReview);
router.get('/:getBookId', book_controller_1.BookController.getBookById);
router.patch('/:updateBookId', (0, auth_1.default)(), book_controller_1.BookController.updateBook);
router.delete('/:deleteBookId', (0, auth_1.default)(), book_controller_1.BookController.deleteBook);
router.get('/', book_controller_1.BookController.getBooks);
exports.BookRoutes = router;
