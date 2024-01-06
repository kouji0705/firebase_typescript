import { addDoc, collection, doc, writeBatch } from 'firebase/firestore';
import { app, db } from '../firestore';
import { deleteApp } from 'firebase/app';

// 新しいユーザーを作成する
async function createNewUser() {
  try {
    // `users` コレクションに新しいドキュメントを追加
    const docRef = await addDoc(collection(db, 'users'), {
      name: 'New User',
      email: 'newuser@example.com',
    });

    console.log('ドキュメント作成成功！ドキュメントID: ', docRef.id);
  } catch (e) {
    console.error('ドキュメント作成エラー: ', e);
  } finally {
    // 処理が完了したらFirebaseの接続を閉じる
    await deleteApp(app);
  }
}
