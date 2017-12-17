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

const arrangeFunc = function(cb, A, B, C) {
  cb(A, C, B)
  moveDisc(A, C)
  cb(B, A, C)
}


const towers = function(n, stacks) {
  let [A, B, C] = stacks;

  if (n === 0) {
    return stacks;
  } if (n === 1) {
    moveDisc(A, C);
    return stacks;
  }
let counter = 0;
  const sub = function(A, B, C, counter) {
    if (A.length === 0 && B.length === 0) {
      return
    }
    if (counter % 2 === 0 && !counter) {
      arrange2(A, B, C)
    }
    if (counter % 2 === 1 && !counter) {
      arrange2(A, C, B)
    }
    if (counter > 1) {
      arrange2(B, A, C)
    }




    if (A.length === 0 && B.length === 0) {
      return
    } else {
      if (counter % 2 === 0) {
        moveDisc(A, C)
      } else if (counter % 2 === 1){
        moveDisc(A, C)
      }

      sub(A, B, C, counter + 1)
    }


  }
  sub(A, B, C, 0)

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
// (function(n) {
//   console.log('===========================')
//   console.log('===========================')
//   const stacks = [[5,4,3,2,1],[],[]]
//   const hanoi = towers(n, stacks)
//   console.log(`${n} towers`, hanoi);
//   console.log(JSON.stringify(hanoi) === '[[],[],[5,4,3,2,1]]');
// })(5);
// (function(n) {
//   console.log('===========================')
//   console.log('===========================')
//   const stacks = [[6,5,4,3,2,1],[],[]]
//   const hanoi = towers(n, stacks)
//   console.log(`${n} towers`, hanoi);
//   console.log(JSON.stringify(hanoi) === '[[],[],[6,5,4,3,2,1]]');
// })(6);
// (function(n) {
//   console.log('===========================')
//   console.log('===========================')
//   const stacks = [[7,6,5,4,3,2,1],[],[]]
//   const hanoi = towers(n, stacks)
//   console.log(`${n} towers`, hanoi);
//   console.log(JSON.stringify(hanoi) === '[[],[],[7,6,5,4,3,2,1]]');
// })(7);
// (function(n) {
//   console.log('===========================')
//   console.log('===========================')
//   const stacks = [[8,7,6,5,4,3,2,1],[],[]]
//   const hanoi = towers(n, stacks)
//   console.log(`${n} towers`, hanoi);
//   console.log(JSON.stringify(hanoi) === '[[],[],[8,7,6,5,4,3,2,1]]');
// })(8);
// (function(n) {
//   console.log('===========================')
//   console.log('===========================')
//   const stacks = [[9,8,7,6,5,4,3,2,1],[],[]]
//   const hanoi = towers(n, stacks)
//   console.log(`${n} towers`, hanoi);
//   console.log(JSON.stringify(hanoi) === '[[],[],[9,8,7,6,5,4,3,2,1]]');
// })(9);
