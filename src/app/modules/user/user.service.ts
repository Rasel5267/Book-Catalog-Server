import { User } from '../user/user.model';
import { IUser } from './user.interface';

const GetUsers = async (): Promise<IUser[] | null> => {
  const GetAllUsers = await User.find({});
  if (!GetAllUsers) {
    throw new Error('No user found!');
  }
  return GetAllUsers;
};

export const UserService = {
  GetUsers,
};
