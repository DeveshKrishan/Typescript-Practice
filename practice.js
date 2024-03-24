// https://www.typescriptlang.org/docs/handbook/typescript-in-5-minutes.html
// javascript is dynamically typed meaning running the code to see what happens
// typescript is a static type checker
var user = {
    name: "John",
    id: 5
};
// use interfaces to annotate params and return values
function deleteUser(user) {
}
function getRecentUser() {
    return user;
}
// to find the type of a variable
// use keyword typeof
console.log(typeof user === "number");
function logPoint(p) {
    console.log("".concat(p.x, ", ").concat(p.y));
}
// logs "12, 26"
var point = { x: 12, y: 26 };
logPoint(point);
