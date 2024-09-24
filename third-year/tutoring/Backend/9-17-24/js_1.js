var Alice = [1, 2, 3];
var Bob = [4, 5, 6];

function calculateScore(arr1, arr2) {
  let aliceScore = 0;
  let bobScore = 0;

  for (let i = 0; i < arr1.length; i++) {
    if (arr1[i] > arr2[i]) {
      aliceScore++;
    } else if (arr1[i] < arr2[i]) {
      bobScore++;
    }
  }

  return {
    aliceScore: aliceScore,
    bobScore: bobScore
   };
}

console.log(calculateScore(Alice, Bob));