/**
 * @param {number[]} nums
 * @return {number}
 */
var singleNumber = function(nums) {
  for (var i = 0; i < nums.length; i++) {
    var found = false;
    for (var j = 0; j < nums.length; j++) {
      if (i === j) continue;
      if (nums[i] === nums[j]) {
        found = true;
      }
    }
    if (!found) return nums[i];
  }  
};

// Test the function

var nums = [4, 1, 2, 1, 2];
console.log(singleNumber(nums)); // Output: 4