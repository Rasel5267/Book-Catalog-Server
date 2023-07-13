import { Model, ObjectId } from 'mongoose';

export type IBook = {
  title: string;
  author: ObjectId;
  description: string;
  genre: string;
  publicationDate: Date;
};

export type BookModel = Model<IBook, Record<string, unknown>>;
