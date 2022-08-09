// 4. 더하고 빼기

const foo = (n) => {
  let result;
  let sum = n
    .toString()
    .split("")
    .map((el) => Number(el))
    .reduce((acc, cur) => acc + cur, 0);

  if (n > 100) {
    while (n > 100) {
      sum = n
        .toString()
        .split("")
        .map((el) => Number(el))
        .reduce((acc, cur) => acc + cur, 0);
      n -= sum;
    }
  } else if (n <= 100) {
    n -= sum;
  }
  if (n % 9 === 0) result = "apple";
  return result;
};
