import { Firestore } from 'firebase/firestore';
import { IUserRepository } from '../../../domain/users/repository';
import { IUser } from '../../../domain/users/model';
import { findById as _findById } from './read';

export class UserRepository implements IUserRepository {
  constructor(private db: Firestore) {}

  async findById(id: string): Promise<IUser | null> {
    return _findById(id);
  }
}
