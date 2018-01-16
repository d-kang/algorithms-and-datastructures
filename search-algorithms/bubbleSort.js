/**
* @Author: David Kang
* @Date:   11.30.2017 03:40pm
* @Filename: bubbleSort.js
* @Last modified time: 11.30.2017 03:54pm
*/

const bubbleSort = (nums) => {
  let hasBubbled = false;

  const subRoutine = (numbers) => {
    for (let i = 0; i < numbers.length; i++) {
      let current = numbers[i]; // 5  [5, 1]
      let next = numbers[i + 1]; // 1
      if (next < current) {
        numbers[i + 1] = current;
        numbers[i] = next;
        if (!hasBubbled) {
          hasBubbled = true;
        }
      }
    }
    if (hasBubbled) {
      hasBubbled = false;
      subRoutine(numbers);
    }
  }
  subRoutine(nums);
  return nums;
}

var arr = [5, 2, 8, 3, 9, 5, 0, 1, 3];
console.log('bubbleSort', bubbleSort(arr));
