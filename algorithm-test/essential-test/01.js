// 1. 분기 숫자 구하기

const foo = (month) => {
  let x;
  if (month <= 3) {
    x = 1;
  } else if (month <= 6) {
    x = 2;
  } else if (month <= 9) {
    x = 3;
  } else {
    x = 4;
  }
  return x;
};
