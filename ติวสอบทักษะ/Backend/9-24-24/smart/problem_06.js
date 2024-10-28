/**
 * โจทย์ backend ข้อที่ 6
 * เขียนฟังก์ชันเพื่อลบค่าที่ซ้ำกันในอาร์เรย์ โดยคงไว้เฉพาะค่าที่ไม่ซ้ำกัน
 * 
 * ตัวอย่าง
 * array = [1, 2, 2, 3, 4, 4, 5]
 * 
 * ผลลัพธ์: [1, 2, 3, 4, 5]
 */

arr = [1, 2, 2, 3, 4, 4, 5]
function exam06(arr) {
  let result = [];
  arr.forEach(element => {
    if (element % 2 == 0) {
      //เพิ่มลง array result
      result.push(element);
    }
  });
  return result;
}

console.log(exam06(arr));