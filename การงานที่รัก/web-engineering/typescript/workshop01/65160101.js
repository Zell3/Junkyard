"use strict";
// Workshop#1
// จากโปรแกรมที่กำหนดให้จงระบุ Type แทน ____ ให้ถูกต้อง
Object.defineProperty(exports, "__esModule", { value: true });
var readline = require("readline");
var rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});
rl.question("Enter numbers separated by commas: ", function (input) {
    var items = input.split(",").map(Number);
    var uniqueItems = Array.from(new Set(items));
    var sum = uniqueItems.reduce(function (acc, curr) { return acc + curr; });
    console.log("Sum of unique items: ".concat(sum));
    rl.close();
});
