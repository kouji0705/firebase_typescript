import { doc, deleteDoc, Firestore } from 'firebase/firestore';
import { USERS_DOCUMENT_NAME } from '../constants/document';

export async function deleteUser(db: Firestore, docId: string) {
  const docRef = doc(db, USERS_DOCUMENT_NAME, docId);

  try {
    await deleteDoc(docRef);
    console.log('ドキュメント削除成功！');
  } catch (e) {
    console.error('ドキュメント削除エラー: ', e);
  }
}
