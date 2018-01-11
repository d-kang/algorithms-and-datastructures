var binarySearch = function(arr, target) {
  var min = 0;
  var max = arr.length - 1;
  var mid;

  while (min <= max) {
    mid = Math.floor((min + max) / 2);
    if (arr[mid] === target) {
      return mid;
    } else if (arr[mid] < target) {
      min = mid + 1;
    } else {
      max = mid - 1;
    }
  }
  return - 1;
}


var primes = [2, 3, 5, 7, 11, 13, 17, 19, 23, 29, 31, 37,	41, 43, 47, 53, 59, 61, 67, 71, 73, 79, 83, 89, 97];
  
var targetVal = 73;

var result = binarySearch(primes, targetVal);
console.log('result', result);
