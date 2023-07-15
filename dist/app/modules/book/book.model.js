"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Book = void 0;
const mongoose_1 = require("mongoose");
const bookSchema = new mongoose_1.Schema({
    title: {
        type: String,
        required: true,
    },
    author: {
        type: String,
        required: true,
    },
    image: {
        type: String,
        required: true,
    },
    description: {
        type: String,
        required: true,
    },
    genre: {
        type: String,
        required: true,
    },
    publicationDate: {
        type: String,
        required: true,
    },
    publisher: {
        type: mongoose_1.Schema.Types.ObjectId,
        ref: 'User',
    },
    reviews: [
        {
            review: {
                type: String,
            },
            reviewer: {
                type: mongoose_1.Schema.Types.ObjectId,
                ref: 'User',
            },
        },
    ],
}, {
    timestamps: true,
    versionKey: false,
});
exports.Book = (0, mongoose_1.model)('Book', bookSchema);
