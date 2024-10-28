/**
 * โจทย์ backend ข้อที่ 1
 * คำอธิบาย : ให้รับค่า array จาก input และให้ทำการบวกค่าใน array โดยมีเงื่อนไขการเช็คดังนี้
 * 1. ถ้า array ที่ index ตำแหน่งนั้นๆ มีค่าเป็น int ให้ทำการบวกค่าลงในตัวแปร
 * 2. ถ้า array ที่ index ตำแหน่งนั้นๆ มีค่าเป็น string แต่มีตัวเลขผสมอยู่ใน string ให้ทำการตัดตัวอักษรออกและเปลี่ยนค่ามาเป็น int และทำการบวกค่าลงในตัวแปร
 * 
 * หลังจากนั้นทำการ return ค่าออกมาเป็นผลรวมของการบวก
 * 
 * ตัวอย่าง 
 * array = [1, '2a', '3abc', 4, 'def5', 'b6'];
 * 
 * ผลลัพธ์ = 21
 */

arr = [1, '2a', '3abc', 4, 'def5', 'b6'];

function exam01(arr) {
    // สร้างตัวแปร sum ไว้เก็บค่าผลรวม
    let sum = 0;

    // ลูปเอาค่าใน array มาทีละ index
    for (let i = 0; i < arr.length; i++) {
        // ถ้าเป็น number
        if (typeof arr[i] === 'number') {
            // บวกค่าลงใน sum
            sum += arr[i];
        // ถ้าเป็น string
        } else if (typeof arr[i] === 'string') {
            // เก็บตัว string ที่ตรงกับตัว regular expression ไว้ในตัวแปร num
            const num = arr[i].match(/(\d+)/);
            // ทำการดักไม่ให้ num เป็น null
            if (num) {
                // บวกค่ารวมเข้าไปใน sum โดยใช้ parseInt มาเปลี่ยนจาก string เป็น number แบบ integer
                sum += parseInt(num, 10);
            }
        }
    }
    return sum;
}

console.log(exam01(arr));