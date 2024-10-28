"use strict";
// Workshop #4
// สร้างโปรแกรมแสดงตารางสูตรคูณจากค่าที่รับจากผู้ใช้
// ตัวอย่างเช่น Input number เป็น 2 จะได้
// 2 x 1   = 2
// 2 x 2   = 4
// 2 x 3   = 6
// 2 x 4   = 8
// 2 x 5   = 10
// 2 x 6   = 12
// 2 x 7   = 14
// 2 x 8   = 16
// 2 x 9   = 18
// 2 x 10  = 20
// 2 x 11  = 22
// 2 x 12  = 24
Object.defineProperty(exports, "__esModule", { value: true });
function multiply(input) {
    var n = parseInt(input);
    for (var i = 1; i <= 12; i++) {
        var spaces = i < 10 ? '   ' : '  ';
        console.log("".concat(n, " x ").concat(i).concat(spaces, "= ").concat(n * i));
    }
}
var readline = require("readline");
var rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});
rl.question("Input: ", function (input) {
    multiply(input);
    rl.close();
});
