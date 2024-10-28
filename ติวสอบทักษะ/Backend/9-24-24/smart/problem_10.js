/**
 * โจทย์ backend ข้อที่ 10
 * เขียนฟังก์ชันที่รับค่า string และทำการสลับอักษรที่ตำแหน่งคู่กับคี่
 * 
 * ตัวอย่าง
 * input = "abcdef"
 * 
 * ผลลัพธ์: "badcfe"
 */

// รับค่าจาก terminal โดยการใช้ keyboard พิมพ์เข้าไป
const readline = require('node:readline');
const { stdin: input, stdout: output } = require('node:process');
const rl = readline.createInterface({ input, output });

rl.question('Input string : ', (input) => {
  console.log(exam10(input));
  rl.close();
});

function exam10(text) {
  // สร้าง array จาก string
  let arr = text.split('');
  
  // วนลูปโดยสลับอักษรที่ตำแหน่งคู่กับคี่
  for (let i = 0; i < arr.length - 1; i += 2) {
    // สลับตำแหน่ง i และ i+1
    let temp = arr[i];
    arr[i] = arr[i + 1];
    arr[i + 1] = temp;
  }
  
  // แปลง array กลับเป็น string และคืนค่าผลลัพธ์
  return arr.join('');
}
