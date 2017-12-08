/**
* @Author: David Kang
* @Date:   12.03.2017 07:22pm
* @Filename: towersOfHanoi.js
* @Last modified time: 12.03.2017 07:22pm
*/

const towersOfHanoi = (towers) => {
  const start = towers[0];
  const temp = towers[1];
  const end = towers[2];

  if (start.length === 0) {
    return towers;
  }
  if (start.length === 1) {
    end.push(towers[0].pop());
  }
  if (start.length === 2) {
    temp.push(towers[0].pop());
  }
  return towers;
}



(function() {
  console.log('-------------------------------')
  console.log('-------------------------------')
  const input = [[],[],[]];
  const expected = [[], [], []];
  const actual = towersOfHanoi(input);
  const sInput = JSON.stringify(input);
  const sExpected = JSON.stringify(expected);
  const sActual = JSON.stringify(actual);
  console.log(`${sInput}>>>`, sExpected === sActual)
  console.log('actual>>>', actual);
  console.log('expected>>>', expected);
})();


(function() {
  console.log('-------------------------------')
  const input = [[1],[],[]];
  const expected = [[], [], [1]];
  const actual = towersOfHanoi(input);
  const sInput = JSON.stringify(input);
  const sExpected = JSON.stringify(expected);
  const sActual = JSON.stringify(actual);
  console.log(`${sInput}>>>`, sExpected === sActual)
  console.log('actual>>>', actual);
  console.log('expected>>>', expected);
})();


(function() {
  console.log('-------------------------------')
  const input = [[2, 1],[],[]];
  const expected = [[], [], [2, 1]];
  const actual = towersOfHanoi(input);
  const sInput = JSON.stringify(input);
  const sExpected = JSON.stringify(expected);
  const sActual = JSON.stringify(actual);
  console.log(`${sInput}>>>`, sExpected === sActual)
  console.log('actual>>>', actual);
  console.log('expected>>>', expected);
})();
