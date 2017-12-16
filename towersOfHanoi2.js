/**
* @Author: David Kang
* @Date:   12.03.2017 07:22pm
* @Filename: towersOfHanoi.js
* @Last modified time: 12.03.2017 07:22pm
*/

const moveDisc = function(A, B) {
  B.push(A.pop());
}

const arrange2 = function(A, B, C) {
  moveDisc(A, B)
  moveDisc(A, C)
  moveDisc(B, C)
}
const arrange3 = function(A, B, C) {
  arrange2(A, C, B)
  moveDisc(A, C)
  arrange2(B, A, C)
}
const arrange4 = function(A, B, C) {
  arrange3(A, C, B)
  moveDisc(A, C)
  arrange3(B, A, C)
}
const arrange5 = function(A, B, C) {
  arrange4(A, C, B)
  moveDisc(A, C)
  arrange4(B, A, C)
}

const towers = function(n, stacks) {
  let [A, B, C] = stacks;

  if (n === 0) {
    return stacks
  } else if (n === 1) {
    moveDisc(A, C);
    return stacks;
  } else if (n === 2 ) {
    arrange2(A, B, C);
  } else if (n === 3) {
    arrange3(A, B, C)
  } else if (n === 4) {
    arrange4(A, B, C)
  } else if (n === 5) {
    arrange5(A, B, C)
  }






  return stacks;
};



(function(n) {
  console.log('===========================')
  console.log('===========================')
  const stacks = [[],[],[]]
  const hanoi = towers(n, stacks)
  console.log(`${n} towers`, hanoi);
  console.log(JSON.stringify(hanoi) === '[[],[],[]]');
})(0);
(function(n) {
  console.log('===========================')
  console.log('===========================')
  const stacks = [[1],[],[]]
  const hanoi = towers(n, stacks)
  console.log(`${n} towers`, hanoi);
  console.log(JSON.stringify(hanoi) === '[[],[],[1]]');
})(1);
(function(n) {
  console.log('===========================')
  console.log('===========================')
  const stacks = [[2,1],[],[]]
  const hanoi = towers(n, stacks)
  console.log(`${n} towers`, hanoi);
  console.log(JSON.stringify(hanoi) === '[[],[],[2,1]]');
})(2);
(function(n) {
  console.log('===========================')
  console.log('===========================')
  const stacks = [[3,2,1],[],[]]
  const hanoi = towers(n, stacks)
  console.log(`${n} towers`, hanoi);
  console.log(JSON.stringify(hanoi) === '[[],[],[3,2,1]]');
})(3);
(function(n) {
  console.log('===========================')
  console.log('===========================')
  const stacks = [[4,3,2,1],[],[]]
  const hanoi = towers(n, stacks)
  console.log(`${n} towers`, hanoi);
  console.log(JSON.stringify(hanoi) === '[[],[],[4,3,2,1]]');
})(4);
(function(n) {
  console.log('===========================')
  console.log('===========================')
  const stacks = [[5,4,3,2,1],[],[]]
  const hanoi = towers(n, stacks)
  console.log(`${n} towers`, hanoi);
  console.log(JSON.stringify(hanoi) === '[[],[],[5,4,3,2,1]]');
})(5);
