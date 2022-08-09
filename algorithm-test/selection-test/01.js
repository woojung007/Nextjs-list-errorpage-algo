// 1. 모음 찾기

const foo = (str) => {
  let arr = ["a", "e", "i", "o", "u"];
  let count = 0;
  let strArr = str.split("");

  for (let i = 0; i < strArr.length; i++) {
    strArr.map((el) => {
      if (el === arr[i]) count++;
    });
  }
  return count;
};
