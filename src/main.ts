import { db } from './firestore';
import { UserRepository } from './users';

const userRepository = new UserRepository(db);
const docId = 'sxsUyqyyuVIK4sfVktne';
userRepository.findById(docId).then((user) => {
  if (user) {
    console.log('ユーザー情報:', user);
  } else {
    console.log('ユーザーが見つかりません');
  }
});
