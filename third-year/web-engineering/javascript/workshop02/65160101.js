// Workshop #2 
// ให้นิสิตเขียนโปรแกรมที่รับหมายเลขวันในสัปดาห์ (1-7) และแสดงชื่อวันนั้น
// โดยถ้าเป็นเลข 1 จะแสดงวันอาทิตย์ และเลข 7 เป็นวันเสาร์

function Days(n) {
    const day = {
        "1": "วันอาทิตย์",
        "2": "วันจันทร์",
        "3": "วันอังคาร",
        "4": "วันพุธ",
        "5": "วันพฤหัสบดี",
        "6": "วันศุกร์",
        "7": "วันเสาร์"
    };
    return day[n] ?? "Input ไม่ถูกต้อง";
}

const readline = require('readline');

const { stdin: input, stdout: output } = require('node:process');
const rl = readline.createInterface({ input, output });

rl.question('กรอกตัวเลข 1-7: ', (n) => {
    console.log(Days(n));
    rl.close();
});
