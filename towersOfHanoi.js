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


//
// (function(numberOfDiscs) {
//   console.log('-------------------------------')
//   console.log('-------------------------------')
//   console.log('numberOfDiscs', numberOfDiscs);
//   const input = [[],[],[]];
//   const expected = [[], [], []];
//   const actual = towersOfHanoi(input);
//   const sInput = JSON.stringify(input);
//   const sExpected = JSON.stringify(expected);
//   const sActual = JSON.stringify(actual);
//   console.log(`${sInput}>>>`, sExpected === sActual)
//   console.log('actual>>>', actual);
//   console.log('expected>>>', expected);
// })(0);
//
//
// (function(numberOfDiscs) {
//   console.log('-------------------------------')
//   console.log('numberOfDiscs', numberOfDiscs);
//   const input = [[1],[],[]];
//   const expected = [[], [], [1]];
//   const actual = towersOfHanoi(input);
//   const sInput = JSON.stringify(input);
//   const sExpected = JSON.stringify(expected);
//   const sActual = JSON.stringify(actual);
//   console.log(`${sInput}>>>`, sExpected === sActual)
//   console.log('actual>>>', actual);
//   console.log('expected>>>', expected);
// })(1);
//
//
// (function(numberOfDiscs) {
//   console.log('-------------------------------')
//   console.log('numberOfDiscs', numberOfDiscs);
//   const input = [[2, 1],[],[]];
//   const expected = [[], [], [2, 1]];
//   const actual = towersOfHanoi(input);
//   const sInput = JSON.stringify(input);
//   const sExpected = JSON.stringify(expected);
//   const sActual = JSON.stringify(actual);
//   console.log(`${sInput}>>>`, sExpected === sActual)
//   console.log('actual>>>', actual);
//   console.log('expected>>>', expected);
// })(2);
//
//
// (function(numberOfDiscs) {
//   console.log('-------------------------------')
//   console.log('numberOfDiscs', numberOfDiscs);
//   const input = [[3, 2, 1],[],[]];
//   const expected = [[], [], [3, 2, 1]];
//   const actual = towersOfHanoi(input);
//   const sInput = JSON.stringify(input);
//   const sExpected = JSON.stringify(expected);
//   const sActual = JSON.stringify(actual);
//   console.log(`${sInput}>>>`, sExpected === sActual)
//   console.log('actual>>>', actual);
//   console.log('expected>>>', expected);
// })(3);
//
//
// (function(numberOfDiscs) {
//   console.log('-------------------------------')
//   console.log('numberOfDiscs', numberOfDiscs);
//   const input = [[4, 3, 2, 1],[],[]];
//   const expected = [[], [], [4, 3, 2, 1]];
//   const actual = towersOfHanoi(input);
//   const sInput = JSON.stringify(input);
//   const sExpected = JSON.stringify(expected);
//   const sActual = JSON.stringify(actual);
//   console.log(`${sInput}>>>`, sExpected === sActual)
//   console.log('actual>>>', actual);
//   console.log('expected>>>', expected);
// })(4);
//
// console.log('-------------------------------')
// console.log('-------------------------------')



// ES6 class
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

const Tower = function(n) {
  this.top = -1; // push will add one to top
  this.stack = [];

  for (let i = n; i > 0; i--) {
    this.stack.push(i);
  }
}

// push
Tower.prototype.push = function(val) {
  if (this.stack[this.top] < val) {
    throw new Error('ERROR pushed value must be less than top of stack')
  }
  this.top++;
  this.stack.push(val)
  // this.stack[this.top] = val;
  return this // return tower
}

// pop
Tower.prototype.pop = function() {
  console.log('this.top', this.top)
  this.top--;
  return this.stack.pop();

}

// peek
Tower.prototype.peek = function() {
  return this.stack[this.top];
}

// size
Tower.prototype.size = function() {
  return this.stack.length
}


const moveDonut = function(start, end) {
  end.push(start.pop());
};

const move2discs = function(start, temp, end) {
  moveDonut(start, temp);
  moveDonut(start, end);
  moveDonut(temp, end);
}

const move3Discs = function(start, temp, end) {
  moveDonut(start, end);
  moveDonut(start, temp);
  moveDonut(end, temp);
  moveDonut(start, end);
  moveDonut(temp, start);
  moveDonut(temp, end)
  moveDonut(start, end)
}

