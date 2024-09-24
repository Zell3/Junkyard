// 1380. Lucky Numbers in a Matrix

// Given an m x n matrix of distinct numbers
// return all lucky numbers in the matrix in any order.
// A lucky number is an element of the matrix such
// that it is the minimum element in its row and maximum in its column.

// Input: matrix = [[3,7,8],[9,11,13],[15,16,17]]
// [[3,7,8],
// [9,11,13],
// [15,16,17]]

// Output: [15]

const matrix = [[1,10,4,2],[9,3,8,7],[15,16,17,12]];

console.log("Lucky Number = " + luckyNumber(matrix));

function luckyNumber(matrix) {
  let row_min = [];
  let col_max = [];

  // find row_min
  for (let i = 0; i < matrix.length; i++) {
    let min = matrix[i][0];
    for (let j = 1; j < matrix[i].length; j++) {
      if (matrix[i][j] < min) {
        min = matrix[i][j];
      }
    }
    row_min.push(min);
  }

  for (let i = 0; i < matrix[0].length; i++) {
    let max = matrix[0][i];
    for (let j = 1; j < matrix.length; j++) {
      if (matrix[j][i] > max) {
        max = matrix[j][i];
      }
    }
    col_max.push(max);
  }

  console.log(col_max);
  console.log(row_min);

  // เทียบ row ว่าตรง col ไหม
  for (let i = 0; i < row_min.length; i++) {
    for (let j = 0; j < col_max.length; j++) {
      if (row_min[i] == col_max[j]) {
        return row_min[i];
      }
    }
  }
}
