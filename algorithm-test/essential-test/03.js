// 3. 승점구하기

const foo = (games) => {
  let score = 0;
  let newGames = [];

  for (let i = 0; i < 10; i++) {
    newGames.push(games[i].split(":"));
  }

  for (let l = 0; l < 10; l++) {
    if (newGames[l][0] > newGames[l][1]) {
      score += 3;
    } else if (newGames[l][0] === newGames[l][1]) {
      score++;
    }
  }
  return score;
};
