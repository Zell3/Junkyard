// Workshop #3
// ให้นิสิตทำการสร้างฟังก์ชัน number_of_max เป็นฟังก์ชันที่มีการรับค่า ชุดตัวเลข โดยจะนำเข้าเป็นตัวเลขและเว้นวรรค ไปเรื่อยๆ จนกว่าจะจบบรรทัด เพื่อหาจำนวนของค่าที่มากที่สุดที่ซ้ำกันใน Array และคืนค่าจำนวนที่ได้ออกมา แต่ถ้าไม่มีจำนวนที่ซ้ำกันเลยให้แสดงข้อความ
// "Not Duplicate"
// ตัวอย่างเช่น
// Input 1 20 3 4 20        Output  2
// เพราะว่า มีค่ามากที่สุด คือ 20 และ ซ้ำกันอยู่ 2 จำนวน จึงได้ผลลัพธ์เป็น 2


function number_of_max(input) {
    const numbers = input.split(' ').map(Number);
    const max_number = Math.max(...numbers);
    const count_max = numbers.filter(num => num === max_number).length;

    return count_max > 1 ? count_max : "Not Duplicate";
}

const readline = require('readline');

const { stdin: input, stdout: output } = require('node:process');
const rl = readline.createInterface({ input, output });

rl.question('Input ', (n) => {
    console.log('Output', number_of_max(n));
    rl.close();
});
