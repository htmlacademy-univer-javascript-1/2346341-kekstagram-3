import {resetFilter} from './picture-effects.js';

const uploadButton = document.querySelector('#upload-file');
const uploadOverlay = document.querySelector('.img-upload__overlay');
const uploadCancel = document.querySelector('#upload-cancel');
const imgPreview = document.querySelector('.img-upload__preview');


uploadButton.addEventListener('change', () => {
  uploadOverlay.classList.remove('hidden');
  document.body.classList.add('modal-open');
  imgPreview.style.transform = 'scale(1)';
});

uploadCancel.addEventListener('click', () => {
  resetFilter();
  uploadOverlay.classList.add('hidden');
  document.body.classList.remove('modal-open');
});
