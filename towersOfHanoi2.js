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
const arrange6 = function(A, B, C) {
  arrange5(A, C, B)
  moveDisc(A, C)
  arrange5(B, A, C)
}
const arrange7 = function(A, B, C) {
  arrange6(A, C, B)
  moveDisc(A, C)
  arrange6(B, A, C)
}
const arrange8 = function(A, B, C) {
  arrange7(A, C, B)
  moveDisc(A, C)
  arrange7(B, A, C)
}
const arrange9 = function(A, B, C) {
  arrange8(A, C, B)
  moveDisc(A, C)
  arrange8(B, A, C)
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
  } else if (n === 6) {
    arrange6(A, B, C)
  } else if (n === 7) {
    arrange7(...stacks)
  } else if (n === 8) {
    arrange8(...stacks)
  } else if (n === 9) {
    arrange9(...stacks)
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
(function(n) {
  console.log('===========================')
  console.log('===========================')
  const stacks = [[6,5,4,3,2,1],[],[]]
  const hanoi = towers(n, stacks)
  console.log(`${n} towers`, hanoi);
  console.log(JSON.stringify(hanoi) === '[[],[],[6,5,4,3,2,1]]');
})(6);
(function(n) {
  console.log('===========================')
  console.log('===========================')
  const stacks = [[7,6,5,4,3,2,1],[],[]]
  const hanoi = towers(n, stacks)
  console.log(`${n} towers`, hanoi);
  console.log(JSON.stringify(hanoi) === '[[],[],[7,6,5,4,3,2,1]]');
})(7);
(function(n) {
  console.log('===========================')
  console.log('===========================')
  const stacks = [[8,7,6,5,4,3,2,1],[],[]]
  const hanoi = towers(n, stacks)
  console.log(`${n} towers`, hanoi);
  console.log(JSON.stringify(hanoi) === '[[],[],[8,7,6,5,4,3,2,1]]');
})(8);
(function(n) {
  console.log('===========================')
  console.log('===========================')
  const stacks = [[9,8,7,6,5,4,3,2,1],[],[]]
  const hanoi = towers(n, stacks)
  console.log(`${n} towers`, hanoi);
  console.log(JSON.stringify(hanoi) === '[[],[],[9,8,7,6,5,4,3,2,1]]');
})(9);
