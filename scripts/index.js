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
// Функции //
function openPopup(popup) {
    popup.classList.add('popup_opened');
    document.addEventListener('keydown', keyHandler)
    document.addEventListener('mousedown', overlayClosePopup);
};
function closePopup(popup) {
    popup.classList.remove('popup_opened');
    document.removeEventListener('keydown', keyHandler)
    document.removeEventListener('mousedown', overlayClosePopup);
};

function openProfilePopup() {
    openPopup(editProfile);
    nameInput.value = profileName.textContent;
    descriptionInput.value = profileDescription.textContent;
};

function closeProfilePopup() {
    closePopup(editProfile);
};

function handlerProfileFormSubmit(evt) {
    evt.preventDefault();
    profileName.textContent = nameInput.value;
    profileDescription.textContent = descriptionInput.value;
    closeProfilePopup();
}

initialCards.forEach(item => {
    const card = createCard(item);
    cardList.append(card);
});

function openPopupCards() {
    openPopup(addPopupCard);
};

function closePopupCards() {
    closePopup(addPopupCard);
};

function handlerFormCardSubmit(evt) {
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
    const cardPhoto = cardItem.querySelector('.card__photo');
    const cardTitle = cardItem.querySelector('.card__title');

    cardPhoto.src = item.link;
    cardTitle.textContent = item.name;
    cardPhoto.alt = item.name;


    cardPhoto.addEventListener('click', (evt) => {
        evt.target;
        titleImg.textContent = item.name;
        photoImg.src = item.link;
        photoImg.alt = item.name;
        openPopup(openPopupImg);
    });

    return cardItem;
};

function keyHandler(evt) {
    if (evt.key === "Escape") {
        const popupOpened = document.querySelector('.popup_opened');
        closePopup(popupOpened);
    };
};

function overlayClosePopup(evt) {
    if (evt.target.classList.contains('popup_opened')) {
        const popupOpened = document.querySelector('.popup_opened');
        closePopup(popupOpened);
    }
}
// Слушатели //
openEditProfile.addEventListener('click', openProfilePopup);

closeEditProfile.addEventListener('click', closeProfilePopup);

formProfile.addEventListener('submit', handlerProfileFormSubmit);

openPopupCard.addEventListener('click', openPopupCards);

closePopupCard.addEventListener('click', closePopupCards);

formCard.addEventListener('submit', handlerFormCardSubmit);

closeImgBtn.addEventListener('click', closePopupImg);

cardList.addEventListener('click', (evt) => {
    if (evt.target.classList.contains('card__like')) {
        evt.target.classList.toggle('card__like_active');
    } else if (evt.target.classList.contains('card__delete')) {
        evt.target.closest('.card').remove();
    };
});