import { doc, updateDoc } from 'firebase/firestore';
import { db, app } from '..';
import { USERS_DOCUMENT_NAME } from '../constants/document';

async function updateUser(docId: string) {
  const docRef = doc(db, USERS_DOCUMENT_NAME, docId);

  try {
    await updateDoc(docRef, {
      name: '更新されたユーザー名',
    });

    console.log('ドキュメント更新成功！');
  } catch (e) {
    console.error('ドキュメント更新エラー: ', e);
  }
}
