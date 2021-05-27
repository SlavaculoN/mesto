// Переменные
let editProfile = document.querySelector('.popup');
let openEditProfile = document.querySelector('.profile__edit-button');
let closeEditProfile = document.querySelector('.popup__close-button');
let saveEditProfile = document.querySelector('.popup__save-button')
let formElement = document.querySelector('.popup__edit-form');
let nameInput = document.querySelector('.popup__edit-name');
let jobInput = document.querySelector('.popup__edit-description');
let profileName = document.querySelector('.profile__info_name');
let profileJob = document.querySelector('.profile__info_description');
// Функции
function openPopup(){
    nameInput.value = profileName.textContent;
    jobInput.value = profileJob.textContent;
    editProfile.classList.add('popup_opened');
};

function closePopup(){
    editProfile.classList.remove('popup_opened');
};

function savePopup(evt) {
    evt.preventDefault();
    profileName.textContent = nameInput.value;
    profileJob.textContent = jobInput.value;
    closePopup();
}
// Слушатели
openEditProfile.addEventListener('click', openPopup);
closeEditProfile.addEventListener('click', closePopup);
formElement.addEventListener('submit', savePopup);

