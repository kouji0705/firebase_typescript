import { deleteApp } from 'firebase/app';
import { collection, doc, getDoc, getDocs } from 'firebase/firestore';
import { app, db } from '..';
import { IUser } from '../../../domain/users/model';
import { USERS_DOCUMENT_NAME } from '../constants/document';

// コレクションの全ドキュメントを取得する
async function getUsers() {
  const querySnapshot = await getDocs(collection(db, USERS_DOCUMENT_NAME));
  querySnapshot.forEach((doc) => {
    console.log(`${doc.id} => ${JSON.stringify(doc.data())}`);
  });
}

// コレクション内の対象ドキュメントを取得する
export async function findById(docId: string): Promise<IUser | null> {
  const docRef = doc(db, USERS_DOCUMENT_NAME, docId);
  const docSnap = await getDoc(docRef);

  if (docSnap.exists()) {
    return docSnap.data() as IUser;
  } else {
    return null;
  }
}
