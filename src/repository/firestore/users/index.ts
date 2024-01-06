import { doc, getDoc, Firestore } from 'firebase/firestore';
import { IUserRepository } from '../../../domain/users/repository';
import { IUser } from '../../../domain/users/model';

export class UserRepository implements IUserRepository {
  constructor(private db: Firestore) {}

  async findById(id: string): Promise<IUser | null> {
    const docRef = doc(this.db, 'users', id);
    const docSnap = await getDoc(docRef);

    if (docSnap.exists()) {
      const data = docSnap.data() as IUser;
      return data;
    } else {
      return null;
    }
  }
}
