/**
 * โจทย์ backend ข้อที่ 13
 * เขียนฟังก์ชันเพื่อลบตัวเลขที่เป็นคี่ทั้งหมดในอาร์เรย์
 * 
 * ตัวอย่าง
 * array = [1, 2, 3, 4, 5]
 * 
 * ผลลัพธ์: [2, 4]
 */

const arr = [1, 2, 3, 4, 5];

function exam13(arr) {
  // ใช้ filter เพื่อกรองตัวเลขที่เป็นคู่
  return arr.filter(number => number % 2 === 0);
}

console.log(exam13(arr));