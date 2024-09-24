// 1920. Build Array from Permutation
// Input: nums = [0,2,1,3,4]
// Output: [0,1,2,3,4]

// input
var nums = [0,3,4,5,6,2,1];
// output = [0,5,6,2,1,4,3]

function buildArray(arr) {
  let result = [];
  for (var i = 0; i < arr.length; i++) {
    const index = arr[i];
    result.push(arr[index]);
  }
  return result;
}

console.log(buildArray(nums));
