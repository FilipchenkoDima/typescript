"use strict";
let age;
age = 50;
let toggle;
toggle = true;
let empty;
empty = null;
let notInitialize;
notInitialize = undefined;
let callback;
callback = (a) => {
    return 100 + a;
};
let anything;
anything = -20;
anything = "Text";
anything = {};
let some;
some = "Text";
let str;
if (typeof some === "string") {
    str = some;
}
let person1;
person1 = ["Max", 21];
var Progress;
(function (Progress) {
    Progress[Progress["LOADING"] = 0] = "LOADING";
    Progress[Progress["READY"] = 1] = "READY";
})(Progress || (Progress = {}));
const isLoading = {
    process: Progress.LOADING,
};
if (isLoading.process === Progress.LOADING) {
    console.log("Is loading");
}
if (isLoading.process === Progress.READY) {
    console.log("Is loading");
}
let variable;
let exm;
function showMessage(message) {
    console.log(message);
}
function calc(num1, num2) {
    return num1 + num2;
}
function customError() {
    throw new Error("Error");
}
const data = {
    title: "The awesome page",
    likes: 100,
    accounts: ["Max", "Anton", "Nikita"],
    status: "open",
    details: {
        createAt: "2021-01-01",
        updateAt: "2021-05-01",
    },
};
const data2 = {
    title: "Python or Js",
    likes: 5,
    accounts: ["Alex"],
    status: "close",
};
//# sourceMappingURL=hw-2.js.map