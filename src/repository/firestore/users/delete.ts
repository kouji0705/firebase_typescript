import { doc, deleteDoc } from 'firebase/firestore';
import { app, db } from '..';
import { deleteApp } from 'firebase/app';

async function deleteUser(docId: string) {
  const docRef = doc(db, 'users', docId);

  try {
    await deleteDoc(docRef);
    console.log('ドキュメント削除成功！');
  } catch (e) {
    console.error('ドキュメント削除エラー: ', e);
  } finally {
    // 処理が完了したらFirebaseの接続を閉じる
    await deleteApp(app);
  }
}
