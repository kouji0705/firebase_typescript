import { db } from './repository/firestore';
import { UserRepository } from './repository/firestore/users';

(async () => {
  const userRepository = new UserRepository(db);
  const docId = 'sxsUyqyyuVIK4sfVktne';
  const user = await userRepository.findById(docId);
  console.log(user);
  const users = await userRepository.getUsers();
  console.log('=======HIT8 ', users);
})();
