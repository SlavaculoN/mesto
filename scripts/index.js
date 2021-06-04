// Переменные //
let editProfile = document.querySelector('.popup_profile');
let openEditProfile = document.querySelector('.profile__edit');
let closeEditProfile = document.querySelector('.popup__close_profile');
let saveEditProfile = document.querySelector('.popup__save_profile')
let formelement = document.querySelector('.popup__form');
let nameInput = document.querySelector('.popup__name');
let jobInput = document.querySelector('.popup__description');
let profileName = document.querySelector('.profile__name');
let profileJob = document.querySelector('.profile__description');
// Функции //
function openPopup() {
    editProfile.classList.add('popup_opened');
    nameInput.value = profileName.textContent;
    jobInput.value = profileJob.textContent;
};

function closePopup() {
    editProfile.classList.remove('popup_opened');
};

function savePopup(evt) {
    evt.preventDefault();
    profileName.textContent = nameInput.value;
    profileJob.textContent = jobInput.value;
    closePopup();
}
// Слушатели //
openEditProfile.addEventListener('click', openPopup);
closeEditProfile.addEventListener('click', closePopup);
formelement.addEventListener('submit', savePopup);


// Проектная работа №5 //

// Массив карточек
const initialCards = [
    {
        name: 'Архыз',
        link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/arkhyz.jpg'
    },
    {
        name: 'Челябинская область',
        link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/chelyabinsk-oblast.jpg'
    },
    {
        name: 'Иваново',
        link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/ivanovo.jpg'
    },
    {
        name: 'Камчатка',
        link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kamchatka.jpg'
    },
    {
        name: 'Холмогорский район',
        link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kholmogorsky-rayon.jpg'
    },
    {
        name: 'Байкал',
        link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/baikal.jpg'
    }
];
// Добавление карточек на страницу
const cardList = document.querySelector('.cards');
const cardTemplate = document.querySelector('.card-template').content;
const deleteCard = document.querySelector('.card__delete');
const card = cardTemplate.querySelector('.card');

initialCards.forEach((item) => {
    const cardItem = cardTemplate.cloneNode(true);

    cardItem.querySelector('.card__photo').src = item.link;
    cardItem.querySelector('.card__title').textContent = item.name;
    cardItem.querySelector('.card__photo').alt = item.name;

    cardItem.querySelector('.card__like').addEventListener('click', (evt) => {
        evt.target.classList.toggle('card__like_active');
    });

    const deleteCard = cardItem.querySelector('.card__delete');
    deleteCard.addEventListener('click', (evt) => {
        evt.target.closest('.card').remove();
    });

    cardList.append(cardItem);
});

//Добавление карточки в список через попап
const addBtn = document.querySelector('.popup_card');
const openPopupCard = document.querySelector('.profile__add-card');
const closePopupCard = document.querySelector('.popup__close_card');
const formCard = document.querySelector('.popup__form_card');
const titleInput = document.querySelector('.popup__title');
const linkInput = document.querySelector('.popup__link');
const cardTitle = document.querySelector('.card__title');
const cardImage = document.querySelector('.card__photo');
// Открытие и закрытие попапа
function openPopupCards() {
    addBtn.classList.add('popup_opened');
};
function closePopupCards() {
    addBtn.classList.remove('popup_opened');
};
//Слушатели
openPopupCard.addEventListener('click', openPopupCards);
closePopupCard.addEventListener('click', closePopupCards);
formCard.addEventListener('submit', closePopupCards);
console.log(initialCards);