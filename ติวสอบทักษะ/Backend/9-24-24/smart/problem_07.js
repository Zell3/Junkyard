/**
 * โจทย์ backend ข้อที่ 7
 * หาค่าเฉลี่ยของตัวเลขในอาร์เรย์ โดยไม่รวมค่าที่น้อยที่สุดและมากที่สุดออกไป
 * 
 * ตัวอย่าง
 * array = [5, 1, 2, 3, 4]
 * 
 * ผลลัพธ์: ค่าเฉลี่ยของ [2, 3, 4] = 3
 */
arr = [5, 1, 2, 3, 4]
function exam07(arr) {
    min = Math.min(...arr);
    max = Math.max(...arr);

    // ตัด min max ออก array
    let filterArray = arr.filter(item => item !== min && item !== max);

    // ผลรวมของ array
    let sum = filterArray.reduce((accumulator, currentValue) => accumulator + currentValue, 0);
    
    // ค่าเฉลี่ย
    let average = sum/filterArray.length;

    return average;
}

console.log(exam07(arr));