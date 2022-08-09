// 3. 친구 찾기

const foo = (users) => {
  let friends = [];
  for (let i = 0; i < users.length; i++) {
    if (users[i].length === 4) friends.push(users[i]);
  }
  return friends;
};
