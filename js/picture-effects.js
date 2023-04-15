const effectButtons = document.querySelectorAll('.effects__radio');
const imgPreview = document.querySelector('.img-upload__preview');
let currentEffect = 'none';

for (const effectButton of effectButtons) {
  effectButton.addEventListener('click', () => {
    const newEffect = effectButton.value;
    imgPreview.classList.remove(`effects__preview--${currentEffect}`);
    imgPreview.classList.add(`effects__preview--${newEffect}`);
    currentEffect = newEffect;
  });
}

const resetFilter = function () {
  imgPreview.classList.remove(`effects__preview--${currentEffect}`);
  currentEffect = 'none';
};

export {resetFilter};
