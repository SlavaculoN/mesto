// Переменные //
const editProfile = document.querySelector('.popup_type_profile');
const openEditProfile = document.querySelector('.profile__edit');
const closeEditProfile = document.querySelector('.popup__close_profile');
const saveEditProfile = document.querySelector('.popup__save_profile')
const profileForm = document.querySelector('.popup__form');
const nameInput = document.querySelector('.popup__name');
const jobInput = document.querySelector('.popup__description');
const profileName = document.querySelector('.profile__name');
const profileJob = document.querySelector('.profile__description');
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
    jobInput.value = profileJob.textContent;
};

function closeProfilePopup() {
    closePopup(editProfile);
};

function hundleProfileFormSubmit(evt) {
    evt.preventDefault();
    profileName.textContent = nameInput.value;
    profileJob.textContent = jobInput.value;
    closePopup(editProfile);
}
// Слушатели //
openEditProfile.addEventListener('click', openProfilePopup);
closeEditProfile.addEventListener('click', closeProfilePopup);
profileForm.addEventListener('submit', hundleProfileFormSubmit);


// Проектная работа №5 //

// Переменные
const cardList = document.querySelector('.cards');
const cardTemplate = document.querySelector('.card-template').content;
const formCard = document.querySelector('.popup__form_card');
const titleInput = document.querySelector('.popup__title');
const linkInput = document.querySelector('.popup__link');
const cardTitle = document.querySelector('.card__title');
const cardImage = document.querySelector('.card__photo');
const addPopupCard = document.querySelector('.popup_type_card');
const openPopupCard = document.querySelector('.profile__add-card');
const closePopupCard = document.querySelector('.popup__close_card');
const openPopupImg = document.querySelector('.popup_type_img');
const titleImg = document.querySelector('.popup__heading_img');
const photoImg = document.querySelector('.popup__photo');
const closeImgBtn = document.querySelector('.popup__close_img');
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

    titleInput.value = '';
    linkInput.value = '';

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

    cardItem.querySelector('.card__like').addEventListener('click', (evt) => {
        evt.target.classList.toggle('card__like_active');
    });

    cardItem.querySelector('.card__delete').addEventListener('click', (evt) => {
        evt.target.closest('.card').remove();
    });

    return cardItem;
};
//Слушатели
openPopupCard.addEventListener('click', openPopupCards);
closePopupCard.addEventListener('click', closePopupCards);
formCard.addEventListener('submit', hundleFormCardSubmit);
closeImgBtn.addEventListener('click', closePopupImg);