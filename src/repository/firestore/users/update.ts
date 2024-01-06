import { doc, updateDoc } from 'firebase/firestore';
import { db, app } from '..';
import { USERS_DOCUMENT_NAME } from '../constants/document';
import { IUser } from '../../../domain/users/model';

async function updateUser(docId: string, user: IUser) {
  const docRef = doc(db, USERS_DOCUMENT_NAME, docId);

  try {
    await updateDoc(docRef, user);

    console.log('ドキュメント更新成功！');
  } catch (e) {
    console.error('ドキュメント更新エラー: ', e);
  }
}
