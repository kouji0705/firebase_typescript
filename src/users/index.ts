import { doc, getDoc, Firestore } from 'firebase/firestore';
import { IUser, IUserRepository } from './interface';

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
