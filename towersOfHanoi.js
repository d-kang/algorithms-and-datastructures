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
