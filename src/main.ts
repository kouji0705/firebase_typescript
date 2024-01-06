import { IUser } from './domain/users/model';
import { db } from './repository/firestore';
import { UserRepository } from './repository/firestore/users';

(async () => {
  const userRepository = new UserRepository(db);
  const docId = 'sxsUyqyyuVIK4sfVktne';
  const user = await userRepository.findById(docId);
  console.log(user);
  const users = await userRepository.getUsers();
  console.log('=======users ', users);
  const newUser: IUser = {
    name: 'newUser',
    email: 'oo@gmail.com',
  };
  await userRepository.createNewUser(newUser);
})();
