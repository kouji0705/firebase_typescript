import { Firestore, doc, updateDoc } from 'firebase/firestore';
import { USERS_DOCUMENT_NAME } from '../constants/document';
import { IUser } from '../../../domain/users/model';

export async function updateUser(
  db: Firestore,
  docId: string,
  user: IUser
): Promise<void> {
  const docRef = doc(db, USERS_DOCUMENT_NAME, docId);

  await updateDoc(docRef, user);
}
