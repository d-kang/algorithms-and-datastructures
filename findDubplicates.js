function findDuplicates(arr1, arr2) {
  var min = Math.min(arr1.length, arr2.length);
  var max = Math.max(arr1.length, arr2.length);
  if (min ** 2 < max) {
    console.log('diff lengths ran');
    return findDuplicatesDifferentLengths(arr1, arr2);
  } else {
    console.log('similar lengths ran');
    return findDuplicatesSimilarLength(arr1, arr2);
  }
}

function findDuplicatesSimilarLength(arr1, arr2) {
  var duplicates = [];
  var i = 0;
  var j = 0;

  while (i < arr1.length && j < arr2.length) {
    if (arr1[i] == arr2[j]) {
      duplicates.push(arr1[i]);
      i = i + 1;
      j = j + 1;
 	  } else if (arr1[i] < arr2[j]) {
      i = i + 1;
	  } else {
      j = j + 1;
	  }
  }
  return duplicates;
}


function findDuplicatesDifferentLengths(arr1, arr2) {
  var bigger = arr1;
  var smaller = arr2;
  var duplicates = [];
  if (bigger.length < smaller.length) {
    bigger = arr2;
    smaller = arr1;
  }

  for (var i = 0; i < smaller.length; i++) {
    if (binarySearch(bigger, smaller[i]) !== -1) {
      duplicates.push(smaller[i]);
    }
  }
  return duplicates;
}


function binarySearch(arr, target) {
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

// O(n + m) when n ~ m (n is approximately same length as m)
findDuplicates([1, 2], [1, 2]);

// O(nlogm) when n >> m (n is much larger than m)
findDuplicates([1, 25], [1, 2, 3, 5, 8, 9, 10, 15, 25, 100]);
