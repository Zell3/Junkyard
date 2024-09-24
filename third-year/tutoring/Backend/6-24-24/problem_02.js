/**
 * โจทย์ backend ข้อที่ 2
 * คำอธิบาย : ให้สลับ index ของข้อมูลที่อยู่ใน array โดยมีเงื่อนไขคือ
 * 1. ให้สลับ index ที่ 1 กับ index ที่ 2 
 * 
 * หลังจากนั้นทำการ return array ที่สลับค่าเสร็จแล้วออกมา
 * 
 * ตัวอย่าง 
 * student = ['Bomgay', 'Ohm', 'Smart' ]
 * 
 * ผลลัพธ์
 * student = ['Bomgay', 'Smart', 'Ohm' ]
 */

arr = ['Bomgay', 'Ohm', 'Smart' ];

function exam02(arr) {
    // เก็บค่าตำแหน่งที่ 2 ไว้ในตัวแปร temp
    let temp = arr[2];
    // เซ็ตค่าตำแหน่งที่ 2 ให้มีค่าเป็นตำแหน่งที่ 1
    arr[2] = arr[1];
    // เซ็ตค่าตำแหน่งที่่ 1 ให้เป็นค่าตำแหน่งที่ทำการเก็บไว้
    arr[1] = temp;
    return arr
}

console.log(exam02(arr));