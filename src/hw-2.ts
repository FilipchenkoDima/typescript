// Task 1
let age: number;
age = 50;
// let name: string;
// name = "Max";
let toggle: boolean;
toggle = true;
let empty: null;
empty = null;
let notInitialize: undefined;
notInitialize = undefined;
let callback: (a: number) => number;
callback = (a) => {
  return 100 + a;
};

// Task 2
let anything: unknown;
anything = -20;
anything = "Text";
anything = {};

// Task 3
let some: unknown;
some = "Text";

let str: string;

if (typeof some === "string") {
  str = some;
}

// Task 4
let person1: [string, number];
person1 = ["Max", 21];

// Task 5
enum Progress {
  LOADING,
  READY,
}

const isLoading = {
  process: Progress.LOADING,
};

if (isLoading.process === Progress.LOADING) {
  console.log("Is loading");
}
if (isLoading.process === Progress.READY) {
  console.log("Is loading");
}

// Task 6
let variable: string | number;

// Task 7

let exm: "enable" | "disable";

// Task 8
function showMessage(message: string): void {
  console.log(message);
}

function calc(num1: number, num2: number): number {
  return num1 + num2;
}

function customError(): never {
  throw new Error("Error");
}

// Task 9
type page = {
  title: string;
  likes: number;
  accounts: string[];
  status: string;
  details?: {
    createAt: string;
    updateAt: string;
  };
};

const data: page = {
  title: "The awesome page",
  likes: 100,
  accounts: ["Max", "Anton", "Nikita"],
  status: "open",
  details: {
    createAt: "2021-01-01",
    updateAt: "2021-05-01",
  },
};

const data2: page = {
  title: "Python or Js",
  likes: 5,
  accounts: ["Alex"],
  status: "close",
};

