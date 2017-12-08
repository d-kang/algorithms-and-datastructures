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
  const start = towers[0];
  const temp = towers[1];
  const end = towers[2];

  if (start.length === 0) {
    return towers;
  }
  if (start.length === 1) {
    moveDisc(start, end);
  }
  if (start.length === 2) {
    arrangeTwoDiscs(start, temp, end);
  }
  if (start.length === 3) {
    moveDisc(start, end);
    moveDisc(start, temp);
    moveDisc(end, temp);
    moveDisc(start, end);
    /* 2 discs, rotate start temp end and recurse? */
    arrangeTwoDiscs(temp, start, end)
  }
  if (start.length === 4) {
    moveDisc(start, temp);
    moveDisc(start, end);
    moveDisc(temp, end);
    /* place disc 3 */
    moveDisc(start, temp);
    /* place 2 discs */
    arrangeTwoDiscs(end, start, temp)
    moveDisc(start, end);
    arrangeThreeDiscs(temp, start, end)

  }
  let num = towers[0].length
  const isEven = num % 2 === 0
  /* if discs are odd */
  if (isEven) {

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
