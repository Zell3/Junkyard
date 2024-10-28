/*
input 7 5
output
*******
*******
*******
*******
*******

input 5 9
output
*********
*********
*********
*********
*********
*/

const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question('input n1 n2 : ', (input) => {
  let n1 = input.split(' ')[0];
  let n2 = input.split(' ')[1];

  let max, min;

  min = Math.min(parseInt(n1), parseInt(n2));
  max = Math.max(parseInt(n1), parseInt(n2));

  console.log("output");
  printStars(min, max);
  rl.close();
});

function printStars(min, max) {
  for (let i = 1; i <= min; i++) {
    // let star = '';
    // for (let j = 1 ; j <= max; j++) {
    //   star += '*';
    // }
    // console.log(star);
    console.log('*'.repeat(max));
  }
}