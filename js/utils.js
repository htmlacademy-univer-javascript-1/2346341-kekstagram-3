const getRandomInteger = (a, b) => {
  const lower = Math.ceil(Math.min(Math.abs(a), Math.abs(b)));
  const upper = Math.floor(Math.max(Math.abs(a), Math.abs(b)));
  const result = Math.random() * (upper - lower + 1) + lower;
  return Math.floor(result);
};


const stringIsLessOrEqual = function (stringInput, maxLength) {
  return stringInput.length <= maxLength;
};


const createPhotoGenerator = function (min, max) {
  const usedIds = [];
  return function (description) {
    if (usedIds.length >= 25) {return;}
    let randomId = getRandomInteger(min, max);
    while (usedIds.includes(randomId)) {
      randomId = getRandomInteger(min, max);
    }
    usedIds.push(randomId);
    return {
      id: randomId,
      url: `photos/${randomId}.jpg`,
      description: description,
      likes: getRandomInteger(15, 200),
      comments: getRandomInteger(0, 200)
    };

  };
};


const generatePhotosData = function () {
  const resultPhotos = [];
  const photosCount = 25;
  const generatePhoto = createPhotoGenerator(1, photosCount);
  for (let i = 0; i < photosCount; i++) {
    const description = 'Funny photo desc.';
    const photo = generatePhoto(description);
    resultPhotos.push(photo);
  }
  return resultPhotos;
};


export {generatePhotosData, stringIsLessOrEqual};
