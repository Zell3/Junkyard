// เรียงออเดอร์ง่ายๆ โดยมีการส่งค่าข้อมูลไปในฟังก์ชัน ใช้ array linklist
// input ต้องรับค่าได้แค่ตัวเลข
// เช่น มี linkedlist [1,2,3,4,5,6,7,8,9] แล้ว input 3 เข้าไปจะเป็น [1,2,3,3,4,5,6,7,8,9]


const readline = require('node:readline');
const { stdin: input, stdout: output } = require('node:process');
const rl = readline.createInterface({ input, output });

// readline ไว้รับค่า จาก terminal
rl.question('Input number : ', (input) => {
  // เช็คว่า string นั้นเป็น number ไหม
  if (!isNaN(input)) {
    console.log(inputAndSortLinkedList(parseInt(input)));
  } else {
    console.log(input + " is not number");
  }
  rl.close();
});

function inputAndSortLinkedList(input) {
  let list = [1,2,3,4,5,6,7,8,9];
  // เพิ่มค่าเข้าไปใน array linked list
  list.push(input);
  // จากนั้น sort ตัวเลขใน array linked list โดย 
  // ascending (a - b) ถ้าอยากเป็น descending ใช้ (b - a)
  list.sort((a, b) => a - b);
  return list;
}

