/**
 * โจทย์ backend ข้อที่ 14
 * เขียนฟังก์ชันเพื่อตรวจสอบว่าอาร์เรย์ที่กำหนดให้นั้นเรียงจากน้อยไปมากหรือไม่
 * 
 * ตัวอย่าง
 * array = [1, 2, 3, 4, 5]
 * 
 * ผลลัพธ์: true
 */

const arr = [1, 2, 3, 4, 5];
function exam14(arr) {
  let isSorted = true;
  for (let i = 0; i < arr.length - 1; i++) {
    if (arr[i] > arr[i + 1]) {
      isSorted = false;
      break;
    }
  }
  return isSorted;
}

console.log(exam14(arr));