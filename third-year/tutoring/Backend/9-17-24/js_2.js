/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */

let nums = [1, 2, 3, 4, 5]

var twoSum = function(nums, target) {
  for (var i = 0 ; i < nums.length ; i++) {
    for (var j = i+1 ; j < nums.length ; j++) {
      if (nums[i] + nums[j] === target) {
        return [i, j];
      }
    }
  }
};

console.log(twoSum(nums, 4));