interface Person {
  name: string;
  age: number;
}
type PersonKeys = keyof Person;

let key: PersonKeys = "name";
key = "age";
key = "gender"; // error

type User = {
  _id: number;
  name: string;
  email: string;
  createdAt: Date;
};

type UserKeysNoMeta = Exclude<keyof User, "_id" | "createdAt">; // will removed '_id' | 'createdAt'
type UserKeysNoMeta2 = Pick<User, "name" | "email">; // left only 'name' | 'email'

let user: UserKeysNoMeta = "name";
user = "_id"; // error

let user2: UserKeysNoMeta2 = "name"; // to ask Andry whats wrong in here
