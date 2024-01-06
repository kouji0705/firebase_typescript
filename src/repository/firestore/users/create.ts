import { addDoc, collection, doc, writeBatch } from 'firebase/firestore';
import { deleteApp } from 'firebase/app';
import { db } from '..';
import { USERS_DOCUMENT_NAME } from '../constants/document';
import { IUser } from '../../../domain/users/model';

// 新しいユーザーを作成する
async function createNewUser(user: IUser) {
  try {
    // `users` コレクションに新しいドキュメントを追加
    const docRef = await addDoc(collection(db, USERS_DOCUMENT_NAME), user);

    console.log('ドキュメント作成成功！ドキュメントID: ', docRef.id);
  } catch (e) {
    console.error('ドキュメント作成エラー: ', e);
  }
}
