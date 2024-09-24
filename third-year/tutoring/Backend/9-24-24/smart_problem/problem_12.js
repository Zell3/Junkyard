/**
 * โจทย์ backend ข้อที่ 12
 * ให้เขียนฟังก์ชันหาจำนวนตัวอักษรที่ซ้ำกันใน string
 * 
 * ตัวอย่าง
 * input = "hello"
 * 
 * ผลลัพธ์: {h: 1, e: 1, l: 2, o: 1}
 */

// รับค่าจาก terminal โดยการใช้ keyboard พิมพ์เข้าไป
const readline = require('node:readline');
const { stdin: input, stdout: output } = require('node:process');
const rl = readline.createInterface({ input, output });

rl.question('Input string : ', (text) => {
  console.log(exam12(text));
  rl.close();
})

function exam12(text) {
  let charCount = {}; // สร้างวัตถุเก็บจำนวนตัวอักษร

  for (let char of text) {
    if (charCount[char]) {
      charCount[char]++; // ถ้าตัวอักษรเจอซ้ำให้เพิ่มค่า
    } else {
      charCount[char] = 1; // ถ้าเจอครั้งแรกให้ตั้งค่าเป็น 1
    }
  }

  return charCount; // คืนค่าผลลัพธ์
}