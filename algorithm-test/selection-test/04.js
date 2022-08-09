// 4. 아이큐 테스트

const foo = (numbers) => {
  let arr = numbers.split(" ");
  let pos = 0;
  let even = [];
  let odd = [];
  arr
    .map((el) => Number(el))
    .map((el) => {
      if (el % 2 === 0) {
        even.push(el);
      } else if (el % 2 === 1) {
        odd.push(el);
      }
    });

  if (even.length > odd.length) {
    pos = arr.indexOf(String(odd[0])) + 1;
  } else if (even.length < odd.length) {
    pos = arr.indexOf(String(even[0])) + 1;
  }

  return pos;
};
