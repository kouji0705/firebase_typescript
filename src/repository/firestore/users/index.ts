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
    return updateUser(this.db, docId, user);
  }
  async deleteUser(docId: string): Promise<void> {
    return deleteUser(this.db, docId);
  }
  async findById(id: string): Promise<IUser | null> {
    return findById(this.db, id);
  }
  async getUsers(): Promise<IUser[]> {
    return getUsers(this.db);
  }
}
