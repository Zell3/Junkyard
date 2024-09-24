/**
 * โจทย์ backend ข้อที่ 4
 * หาค่า max และ min จาก array ที่กำหนดให้
 * จากนั้นนำค่า max และ min มาบวกกันแล้ว return ออกมา
 * 
 * ตัวอย่าง
 * array = [ 3, 4, 5, 1, 2 ]
 * 
 * ผลลัพธ์ = 6
 */

arr = [ 3, 4, 5, 1, 2 ];
function exam04(arr) {
    // ประกาศตัวแปร max และ min มีค่าของ array ตำแหน่งที่ 0
    let max = arr[0];
    let min = arr[0];

    // ลูปค่าทั้งหมดใน array โดยเริ่มจาก index 1 ได้ เพราะเราได้ทำการตั้งค่า max และ min ด้วยค่าของ array ตำแหน่งที่ 0 ไปแล้ว
    for (let i = 1; i < arr.length; i++) {
        // ถ้าตำแหน่งนั้นมีค่ามากกว่าค่า max ที่ตั้งไว้ ให้ทำการเปลี่ยนค่า max
        if (arr[i] > max) {
            max = arr[i];
        }
        // ถ้าตำแหน่งนั้นมีค่ามากกว่าค่า min ที่ตั้งไว้ ให้ทำการเปลี่ยนค่า min
        if (arr[i] < min) {
            min = arr[i];
        }
    }

    // สำหรับใครอยากใช้ forEach
    // arr.forEach((item) => {
    //     if (item > max) {
    //         max = item;
    //     }
    //     if (item < min) {
    //         min = item;
    //     }
    // });

    // หรือจะ advanced กว่านั้น
    // min = Math.min(...arr);
    // max = Math.max(...arr);
    return max + min;
}

console.log(exam04(arr));
