import { Firestore } from 'firebase/firestore';
import { IUserRepository } from '../../../domain/users/repository';
import { IUser } from '../../../domain/users/model';
import { findById, getUsers } from './read';
import { createNewUser } from './create';
import { updateUser } from './update';
import { deleteUser } from './delete';

export class UserRepository implements IUserRepository {
  constructor(private db: Firestore) {}
  async createNewUser(user: IUser): Promise<void> {
    return createNewUser(this.db, user);
  }
  async updateUser(docId: string, user: IUser): Promise<void> {
    return updateUser(docId, user);
  }
  async deleteUser(docId: string): Promise<void> {
    return deleteUser(docId);
  }
  async findById(id: string): Promise<IUser | null> {
    return findById(id);
  }
  async getUsers(): Promise<IUser[]> {
    return getUsers();
  }
}
