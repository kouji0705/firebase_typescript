import { deleteApp } from "firebase/app"
import { db,app } from "./firestore";
import { collection, getDocs } from "firebase/firestore";

async function getUsers() {
    const querySnapshot = await getDocs(collection(db, "users"));
    querySnapshot.forEach((doc) => {
        console.log(`${doc.id} => ${JSON.stringify(doc.data())}`);
    });
    // 処理が完了したらFirebaseの接続を閉じる
    await deleteApp(app);
}

getUsers().catch(console.error);