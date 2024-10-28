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

function multiply(input: string): void {
  const n: number = parseInt(input);
  for (let i: number = 1; i <= 12; i++) {
    const spaces: string = i < 10 ? '   ' : '  ';
    console.log(`${n} x ${i}${spaces}= ${n * i}`);
  }
}

import * as readline from "readline";
const rl: readline.Interface = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

rl.question("Input: ", (input: string) => {
  multiply(input);
  rl.close();
});
