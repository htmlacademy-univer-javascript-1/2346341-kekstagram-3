function getRandomInteger (a, b) {
  const lower = Math.ceil(Math.min(Math.abs(a), Math.abs(b)));
  const upper = Math.floor(Math.max(Math.abs(a), Math.abs(b)));
  const result = Math.random() * (upper - lower + 1) + lower;
  return Math.floor(result);
}
// eslint-disable-next-line no-unused-vars
function stringIsLess (stringInput, maxLength) {
  return stringInput.lenght <= maxLength;
}

const description = ['хорошо', 'плохо'];

function getUser(id, url) {
  return {
    id: id,
    url: `photos/${url}.jpg`,
    description: description[getRandomInteger(0, 1)],
    likes: getRandomInteger(15, 201),
    comments: getRandomInteger(0, 201)
  };
}

// eslint-disable-next-line no-unused-vars
function getUsers(){
  const arrayUsers = [];
  for (let i = 1; i <= 25; i++) {
    arrayUsers[i] = getUser(i, i);
  }
  return arrayUsers;
}
