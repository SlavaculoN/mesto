const enableValidation = (config) => {
  const formList = Array.from(document.querySelectorAll(config.form));

  formList.forEach((formElement) => {
    formElement.addEventListener('submit', (evt) => {
      evt.preventDefault();
    });
    setEventListeners(formElement, config);
  });
};

const checkValid = (formElement, inputElement, config) => {
  if (!inputElement.validity.valid) {
    showInputError(formElement, inputElement, inputElement.validationMessage, config);
  } else {
    hideInputError(formElement, inputElement, config);
  }

  if (!formElement.checkValidity()) {
    submitButtonDisabled(formElement, config)
  } else {
    submitButtonEnable(formElement, config);
  }
};

const showInputError = (formElement, inputElement, errorMessage, config) => {
  const errorText = formElement.querySelector(`#${inputElement.id}-error`);
  inputElement.classList.add(config.inputError);
  errorText.textContent = errorMessage;
};

const hideInputError = (formElement, inputElement, config) => {
  const errorText = formElement.querySelector(`#${inputElement.id}-error`);
  inputElement.classList.remove(config.inputError);
  errorText.textContent = '';
};

const submitButtonEnable = (formElement, config) => {
  const buttonSubmit = formElement.querySelector(config.submitButton);
  buttonSubmit.classList.remove(config.submitButtonDisabled);
  buttonSubmit.removeAttribute('disabled');
};

const submitButtonDisabled = (formElement, config) => {
  const buttonSubmit = formElement.querySelector(config.submitButton);
  buttonSubmit.classList.add(config.submitButtonDisabled);
  buttonSubmit.setAttribute('disabled', true);
}

const setEventListeners = (formElement, config) => {
  const inputList = Array.from(formElement.querySelectorAll(config.input));
  inputList.forEach((inputElement) => {
    inputElement.addEventListener('input', () => {
      checkValid(formElement, inputElement, config);
    });
  });
};

enableValidation({
  form: '.popup__form',
  input: '.popup__input',
  submitButton: '.popup__save-btn',
  submitButtonDisabled: 'popup__save-btn_disabled',
  inputError: 'popup__input_invalid',
});