import {addHideSuccessMessageHandlers} from './utils.js';

const uploadSubmitButton = document.querySelector('.img-upload__submit');

const blockSubmitButton = function () {
  uploadSubmitButton.disabled = true;
};

const unblockSubmitButton = function () {
  uploadSubmitButton.disabled = false;
};

const showModal = function(uploadOverlay) {
  uploadOverlay.classList.remove('hidden');
  document.body.classList.add('modal-open');

};

const hideModal = function (uploadOverlay) {
  uploadOverlay.classList.add('hidden');
  document.body.classList.remove('modal-open');
};

const hideResultMessage = function (messageElement) {
  document.body.removeChild(messageElement);
};

const showResultStatusMessage = function (result) {
  const resultMessageTemplate = document.querySelector(`#${result}`).content;
  const resultMessageElement = resultMessageTemplate.cloneNode(true);
  document.body.appendChild(resultMessageElement);
  const messageElement = document.querySelector(`.${result}`);
  const closeResultMessageButton = document.querySelector(`.${result}__button`);
  addHideSuccessMessageHandlers(closeResultMessageButton, messageElement, hideResultMessage);
};

const showFailMessage = function () {
  showResultStatusMessage('error');
};

const showSuccessMessage = function () {
  showResultStatusMessage('success');
};

export {blockSubmitButton, unblockSubmitButton, hideModal, showSuccessMessage, showFailMessage, showModal};
