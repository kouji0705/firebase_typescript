export interface IUser {
  name: string;
  email: string;
}

export interface IUserRepository {
  findById(id: string): Promise<IUser | null>;
  //   save(user: IUser): void;
  //   delete(user: IUser): void;
}
