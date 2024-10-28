// Workshop #1
// ให้นิสิตเขียนโปรแกรมที่ตรวจสอบอายุของผู้ใช้และแสดงข้อความตามช่วงอายุ (เด็ก, วัยรุ่น, ผู้ใหญ่) โดยจะรับข้อมูลมาเป็นอายุ และจะแสดงผมตามนี้
// ถ้าอายุน้อยกว่า 13 ปี ให้แสดงเป็นคำว่า คุณเป็นเด็ก
// ถ้าอายุมากกว่า 13 แต่ น้อยกว่า 20 ปี ให้แสดงเป็นคำว่า คุณเป็นวัยรุ่น
// ถ้าอายุมากกว่า 20 ปี ให้แสดงคำว่า คุณเป็นผู้ใหญ่

const readline = require('readline');

const { stdin: input, stdout: output } = require('node:process');
const rl = readline.createInterface({ input, output });

rl.question('กรอกอายุ: ', (age) => {
    age = parseInt(age);
    if (age < 13) {
        console.log('คุณเป็นเด็ก');
    } else if (age >= 13 && age < 20) {
        console.log('คุณเป็นวัยรุ่น');
    } else {
        console.log('คุณเป็นผู้ใหญ่');
    }
    rl.close();
});
