// Begin your set-up revision for "hasPathSum()" here...
// output is true or false whether tree has path equal to given sum
// the input is a binary tree and a sum

// const sum1 = 22;
// const bTree = {
//   val: 10,
//   left: {
//           val:5,
//           left: {val:4, left:null, right:null},
//           right: {val:8, left:null, right:null}
//         },
//   right:  {
//             val:20,
//             right: {val:30, left:null, right:null}
//           }
// }

const hasPathSum = (root, sum) => {
  let hasSum = false;

  const traverse = (node, count) => {
    const newSum = count + node.val;
    if (node.left === null && node.right === null) {
      if (sum === newSum) {
        hasSum = true;
      }
      return;
    }
    if (hasSum === true) { return; }

    if (node.left !== null) {
      traverse(node.left, newSum);
    }

    if (node.right !== null) {
      traverse(node.right, newSum);
    }

  }
  traverse(root, 0);
  return hasSum;
}





// chosen strategy summary
// we will traverse the tree with a recursive subroutine adding the values of each path and saving them as a paramenter in the recursive function
// if the value is found then we return true else we return false

// big o
  // time: linear O(n)
    // because we will traverse every node in the tree
  // space: constant O(1)

// illustration
  // we must use recursion or while loop
  // count all nodes until we hit a leaf
  // if that final val is equal to our sum then return


const target = 23;
const bTree = {
  val: 10,
  left: {
          val:5,
          left: {val:4, left:null, right:null},
          right: {val:8, left:null, right:null}
        },
  right:  {
            val:20,
            right: {val:30, left:null, right:null}
          }
};

hasPathSum(bTree, target);


/*
const hasPathSum = (root, sum) => {
  // no constraints
  // var hasSum set to false
  // subroutine (node, count)
    // basecase1
      // if has no left right child then check against sum
    // basecase 2
      // if hasPath is true then return
    // if has left child go left carrying the count
    // if has right child go right carrying the count

  // return our hasSum
}

*/
