function fibs(num) {
  const fibsArr = [];
  for (let i = 0; i < num; i++) {
    if (i == 0) {
      fibsArr.push(0);
    } else if (i == 1) {
      fibsArr.push(1);
    } else {
      fibsArr.push(fibsArr[i - 1] + fibsArr[i - 2]);
    }
  }
  return fibsArr;
}

function fibsRec(num, fibsArr = [], tempA = 1, tempB = 1, tempC) {
  if (num <= 0) {
    return fibsArr;
  }
  if (num == 1) {
    fibsArr.unshift(0);
    return fibsRec(num - 1, fibsArr, tempA, tempB, tempC);
  }
  if (num == 2 || num == 3) {
    fibsArr.unshift(1);
    return fibsRec(num - 1, fibsArr, tempA, tempB, tempC);
  }

  if (num > 3) {
    tempC = tempA + tempB;
    tempA = tempB;
    tempB = tempC;
    fibsArr.push(tempC);
    return fibsRec(num - 1, fibsArr, tempA, tempB, tempC);
  }
  return fibsArr;
}

function fibsRecFormula(num) {
  if (num <= 1) {
    return num;
  } else {
    return fibsRecFormula(num - 1) + fibsRecFormula(num - 2);
  }
}

function loopFib(num) {
  let arr = [];

  if (num > 0) {
    for (let i = 0; i < num; i++) {
      arr.push(fibsRecFormula(i));
    }
  }

  return arr;
}

console.log(fibs(20));
console.log(fibsRec(20));
console.log(loopFib(20));
