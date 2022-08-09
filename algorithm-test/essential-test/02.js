// 2. 사용하지 않는 가장 작은 숫자 찾기

const foo = (ids) => {
  let min;
  let newIds = ids.sort().filter((el, i, arr) => el !== arr[i - 1]);
  let maxNum = Math.max(...newIds);
  let arr = [];

  for (let i = 0; i < newIds.length; i++) {
    if (newIds[i] !== newIds[i + 1] - 1) {
      arr.push(newIds[i]);
      min = arr[0] + 1;
    } else {
      min = maxNum + 1;
    }
  }
  return min;
};
