// การหาตัวเลขจากกฎ Collatz

// กฎ Collatz มีว่า: เริ่มจากตัวเลข n ถ้า n เป็นเลขคู่ ให้หาร n ด้วย 2
// แต่ถ้า n เป็นเลขคี่ ให้คูณ n ด้วย 3 แล้วบวก 1 ทำแบบนี้ไปเรื่อยๆจนกว่า n จะเท่ากับ 1
// เขียนฟังก์ชันเพื่อนับจำนวนขั้นตอนที่ต้องใช้ในการทำให้ n กลายเป็น 1

// Input: 6
// Output: 8  (ลำดับคือ 6 -> 3 -> 10 -> 5 -> 16 -> 8 -> 4 -> 2 -> 1)

const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question('input number (n) : ', (n) => {
  n = parseInt(n);
  collatz(n);
  rl.close();
});

function collatz(n) {
  count = 0;
  step = "";
  while(n!=1) {
    step+=n
    if(n%2==0) {
      n /= 2;
    } else {
      n = (n*3) + 1;
    }
    count++;
    step+= ' -> '
  }

  console.log('จำนวนขั้นตอนที่ต้องใช้ = ' + count + "( " + step + "1 )");
}