// by looking at all three know what move needs to made that round and recurse
// repeatable pattern between odds .... and between evens?
const moveDonuts = function(start, temp, end) {
  // do the thing
  // n = 1
  // moveDonut(start, end)

  // n = 2
  // moveDonut(start, temp);
  // moveDonut(start, end);
  // moveDonut(temp, end);

  // n = 3
  // moveDonut(start, end);
  // moveDonut(start, temp);
  // moveDonut(end, temp);
  // moveDonut(start, end);
  // moveDonut(temp, start);
  // moveDonut(temp, end)
  // moveDonut(start, end)

  // n = 4
  // moveDonut(start, temp);
  // moveDonut(start, end);
  // moveDonut(temp, end);
  // moveDonut(start, temp);
  // moveDonut(temp, start);
  // moveDonut(start, temp);
  // moveDonut(end, start);
  // moveDonut(end, temp);
  // moveDonut(start, temp);
  // moveDonut(start, end);
  // // move 3 discs from temp to end
  // move3Discs(temp, start, end);

  // n = 5
  // moveDonut(start, end);
  // moveDonut(start, temp);
  // moveDonut(end, temp);
  // moveDonut(start, end);
  // moveDonut(temp, start);
  // moveDonut(temp, end);
  // moveDonut(start, end);
  // // disc 4 placed on temp
  // moveDonut(start, temp) // last move or a first move
  // moveDonut(end, temp)
  // moveDonut(end, start)
  // moveDonut(temp, start)
  // moveDonut(end, temp)
  // moveDonut(start, end)
  // moveDonut(start, temp)
  // moveDonut(end, temp)
  // // disc 5 placed on end
  // moveDonut(start, end)
  // moveDonut(temp, start)
  // moveDonut(temp, end)
  // moveDonut(start, end)
  // moveDonut(temp, start)
  // moveDonut(end, temp)
  // moveDonut(end, start)
  // moveDonut(temp, start)
  // // place disc 4 from temp to end
  // moveDonut(temp, end)
  // moveDonut(start, end) // 3 disc from start to end
  // moveDonut(start, temp)
  // moveDonut(end, temp)
  // moveDonut(start, end)
  // moveDonut(temp, start)
  // moveDonut(temp, end)
  // moveDonut(start, end)

  // alt n = 5
  move3Discs(start, temp, end) // move 3 discs to end
  moveDisc(start, temp) // place next largest disc (4) at temp
  move3Discs(end, start, temp) // move 3 discs to temp
  moveDisc(start, end) // place next largest disc (5) at end
  move3Discs(temp, end, start) // move 3 discs to start
  moveDisc(temp, end) // move disc (4) to end
  move3Discs(start, temp, end)
}

const Towers = function(n) {
  const A = new Tower(n); //[3, 2, 1]
  const B = new Tower();
  const C = new Tower();

  moveDonuts(A, B, C);
  return [A.stack, B.stack, C.stack];

  // find which tower is the start - use peek();
  // which is the end?
  // the one with the next smallest is the end,
  // but if they are both empty then C is end by default

  // check if tower A is either odd - use size();
    // moveDonuts()

  // check if tower A is either even - use size();
    // moveDonuts()
};

// var hi = 'hello'

// (function(n) {
//   const hanoi = Towers(n);
//   console.log(`${n} towers`, hanoi);
//   console.log(JSON.stringify(hanoi) === '[[],[],[1]]');
// })(1);
//
// (function(n) {
//   const hanoi = Towers(n);
//   console.log(`${n} towers`, hanoi);
//   console.log(JSON.stringify(hanoi) === '[[],[],[2,1]]');
// })(2);
//
// (function(n) {
//   const hanoi = Towers(n);
//   console.log(`${n} towers`, hanoi);
//   console.log(JSON.stringify(hanoi) === '[[],[],[3,2,1]]');
// })(3);

// (function(n) {
//   const hanoi = Towers(n);
//   console.log(`${n} towers`, hanoi);
//   console.log(JSON.stringify(hanoi) === '[[],[],[4,3,2,1]]');
// })(4);


(function(n) {
  const hanoi = Towers(n);
  console.log(`${n} towers`, hanoi);
  console.log(JSON.stringify(hanoi) === '[[],[],[5,4,3,2,1]]');
})(5);
