/**
* @Author: David Kang
* @Date:   12.03.2017 07:22pm
* @Filename: towersOfHanoi.js
* @Last modified time: 12.03.2017 07:22pm
*/

const moveDisc = (arr1, arr2) => {
  arr2.push(arr1.pop());
}

const arrangeTwoDiscs = (start, temp, end) => {
  moveDisc(start, temp);
  moveDisc(start, end);
  moveDisc(temp, end);
}
const arrangeThreeDiscs = (start, temp, end) => {
  arrangeTwoDiscs(start, end, temp)
  moveDisc(start, end);
  arrangeTwoDiscs(temp, start, end)
}

const towersOfHanoi = (towers) => {
  const A = towers[0];
  const B = towers[1];
  const C = towers[2];
  const numOfDiscs = towers[0].length;
  const isEven = numOfDiscs % 2 === 0;

  if (numOfDiscs === 0) {
    return towers;
  }
  if (numOfDiscs === 1) {
    moveDisc(A, C);
  }
  if (numOfDiscs === 2) {
    arrangeTwoDiscs(A, B, C);
  }
  if (numOfDiscs === 3) {
    arrangeThreeDiscs(A, B, C)
  }
  if (numOfDiscs === 4) {
    arrangeTwoDiscs(A, B, C);
    moveDisc(A, B);
    arrangeTwoDiscs(C, A, B);
    moveDisc(A, C);
    arrangeThreeDiscs(B, A, C);
  }
  if (numOfDiscs === 5) {

  }

  /* if discs are odd */
  if (numOfDiscs) {

  } else {

  }

  return towers;
}



(function(numberOfDiscs) {
  console.log('-------------------------------')
  console.log('-------------------------------')
  console.log('numberOfDiscs', numberOfDiscs);
  const input = [[],[],[]];
  const expected = [[], [], []];
  const actual = towersOfHanoi(input);
  const sInput = JSON.stringify(input);
  const sExpected = JSON.stringify(expected);
  const sActual = JSON.stringify(actual);
  console.log(`${sInput}>>>`, sExpected === sActual)
  console.log('actual>>>', actual);
  console.log('expected>>>', expected);
})(0);


(function(numberOfDiscs) {
  console.log('-------------------------------')
  console.log('numberOfDiscs', numberOfDiscs);
  const input = [[1],[],[]];
  const expected = [[], [], [1]];
  const actual = towersOfHanoi(input);
  const sInput = JSON.stringify(input);
  const sExpected = JSON.stringify(expected);
  const sActual = JSON.stringify(actual);
  console.log(`${sInput}>>>`, sExpected === sActual)
  console.log('actual>>>', actual);
  console.log('expected>>>', expected);
})(1);


(function(numberOfDiscs) {
  console.log('-------------------------------')
  console.log('numberOfDiscs', numberOfDiscs);
  const input = [[2, 1],[],[]];
  const expected = [[], [], [2, 1]];
  const actual = towersOfHanoi(input);
  const sInput = JSON.stringify(input);
  const sExpected = JSON.stringify(expected);
  const sActual = JSON.stringify(actual);
  console.log(`${sInput}>>>`, sExpected === sActual)
  console.log('actual>>>', actual);
  console.log('expected>>>', expected);
})(2);


(function(numberOfDiscs) {
  console.log('-------------------------------')
  console.log('numberOfDiscs', numberOfDiscs);
  const input = [[3, 2, 1],[],[]];
  const expected = [[], [], [3, 2, 1]];
  const actual = towersOfHanoi(input);
  const sInput = JSON.stringify(input);
  const sExpected = JSON.stringify(expected);
  const sActual = JSON.stringify(actual);
  console.log(`${sInput}>>>`, sExpected === sActual)
  console.log('actual>>>', actual);
  console.log('expected>>>', expected);
})(3);


(function(numberOfDiscs) {
  console.log('-------------------------------')
  console.log('numberOfDiscs', numberOfDiscs);
  const input = [[4, 3, 2, 1],[],[]];
  const expected = [[], [], [4, 3, 2, 1]];
  const actual = towersOfHanoi(input);
  const sInput = JSON.stringify(input);
  const sExpected = JSON.stringify(expected);
  const sActual = JSON.stringify(actual);
  console.log(`${sInput}>>>`, sExpected === sActual)
  console.log('actual>>>', actual);
  console.log('expected>>>', expected);
})(4);

console.log('-------------------------------')
console.log('-------------------------------')



// const towersOfHanoi = (n) => {
  // intialize start, temp, end stacks
  // range start stack from n - 1 >>> [n, ..., 3, 2, 1]

  // peak will check last item in stack

// }


const Tower = function() {
  this.top = -1; // push will add one to top
  this.stack = [];
}

Tower.prototype.push = function(val) {

  if (this.stack[this.top] < val) {
    throw new Error('ERROR pushed value must be less than top of stack')
  }
  this.top++;
  this.stack[this.top] = val;

  return this // return tower
}
Tower.prototype.pop = function() {
  this.top--;
  return this.stack.pop();
}
Tower.prototype.peak = function() {
  return this.stack[this.top];
}
Tower.prototype.size = function() {
  return this.stack.length
}

const tower = new Tower()
tower.push(5)
tower.push(4)
tower.push(3)
// tower.pop();
console.log('tower', tower)
console.log('tower.stack', JSON.stringify(tower.stack));
console.log('peak', tower.peak());

// class Tower {
//   constructor() {
//     this.top = -1;
//     this.stack = [];
//   }
//   push(val) {
//     if (this.stack[this.top] < val) {
//       throw new Error('ERROR pushed value must be less than top of stack')
//     }
//     this.top++;
//     this.stack[this.top] = val;
//
//     return this // return tower
//   }
//   pop() {}
// }
