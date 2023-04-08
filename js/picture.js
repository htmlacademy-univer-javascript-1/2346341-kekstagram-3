import {generatePhotosData} from './utils.js';

const pictureTemplate = document.querySelector('#picture').content;
const similarListElement = document.querySelector('.pictures');
const similarListFragment = document.createDocumentFragment();


const createPictures = function () {
  const photos = generatePhotosData();
  for (const photo of photos) {
    const pictureElement = pictureTemplate.cloneNode(true);
    const newPictureImg = pictureElement.querySelector('.picture__img');
    newPictureImg.src = photo.url;
    const pictureLikes = pictureElement.querySelector('.picture__likes');
    const pictureComments = pictureElement.querySelector('.picture__comments');
    pictureLikes.textContent = photo.likes;
    pictureComments.textContent = photo.comments;
    similarListFragment.appendChild(pictureElement);
  }
  similarListElement.appendChild(similarListFragment);
};


createPictures();
