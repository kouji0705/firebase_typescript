import { doc, updateDoc } from 'firebase/firestore';
import { app, db } from '../firestore';
import { deleteApp } from 'firebase/app';

async function updateUser(docId: string) {
  const docRef = doc(db, 'users', docId);

  try {
    await updateDoc(docRef, {
      name: '更新されたユーザー名',
    });

    console.log('ドキュメント更新成功！');
  } catch (e) {
    console.error('ドキュメント更新エラー: ', e);
  } finally {
    // 処理が完了したらFirebaseの接続を閉じる
    await deleteApp(app);
  }
}

const docId = 'KZc9Ko0wSGVUHOqOO3Dx'; // 更新したいドキュメントのID
updateUser(docId);
