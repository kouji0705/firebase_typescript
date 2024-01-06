import { Firestore, addDoc, collection } from 'firebase/firestore';
import { USERS_DOCUMENT_NAME } from '../constants/document';
import { IUser } from '../../../domain/users/model';

// 新しいユーザーを作成する
export async function createNewUser(db: Firestore, user: IUser) {
  try {
    const docRef = await addDoc(collection(db, USERS_DOCUMENT_NAME), user);
    console.log('ドキュメント作成成功！ドキュメントID: ', docRef.id);
  } catch (e) {
    console.error('ドキュメント作成エラー: ', e);
  }
}
