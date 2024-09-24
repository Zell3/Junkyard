// ทำการเช็คตัวเลขใน array ของ bob กับ alice ทีละตำแหน่งเดียวกัน
// ใครมากกว่าได้คะแนน
// เท่ากันไม่มีใครได้คะแนน

const Alice = [9, 8, 7, 6, 5];
const Bob = [1, 2, 3, 4, 5];

console.log(calculateScore(Alice, Bob)); // calculate

function calculateScore(alice, bob) {
  let aliceScore = 0;
  let bobScore = 0;

  for (let i = 0; i < alice.length; i++) {
    if (alice[i] > bob[i]) {
      aliceScore++;
    } else if (alice[i] < bob[i]) {
      bobScore++;
    }
  }

  return `aliceScore = ${aliceScore}, bobScore = ${bobScore}`;
}
