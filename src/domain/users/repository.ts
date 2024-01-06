import { IUser } from './model';

export interface IUserRepository {
  findById(id: string): Promise<IUser | null>;
}
