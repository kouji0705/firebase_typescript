import { deleteApp } from 'firebase/app';
import { collection, doc, getDoc, getDocs } from 'firebase/firestore';
import { db, app } from '../firestore';

// コレクションの全ドキュメントを取得する
async function getUsers() {
  const querySnapshot = await getDocs(collection(db, 'users'));
  querySnapshot.forEach((doc) => {
    console.log(`${doc.id} => ${JSON.stringify(doc.data())}`);
  });

  // 処理が完了したらFirebaseの接続を閉じる
  await deleteApp(app);
}

// コレクション内の対象ドキュメントを取得する
async function findById(docId: string) {
  const docRef = doc(db, 'users', docId);
  const docSnap = await getDoc(docRef);

  if (docSnap.exists()) {
    console.log('Document data:', docSnap.data());
  } else {
    console.log('No such document!');
  }
  // 処理が完了したらFirebaseの接続を閉じる
  await deleteApp(app);
}
