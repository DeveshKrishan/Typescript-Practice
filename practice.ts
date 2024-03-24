// https://www.typescriptlang.org/docs/handbook/typescript-in-5-minutes.html
// javascript is dynamically typed meaning running the code to see what happens
// typescript is a static type checker

// use interface to describe an objects shape
interface User {
    name: string, 
    id: number
}

const user: User = {
    name: "John",
    id: 5
}

// use interfaces to annotate params and return values
function deleteUser(user: User){

}

function getRecentUser(): User {
    return user;
}

// can say a type can be of many types
type isHeHim = true | false;

type windowStates = "locked" | "unlocked";

// to find the type of a variable
// use keyword typeof
console.log(typeof user === "number");

type StringArray = Array<string>;

// structural type checking in typescript
// also called duck typing -> "If it walks like a duck and it quacks like a duck, then it must be a duck"
interface Point {
  x: number;
  y: number;
}
 
function logPoint(p: Point) {
  console.log(`${p.x}, ${p.y}`);
}
 
// logs "12, 26"
const point = { x: 12, y: 26 };
logPoint(point);

// tsc is the typescript compiler and compiles ts file into js file
// compile code with "tsc hello.ts"

// you don't have to explictly write out types, typescript can infer types
let msg = "hello there!";
let msg2: string = "hello there!";

// https://www.typescriptlang.org/docs/handbook/2/everyday-types.html