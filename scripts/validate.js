const checkValid = (formElement, inputElement) => {
  if (!inputElement.validity.valid) {
    showInputError(formElement, inputElement, inputElement.validationMessage);
  } else {
    hideInputError(formElement, inputElement);
  }

  if (!formElement.checkValidity()) {
    submitButtonDisabled(formElement)
  } else {
    submitButtonEnable(formElement);
  }
};

const showInputError = (formElement, inputElement, errorMessage) => {
  const errorText = formElement.querySelector(`#${inputElement.id}-error`);
  inputElement.classList.add('popup__input_invalid');
  errorText.textContent = errorMessage;
};

const hideInputError = (formElement, inputElement) => {
  const errorText = formElement.querySelector(`#${inputElement.id}-error`);
  inputElement.classList.remove('popup__input_invalid');
  errorText.textContent = '';
};

const submitButtonEnable = (formElement) => {
  const buttonSubmit = formElement.querySelector('.popup__save-btn');
  buttonSubmit.classList.remove('popup__save-btn_disabled');
  buttonSubmit.removeAttribute('disabled');
};

const submitButtonDisabled = (formElement) => {
  const buttonSubmit = formElement.querySelector('.popup__save-btn');
  buttonSubmit.classList.add('popup__save-btn_disabled');
  buttonSubmit.setAttribute('disabled', true);
}

const setEventListeners = (formElement) => {
  const inputList = Array.from(formElement.querySelectorAll('.popup__input'));

  inputList.forEach((inputElement) => {
    inputElement.addEventListener('input', () => {
      checkValid(formElement, inputElement);
    });
  });
};

const enableValidation = () => {
  const formList = Array.from(document.querySelectorAll('.popup__form'));

  formList.forEach((formElement) => {
    formElement.addEventListener('submit', (evt) => {
      evt.preventDefault();
    });
    setEventListeners(formElement);
  });
};

enableValidation({
  form: '.popup__form',
  input: '.popup__input',
  submitButton: '.popup__save-btn',
  sumbitButtonDisabled: 'popup__save-btn_disabled',
  inputError: 'popup__input_disabled',
});