// Workshop #2 
// ให้นิสิตเขียนโปรแกรมที่รับหมายเลขวันในสัปดาห์ (1-7) และแสดงชื่อวันนั้น
// โดยถ้าเป็นเลข 1 จะแสดงวันอาทิตย์ และเลข 7 เป็นวันเสาร์

function numToDays(n) {
  switch (n) {
    case 1:
      console.log("วันอาทิตย์");
      break;
    case 2:
      console.log("วันจันทร์");
      break;
    case 3:
      console.log("วันอังคาร");
      break;
    case 4:
      console.log("วันพุธ");
      break;
    case 5:
      console.log("วันพหัสบดี");
      break;
    case 6:
      console.log("วันศุกร์");
      break;
    case 7:
      console.log("วันเสาร์");
      break;
    default:
      console.log("รูปแบบข้อมูลไม่ถูกต้อง");
      break; 
  }
}

const readline = require('readline');

const { stdin: input, stdout: output } = require('node:process');
const rl = readline.createInterface({ input, output });

rl.question('กรอกตัวเลข 1-7: ', (n) => {
  numToDays(n);
  rl.close();
});