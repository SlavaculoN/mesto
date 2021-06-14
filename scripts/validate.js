function enableValidation(config) {
  const form = document.querySelector(config.form);

  form.addEventListener('submit', handleFormSubmit);
  form.addEventListener('input', (evt) => handleFormInput(evt, config));
};

function handleFormSubmit(evt) {
  evt.preventDefault();
  const form = evt.currentTarget;
};

function handleFormInput(evt, config) {
  const input = evt.target;
  const form = evt.currentTarget;

  setCustomError(input);

  setFieldError(input);

  setSubmitButtonState(form, config);
};

function setCustomError(input) {
  const validity = input.validity;

  input.setCustomValidity("");

};

function setFieldError(input) {
  const span = document.querySelector(`#${input.id}-error`);
  span.textContent = input.validationMessage;
};

function setSubmitButtonState(form, config) {
  const button = form.querySelector(config.submitButton);
  const isValid = form.checkValidity();

  if (isValid) {
    button.classList.remove('popup__save-btn_disabled')
    button.removeAttribute('disabled');
  } else {
    button.classList.add('popup__save-btn_disabled')
    button.setAttribute('disabled', true);
  }
};

enableValidation({
  form: '.popup__form_profile',
  submitButton: '.popup__save-btn_profile'
});

enableValidation({
  form: '.popup__form_card',
  submitButton: '.popup__save-btn_card',
});