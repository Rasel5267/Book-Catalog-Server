import { Model } from 'mongoose';

export type IUser = {
  name: string;
  email: string;
  password: string;
};

export type IFindUser = {
  _id: string;
  email: string;
  password: string;
};

export type UserModel = {
  isUserExist(
    email: string
  ): Promise<Pick<IFindUser, '_id' | 'email' | 'password'>>;
  isPasswordMatched(
    givenPassword: string,
    savedPassword: string
  ): Promise<boolean>;
} & Model<IUser>;
