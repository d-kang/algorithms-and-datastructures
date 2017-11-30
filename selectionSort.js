/**
 * @Date:   11.30.2017 12:11pm
 * @Filename: selectionSort.js
 * @Last modified time: 11.30.2017 12:11pm
 */

// // selection sort
const selectionSort = (numbers) => {
  // get length
  const len = numbers.length // [0, 1, 2, 3, 4] // length 5
  // store first index as largest
  let indexOfLargest = 0;
  var counter = 0;
  // while counter < len
  while (counter < len) {
    // iterate over numbers
    for (let i = 0; i < len; i++) {
      // find index of largest value in numbers
      let valOfCurrentNum = numbers[i];
      let valOfLargestNum = numbers[indexOfLargest];
      if (valOfLargestNum < valOfCurrentNum) { // current is larger
        // then assign current index to indexOfLargest
        indexOfLargest = i;
      }
      // if we hit len means we no longer need to iterate
      if (i === len - counter - 1) {
        // then swap value at stored index with the value at counter index
        // store number
        const save = numbers[i]
        numbers[i] = numbers[indexOfLargest] // assigns to end the largest num
        numbers[indexOfLargest] = save;
        indexOfLargest = 0 // reset index to 0 to start process over
        break;
      }
    }
    // increment counter
    counter++;
  }

  // return numbers
  return numbers;
}


var arr = [5,2,8,3,9,5,0,1,3]
console.log('selectionSort', selectionSort(arr));
