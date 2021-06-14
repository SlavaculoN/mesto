// Переменные //
const editProfile = document.querySelector('.popup_type_profile');
const openEditProfile = document.querySelector('.profile__edit');
const closeEditProfile = document.querySelector('.popup__close-btn_profile');
const saveEditProfile = document.querySelector('.popup__save-btn_profile')
const formProfile = document.querySelector('.popup__form_profile');
const nameInput = document.querySelector('.popup__input_type_name');
const descriptionInput = document.querySelector('.popup__input_type_description');
const profileName = document.querySelector('.profile__name');
const profileDescription = document.querySelector('.profile__description');
// Функции //
function openPopup(popup) {
    popup.classList.add('popup_opened');
};
function closePopup(popup) {
    popup.classList.remove('popup_opened');
};
//Попап профиля
function openProfilePopup() {
    openPopup(editProfile);
    nameInput.value = profileName.textContent;
    descriptionInput.value = profileDescription.textContent;
};

function closeProfilePopup() {
    closePopup(editProfile);
};

function hundleProfileFormSubmit(evt) {
    evt.preventDefault();
    profileName.textContent = nameInput.value;
    profileDescription.textContent = descriptionInput.value;
    closeProfilePopup();
}
// Слушатели //
openEditProfile.addEventListener('click', openProfilePopup);
closeEditProfile.addEventListener('click', closeProfilePopup);
formProfile.addEventListener('submit', hundleProfileFormSubmit);
// Проектная работа №5 //
// Переменные
const cardList = document.querySelector('.cards');
const cardTemplate = document.querySelector('.card-template').content;
const formCard = document.querySelector('.popup__form_card')
const titleInput = document.querySelector('.popup__input_type_title');
const linkInput = document.querySelector('.popup__input_type_link');
const cardTitle = document.querySelector('.card__title');
const cardImage = document.querySelector('.card__photo');
const addPopupCard = document.querySelector('.popup_type_card');
const openPopupCard = document.querySelector('.profile__add-card');
const closePopupCard = document.querySelector('.popup__close-btn_card');
const openPopupImg = document.querySelector('.popup_type_img');
const titleImg = document.querySelector('.popup__heading_img');
const photoImg = document.querySelector('.popup__photo');
const closeImgBtn = document.querySelector('.popup__close-btn_img');
// Функции
initialCards.forEach(item => {
    const card = createCard(item);
    cardList.append(card);
});
//Попап карточек
function openPopupCards() {
    openPopup(addPopupCard);
};

function closePopupCards() {
    closePopup(addPopupCard);
};

function hundleFormCardSubmit(evt) {
    evt.preventDefault();
    const values =
    {
        name: titleInput.value,
        link: linkInput.value,
    };

    const newCard = createCard(values);

    cardList.prepend(newCard);

    formCard.reset();

    closePopupCards();
};

function closePopupImg() {
    closePopup(openPopupImg);
};

function createCard(item) {
    const cardItem = cardTemplate.cloneNode(true);

    cardItem.querySelector('.card__photo').src = item.link;
    cardItem.querySelector('.card__title').textContent = item.name;
    cardItem.querySelector('.card__photo').alt = item.name;


    cardItem.querySelector('.card__photo').addEventListener('click', (evt) => {
        evt.target;
        titleImg.textContent = item.name;
        photoImg.src = item.link;
        photoImg.alt = item.name;
        openPopup(openPopupImg);
    });

    return cardItem;
};
//Слушатели
openPopupCard.addEventListener('click', openPopupCards);
closePopupCard.addEventListener('click', closePopupCards);
formCard.addEventListener('submit', hundleFormCardSubmit);
closeImgBtn.addEventListener('click', closePopupImg);
// ПРОЕКТНАЯ РАБОТА №6 //
// Кнопка лайк и удаление карточки
cardList.addEventListener('click', (evt) => {
    if (evt.target.classList.contains('card__like')) {
        evt.target.classList.toggle('card__like_active');
    } else if (evt.target.classList.contains('card__delete')) {
        evt.target.closest('.card').remove();
    };
});
// Закрытие попапов через Escape
function keyHandler(evt) {
    if (evt.key === "Escape") {
        closeProfilePopup() || closePopupCards() || closePopupImg();
    };
};
document.addEventListener('keydown', keyHandler);
// Закрытие попапов через оверлей
document.addEventListener('click', (evt) => {
    if (evt.target.classList.contains('popup_opened')) {
        evt.target.classList.remove('popup_opened');
    };
});
//Валидация форм
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