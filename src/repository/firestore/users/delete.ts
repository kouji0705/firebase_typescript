import { doc, deleteDoc } from 'firebase/firestore';
import { app, db } from '..';
import { deleteApp } from 'firebase/app';
import { USERS_DOCUMENT_NAME } from '../constants/document';

async function deleteUser(docId: string) {
  const docRef = doc(db, USERS_DOCUMENT_NAME, docId);

  try {
    await deleteDoc(docRef);
    console.log('ドキュメント削除成功！');
  } catch (e) {
    console.error('ドキュメント削除エラー: ', e);
  }
}
