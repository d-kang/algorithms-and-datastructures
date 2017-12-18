/**
* @Author: David Kang
* @Date:   12.03.2017 07:22pm
* @Filename: towersOfHanoi.js
* @Last modified time: 12.03.2017 07:22pm
*/

const moveTop = function(A, B) {
  B.push(A.pop());
}

const towers = function(n, ...stacks) {
  let [start, end, temp] = stacks;

  if (n <= 0) {
    return;
  }
  towers(n-1, start, temp, end)
  moveTop(start, end)
  towers(n-1, temp, end, start)

  return stacks;
};

(function(n) {
  console.log('===========================')
  console.log('===========================')
  const stacks = [[],[],[]]
  const hanoi = towers(n, ...stacks)
  console.log(`${n} towers`, hanoi);
  console.log(JSON.stringify(hanoi) === '[[],[],[]]' || JSON.stringify(hanoi) === '[[],[],[]]');
})(0);
(function(n) {
  console.log('===========================')
  console.log('===========================')
  const stacks = [[1],[],[]]
  const hanoi = towers(n, ...stacks)
  console.log(`${n} towers`, hanoi);
  console.log(JSON.stringify(hanoi) === '[[],[1],[]]' || JSON.stringify(hanoi) === '[[],[],[1]]');
})(1);
(function(n) {
  console.log('===========================')
  console.log('===========================')
  const stacks = [[2,1],[],[]]
  const hanoi = towers(n, ...stacks)
  console.log(`${n} towers`, hanoi);
  console.log(JSON.stringify(hanoi) === '[[],[2,1],[]]' || JSON.stringify(hanoi) === '[[],[],[2,1]]');
})(2);
// (function(n) {
//   console.log('===========================')
//   console.log('===========================')
//   const stacks = [[3,2,1],[],[]]
//   const hanoi = towers(n, ...stacks)
//   console.log(`${n} towers`, hanoi);
//   console.log(JSON.stringify(hanoi) === '[[],[3,2,1],[]]' || JSON.stringify(hanoi) === '[[],[],[3,2,1]]');
// })(3);
// (function(n) {
//   console.log('===========================')
//   console.log('===========================')
//   const stacks = [[4,3,2,1],[],[]]
//   const hanoi = towers(n, ...stacks)
//   console.log(`${n} towers`, hanoi);
//   console.log(JSON.stringify(hanoi) === '[[],[4,3,2,1],[]]' || JSON.stringify(hanoi) === '[[],[],[4,3,2,1]]');
// })(4);
// (function(n) {
//   console.log('===========================')
//   console.log('===========================')
//   const stacks = [[5,4,3,2,1],[],[]]
//   const hanoi = towers(n, ...stacks)
//   console.log(`${n} towers`, hanoi);
//  console.log(JSON.stringify(hanoi) === '[[],[5,4,3,2,1],[]]' || JSON.stringify(hanoi) === '[[],[],[5,4,3,2,1]]');
// })(5);
// (function(n) {
//   console.log('===========================')
//   console.log('===========================')
//   const stacks = [[6,5,4,3,2,1],[],[]]
//   const hanoi = towers(n, ...stacks)
//   console.log(`${n} towers`, hanoi);
//  console.log(JSON.stringify(hanoi) === '[[],[6,5,4,3,2,1],[]]' || JSON.stringify(hanoi) === '[[],[],[6,5,4,3,2,1]]');
// })(6);
// (function(n) {
//   console.log('===========================')
//   console.log('===========================')
//   const stacks = [[7,6,5,4,3,2,1],[],[]]
//   const hanoi = towers(n, ...stacks)
//   console.log(`${n} towers`, hanoi);
//  console.log(JSON.stringify(hanoi) === '[[],[7,6,5,4,3,2,1],[]]' || JSON.stringify(hanoi) === '[[],[],[7,6,5,4,3,2,1]]');
// })(7);
// (function(n) {
//   console.log('===========================')
//   console.log('===========================')
//   const stacks = [[8,7,6,5,4,3,2,1],[],[]]
//   const hanoi = towers(n, ...stacks)
//   console.log(`${n} towers`, hanoi);
//  console.log(JSON.stringify(hanoi) === '[[],[8,7,6,5,4,3,2,1],[]]' || JSON.stringify(hanoi) === '[[],[],[8,7,6,5,4,3,2,1]]');
// })(8);
// (function(n) {
//   console.log('===========================')
//   console.log('===========================')
//   const stacks = [[9,8,7,6,5,4,3,2,1],[],[]]
//   const hanoi = towers(n, ...stacks)
//   console.log(`${n} towers`, hanoi);
//  console.log(JSON.stringify(hanoi) === '[[],[9,8,7,6,5,4,3,2,1],[]]' || JSON.stringify(hanoi) === '[[],[],[9,8,7,6,5,4,3,2,1]]');
// })(9);
