/**
 * โจทย์ backend ข้อที่ 15
 * เขียนฟังก์ชันที่รับค่าตัวเลข n และสร้างอาร์เรย์ที่มีความยาว n โดยสมาชิกในอาร์เรย์คือเลขคี่เริ่มจาก 1
 * 
 * ตัวอย่าง
 * input = 5
 * 
 * ผลลัพธ์: [1, 3, 5, 7, 9]
 */

// รับค่าจาก terminal โดยการใช้ keyboard พิมพ์เข้าไป
const readline = require('node:readline');
const { stdin: input, stdout: output } = require('node:process');
const rl = readline.createInterface({ input, output });

rl.question('Input number : ', (input) => {
  console.log(exam15(input));
  rl.close();
})

function exam15(number) {
  //  แก้ไขโค้ดตรงนี้
  let arr = [];
  for (let i = 1; i <= number * 2; i++) {
    if (i % 2 !== 0) {
      arr.push(i);
    }
  }
  return arr;
}