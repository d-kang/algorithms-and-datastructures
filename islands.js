function getIslands(matrix) {
  // init counter
  var counter = 0;
//   debugger;
  // iterate over matrix row
  for (var row = 0; row < matrix.length; row++) {
    for (var col = 0; col < matrix[row].length; col++) {
      if (matrix[row][col] === 1) {
        counter++;
        traverse(matrix, row, col);
      }
    }
  }
    // iterate over sub array col
      // current cell is matrix[row][col]
      // is current cell an island ?
        // if yes
          // add one to count
          // traverse island to toggle pieces


  return counter;
}

function traverse(matrix, row, col) {
  matrix[row][col] = -1;
  if (matrix[row][col + 1] === 1) { // right
    traverse(matrix, row, col + 1);
  }
  if (matrix[row + 1] !== undefined && matrix[row + 1][col] === 1) { // down
    traverse(matrix, row + 1, col);
  }
  if (matrix[row][col - 1] === 1) { // left
    traverse(matrix, row, col - 1);
  }
}

const matrix = [
  [0, 1, 0],
  [1, 1, 1],
  [0, 1, 0],
  [0, 0, 0],
  [1, 0, 0],
  [0, 1, 1]
]
console.log(getIslands(matrix));
