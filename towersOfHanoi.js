/**
* @Author: David Kang
* @Date:   12.03.2017 07:22pm
* @Filename: towersOfHanoi.js
* @Last modified time: 12.03.2017 07:22pm
*/


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
  // if (this.stack[this.top] < val) {
  //   throw new Error('ERROR pushed value must be less than top of stack')
  // }
  this.top++;
  this.stack.push(val)
  // this.stack[this.top] = val;
  return this // return tower
}

// pop
Tower.prototype.pop = function() {
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


const moveDisc = function(start, end) {
  end.push(start.pop());
};

const move2discs = function(start, temp, end) {
  moveDisc(start, temp);
  moveDisc(start, end);
  moveDisc(temp, end);
}

const move3Discs = function(start, temp, end) {
  moveDisc(start, end);
  moveDisc(start, temp);
  moveDisc(end, temp);
  moveDisc(start, end);
  moveDisc(temp, start);
  moveDisc(temp, end)
  moveDisc(start, end)
}

const towers = function(n) {
  const A = new Tower(n);
  const B = new Tower();
  const C = new Tower();

  return [A, B, C];
};


const solver = function(n) {
  const hanoi = towers(n);
  const [ A, B, C ] = hanoi;
  let [start, temp, end] = hanoi

  if (n <= 0) {
    return [A.stack, B.stack, C.stack];
  }
  if (n === 1) {
    moveDisc(A, C);
    return [A.stack, B.stack, C.stack];
  }
  if (n === 2) {
    move2discs(A, B, C);
    return [A.stack, B.stack, C.stack];
  }
  if (n === 3) {
    move3Discs(A, B, C)
    return [A.stack, B.stack, C.stack];
  }

  if (n % 2 === 0) {
    temp = C
    end = B
  }


  let tempStart, tempTemp, tempEnd;
  let count = 0;
  move3Discs(start, temp, end);

  /* sub */
  const sub = function() {
    tempStart = start
    tempTemp = temp
    tempEnd = end
    start = tempEnd;
    temp = tempStart;
    end = tempTemp;


    if (count === 11) { // for 7 discs
      moveDisc(temp, end)
    }

     else if (count === 3 || count % 2 === 0) {
      moveDisc(temp, end)
    } else if (count % 2 === 1) {
      moveDisc(end, temp)
    }
    move3Discs(start, temp, end);

    if (count === 14) { // moving disc 8 on 8 discs
      moveDisc(start, temp)
    }
    console.log('count', count)
    ++count
    console.log('ABC>>>', [A.stack, B.stack, C.stack]);
    console.log('ste>>>', [start.stack, temp.stack, end.stack]);
    // if (A.stack.length === 0 && B.stack.length === 0) {
    //   return
    // } else {
    //
    //    sub();
    // }



    // (3) 6 towers [ [ 6 ], [ 5, 4, 3, 2, 1 ], [] ]
    // (4) 6 towers [ [ 6, undefined ], [ 5, 4 ], [ 3, 2, 1 ] ]
    if (count <= 17) {
      sub();
    }

  }
  sub();

  return [A.stack, B.stack, C.stack]
};

// (function(n) {
//   console.log('============================================')
//   console.log('============================================')
//   const hanoi = solver(n);
//   console.log(`${n} towers`, hanoi);
//   console.log(JSON.stringify(hanoi) === '[[],[],[]]');
// })(-1);
// (function(n) {
//   console.log('============================================')
//   const hanoi = solver(n);
//   console.log(`${n} towers`, hanoi);
//   console.log(JSON.stringify(hanoi) === '[[],[],[]]');
// })(0);
// (function(n) {
//   console.log('============================================')
//   const hanoi = solver(n);
//   console.log(`${n} towers`, hanoi);
//   console.log(JSON.stringify(hanoi) === '[[],[],[1]]');
// })(1);
// (function(n) {
//   console.log('============================================')
//   const hanoi = solver(n);
//   console.log(`${n} towers`, hanoi);
//   console.log(JSON.stringify(hanoi) === '[[],[],[2,1]]');
// })(2);
//
// (function(n) {
//   console.log('============================================')
//   const hanoi = solver(n);
//   console.log(`${n} towers`, hanoi);
//   console.log(JSON.stringify(hanoi) === '[[],[],[3,2,1]]');
// })(3);

// (function(n) {
//   console.log('============================================')
//   const hanoi = solver(n);
//   console.log(`${n} towers`, hanoi);
//   console.log(JSON.stringify(hanoi) === '[[],[],[4,3,2,1]]');
// })(4);
//
//
// (function(n) {
//   console.log('============================================')
//   const hanoi = solver(n);
//   console.log(`${n} towers`, hanoi);
//   console.log(JSON.stringify(hanoi) === '[[],[],[5,4,3,2,1]]');
// })(5);


// (function(n) {
//   console.log('============================================')
//   const hanoi = solver(n);
//   console.log(`${n} towers`, hanoi);
//   console.log(JSON.stringify(hanoi) === '[[],[],[6,5,4,3,2,1]]');
// })(6);

// (function(n) {
//   console.log('============================================')
//   const hanoi = solver(n);
//   console.log(`${n} towers`, hanoi);
//   console.log(JSON.stringify(hanoi) === '[[],[],[7,6,5,4,3,2,1]]');
// })(7);
(function(n) {
  console.log('============================================')
  const hanoi = solver(n);
  console.log(`${n} towers`, hanoi);
  console.log(JSON.stringify(hanoi) === '[[],[],[8,7,6,5,4,3,2,1]]');
})(8);
