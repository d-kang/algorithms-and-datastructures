function getShortestUniqueSubstring(arr, str) {
  let head = 0;
  let tail = 0;
  let validCounter = 0;
  let shortest;
  const store = {};
  for (var x = 0; x < arr.length; x++) {
    store[arr[x]] = 0;
  }

  // if validCounter === 3
    // if shortest is undefined; set shortest
    // if next shortest is shorter; reassign
  // subtract current head from store
    // if stored turns to 0 then subtract from validCounter
    // move head forward
  // if validCounter < 3
    // move tail forward


}


const arr = ['x', 'y', 'z'];
const str = 'xyyzyzyx';

console.log(getShortestUniqueSubstring(arr, str));
