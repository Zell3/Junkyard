/**
 * โจทย์ backend ข้อที่ 5
 * การหมุน (rotation) จะทำการย้ายสมาชิกตัวสุดท้ายของอาร์เรย์ไปที่ตำแหน่งแรก 
 * ในโจทย์นี้มีอาร์เรย์เริ่มต้นคือ [ 1, 2, 3, 4, 5 ] และมีการหมุนไปทั้งหมด n ครั้ง
 * 
 * ตัวอย่าง
 * หมุน 3 ครั้ง
 * 
 * ข้อมูลเริ่มต้น: [ 1, 2, 3, 4, 5 ]
 * หมุน 1 ครั้ง: [ 5, 1, 2, 3, 4 ] (สมาชิกตัวสุดท้าย 5 ถูกย้ายไปตำแหน่งแรก)
 * หมุน 2 ครั้ง: [ 4, 5, 1, 2, 3 ] (สมาชิกตัวสุดท้าย 4 ถูกย้ายไปตำแหน่งแรก)
 * หมุน 3 ครั้ง: [ 3, 4, 5, 1, 2 ] (สมาชิกตัวสุดท้าย 3 ถูกย้ายไปตำแหน่งแรก)
 * 
 * ผลลัพธ์: [ 3, 4, 5, 1, 2 ]
 */


// รับค่าจาก terminal โดยการใช้ keyboard พิมพ์เข้าไป
const readline = require('node:readline');
const { stdin: input, stdout: output } = require('node:process');
const rl = readline.createInterface({ input, output });

rl.question('Input round : ', (input) => {
  console.log(exam05(input));
  rl.close();
});

function exam05(round) {
    let arr = [1, 2, 3, 4, 5]
    // ลูปครั้งในการหมุน
    for (let i = 1; i <= round; i++) {
        // // หาตัวตำแหน่งสุดท้ายของ array เก็บไว้ในตัวแปร last
        let last = arr[arr.length - 1];
        // ทำการลูป array โดยเริ่มนับ index ตำแหน่งสุดท้าย
        for (let j = arr.length - 1; j > 0; j--) {
            // ทำการเซ็ตตำแหน่งที่ j ด้วย j-1
            arr[j] = arr[j-1];
        }
        arr[0] = last;

        // หรือจะ advanced กว่านั้น เพียงแค่ใข้ตัวนี้
        // arr.unshift(arr.pop());
    }

    return arr
};