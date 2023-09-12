import throttle from 'lodash.throttle';
import '../css/common.css';
import '../css/03-feedback.css';


const STORAGE_KEY = 'feedback-form-state'; //робимо константу для розміщення в коді при повторенні ключа

const refs = {
    form: document.querySelector('.feedback-form'),
    emailInput: document.querySelector('.feedback-form input'),
    textarea: document.querySelector('.feedback-form textarea'),
};

populateTextarea();

refs.form.addEventListener('submit', onFormSubmit);
// refs.emailInput.addEventListener('input', throttle(onTextareaInput, 500));
refs.textarea.addEventListener('input', throttle(onTextareaInput, 500));

let formData = {
    email: '',
    message: '',   //
};

function onFormSubmit(evt) {
    evt.preventDefault(); //блокуєм перезавантаження сторінки після сабміту
    formData.email = refs.emailInput.value;
    formData.message = refs.textarea.value;
    evt.currentTarget.reset(); //скидуєм значення інпут
    localStorage.removeItem(STORAGE_KEY) //скидуємо значення локала після сабміта

    console.log('Email:', formData.email);
    console.log('Message:', formData.message);

};


function onTextareaInput(evt) {
    const message = evt.target.value; //ставимо саме таргет, бо бібліотека свариться на CurrentTarget через застарілу інфо
    const email = refs.emailInput.value;

    const data = {message, email}; //створюємо обєкт для передачі меседжа і імейла

    localStorage.setItem(STORAGE_KEY, JSON.stringify(data));
};

//отримуємо значення зі сховища при оновленні сторінки якщо там була дані
function populateTextarea() {
    const savedData = localStorage.getItem(STORAGE_KEY);
     //розпарсили дані об*єкта
    if (savedData) {
        // console.log(savedMessage);
        const {message, email} = JSON.parse(savedData);
        refs.textarea.value = message; 
        refs.emailInput.value = email;
    }
};

