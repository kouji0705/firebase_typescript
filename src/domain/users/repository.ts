import { IUser } from './model';

export interface IUserRepository {
  findById(id: string): Promise<IUser | null>;
  getUsers(): Promise<IUser[]>;
  createNewUser(user: IUser): Promise<void>;
  updateUser(docId: string, user: IUser): Promise<void>;
  deleteUser(docId: string): Promise<void>;
}
