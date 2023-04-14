const uploadButton = document.querySelector('#upload-file');
const uploadOverlay = document.querySelector('.img-upload__overlay');
const uploadCancel = document.querySelector('#upload-cancel');


uploadButton.addEventListener('change', () => {
  uploadOverlay.classList.remove('hidden');
  document.body.classList.add('modal-open');
});

uploadCancel.addEventListener('click', () => {
  uploadOverlay.classList.add('hidden');
  document.body.classList.remove('modal-open');
});
