import { deleteApp } from 'firebase/app';
import {
  Firestore,
  collection,
  doc,
  getDoc,
  getDocs,
} from 'firebase/firestore';
import { app, db } from '..';
import { IUser } from '../../../domain/users/model';
import { USERS_DOCUMENT_NAME } from '../constants/document';

// コレクションの全ドキュメントを取得する
export async function getUsers(db: Firestore): Promise<IUser[]> {
  const querySnapshot = await getDocs(collection(db, USERS_DOCUMENT_NAME));
  return querySnapshot.docs.map((doc) => doc.data()) as IUser[];
}

// コレクション内の対象ドキュメントを取得する
export async function findById(
  db: Firestore,
  docId: string
): Promise<IUser | null> {
  const docRef = doc(db, USERS_DOCUMENT_NAME, docId);
  const docSnap = await getDoc(docRef);

  if (docSnap.exists()) {
    return docSnap.data() as IUser;
  } else {
    return null;
  }
}
