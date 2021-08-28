const isFetching: boolean = true;

const int: number = 42;
const float: number = 4.2;
const num: number = 3e10;

const message: string = "hello TypeScript!";

const numberArray: Array<number> = [1, 1, 2, 3, 5, 8, 13];
const numberArray2: number[] = [1, 1, 2, 3, 5, 8, 13];

// tuple
const contact: [string, number] = ["pete", 89523756667];

let variable: any = 42;
variable = "new string";
variable = [];

const sayMyName = (name: string): void => console.log(name);
sayMyName("pete");

// Never
const throwError = (message: string): never => {
  // to ask Andry more about this type
  throw new Error(message);
};

// Type
type Login = string;
const login: Login = "admin";

type ID = string | number; // ID is Alias
const id: ID = 123;
const ID2: ID = "OneTwoThree";

type someType = string | null | undefined;
