/**
 * โจทย์ backend ข้อที่ 8
 * เขียนฟังก์ชันเพื่อตรวจสอบว่า string ที่กำหนดให้นั้นเป็น palindrome หรือไม่
 * 
 * ตัวอย่าง
 * input = "madam"
 * 
 * ผลลัพธ์: true
 */

const text = "madam"

function exam08(text) {
    for (let i = 0; i < text.length / 2; i++) {
        if (text[i] !== text[text.length - i - 1]) {
          return false
        }
    }
    return true
}

console.log(exam08(text));