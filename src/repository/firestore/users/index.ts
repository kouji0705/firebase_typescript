import { Firestore } from 'firebase/firestore';
import { IUserRepository } from '../../../domain/users/repository';
import { IUser } from '../../../domain/users/model';
import { findById, getUsers } from './read';

export class UserRepository implements IUserRepository {
  constructor(private db: Firestore) {}

  async findById(id: string): Promise<IUser | null> {
    return findById(id);
  }
  async getUsers(): Promise<IUser[]> {
    return getUsers();
  }
}
