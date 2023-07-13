import { Model, ObjectId } from 'mongoose';

export type IBook = {
  title: string;
  author: string;
  description: string;
  genre: string;
  publicationDate: string | Date;
  publisher: ObjectId;
};

export type BookModel = Model<IBook, Record<string, unknown>>;
