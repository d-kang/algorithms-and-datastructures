const isValidBracket = (str) => {
  let head = 0;
  let tail = str.length - 1;
  const check = {
    '{': '}',
    '[': ']',
    '(': ')'
  }
  while (head < tail) {
    if (check[str[head]] === str[tail]) {
      head++;
      tail--;
    } else {
      return false;
    }
  }
  return true;
}

const isValidParentheses = (str) => {
  let cleanse = str.replace(/[^{(\[\])}]/g, '');
  if (str.length !== cleanse.length) {
    return false;
  }
  let count = 0;
  const brackets = [];
  let i = 0;
  const left = {
    '[': true,
    '{': true,
    '(': true
  };
  while (str.length !== 0) {
    let char = str[i];
    if (left[char]) {
      count++;
      i++;
    } else {
      const block = str.slice(0, count * 2);
      brackets.push(block);
      str = str.slice(count * 2);
      i = 0;
      count = 0;
    }
  }

  for (let i = 0; i < brackets.length; i++) {
    // const isValid = ;
    if (!isValidBracket(brackets[i])) {
      return false;
    }
  }

  return true;
}



const input1 = '[(({}))]';
const output1 = true;

const input2 = '[(({)})]';
const output2 = false;
isValidParentheses('[][][]');
