/**
* @Author: David Kang
* @Date:   12.03.2017 07:22pm
* @Filename: towersOfHanoi.js
* @Last modified time: 12.03.2017 07:22pm
*/

const moveDisc = function(stack_A, stack_B) {
  stack_B.push(stack_A.pop());
}

const arrange2 = function(stack_A, stack_B, stack_C) {
  moveDisc(stack_A, stack_B)
  moveDisc(stack_A, stack_C)
  moveDisc(stack_B, stack_C)
}
const arrange3 = function(stack_A, stack_B, stack_C) {
  arrange2(stack_A, stack_C, stack_B)
  moveDisc(stack_A, stack_C)
  arrange2(stack_B, stack_A, stack_C)
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
