const stringIsLessOrEqual = function (stringInput, maxLength) {
  return stringInput.length <= maxLength;
};

const addHideSuccessMessageHandlers = function (closeButton, messageElement, hideSuccessMessage) {
  document.addEventListener('keydown', (evt) => {
    if (evt.key === 'Escape') {
      hideSuccessMessage(messageElement);
    }
  });
  closeButton.addEventListener('click', () => {
    hideSuccessMessage(messageElement);
  });

  window.addEventListener('click', (evt) => {
    if (evt.target === messageElement) {
      hideSuccessMessage(messageElement);
    }
  });
};

export {stringIsLessOrEqual, addHideSuccessMessageHandlers};
