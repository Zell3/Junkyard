/**
 * โจทย์ backend ข้อที่ 11
 * เขียนฟังก์ชันเพื่อรวมค่าอาร์เรย์ 2 ชุดที่มีขนาดเท่ากัน โดยเอาค่าจากแต่ละ index มาบวกกัน
 * 
 * ตัวอย่าง
 * array1 = [1, 2, 3]
 * array2 = [4, 5, 6]
 * 
 * ผลลัพธ์: [5, 7, 9]
 */

const arr1 = [1, 2, 3];
const arr2 = [5, 7, 9];

function exam11(arr1, arr2) {
  // สร้างอาร์เรย์ใหม่ โดยบวกค่าที่ index เดียวกันจากทั้งสองอาร์เรย์
  let result = arr1.map((value, index) => value + arr2[index]);
  
  return result;
}

console.log(exam11(arr1, arr2));