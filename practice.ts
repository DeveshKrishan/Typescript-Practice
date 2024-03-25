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

// primitive types are string, number, and boolean
// can specify array in two ways
Array<number>;
function checkArray(numList: number[]){

}

// using keyword any disables all further type checking
let obj: any = {x: 0}

// remember you can declare type annotations on variable declarations
let userName: string = "Alice";

// can do optional properties by adding a "?" after the property name
function printName(obj: {first: string, second?: string}){
  // ...
}

printName({first: "Alice"}) // this is fine

// can use type alias 
type Points = {
  x: number;
  y: number;
}

// and then use type alias in action
function printCoord(pt: Points) {
  console.log("The coordinate's x value is " + pt.x);
  console.log("The coordinate's y value is " + pt.y);
}

// it seems that type alias and interfaces are very similar
// key difference is that type can be reopeneed to add new properties while interfaces are always extendable

// extending interface example
interface Animal {
  name: string;
}

interface Bear extends Animal {
  honey: boolean;
}

// if you declare a bear, it has name and honey properties

// you can also extend type via intersections
type Animals = {
  name: string;
}

type Bears = Animals & {
  honey: boolean;
}

// can also get name and honey properties same as interface example

// you can not redeclare types to get new properties

type uno = {
  title: string;
}

type uno = {
  key: number;
}

// this shows an error called duplicate error compared to interfaces which allows this

interface dos {
  title: string;
}

interface dos {
  key: number;
}

// no error and you can use both properties

