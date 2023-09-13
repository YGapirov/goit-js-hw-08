// import throttle from 'lodash.throttle';

// const STORAGE_KEY = 'feedback-form-state'; //робимо константу для розміщення в коді при повторенні ключа

// const refs = {
//     form: document.querySelector('.feedback-form'),
//     emailInput: document.querySelector('.feedback-form input[name="email"]'),
//     messageInput: document.querySelector('.feedback-form textarea'),
// };

// refs.messageInput.addEventListener('input', throttle(onFormInput, 500));

// populateTextarea();

// refs.form.addEventListener('submit', onFormSubmit);

// function onFormInput() {
//     const formData = {
//         email: refs.emailInput.value,
//         message: refs.messageInput.value,
// }
// localStorage.setItem(STORAGE_KEY, JSON.stringify(formData));
// };

// //отримуємо значення зі сховища при оновленні сторінки якщо там була дані
// function populateTextarea() {
//     const savedData = localStorage.getItem(STORAGE_KEY);
//      //розпарсили дані об*єкта
//     if (savedData) {
//         // console.log(savedMessage);
//         const {email, message} = JSON.parse(savedData);
//         refs.emailInput.value = email; 
//         refs.messageInput.value = message;
//     }
//    };

// function onFormSubmit(evt) {
//     evt.preventDefault(); //блокуєм перезавантаження сторінки після сабміту
     
//     const formData = {
//         email: refs.emailInput.value,
//         message: refs.messageInput.value,
//     };

//     if (formData.email === '' || formData.message === '') {
//         alert('Please fill in all the fields!');
//         return; 
//     }
//      localStorage.removeItem(STORAGE_KEY);  // Очищаємо сховище після сабміта

//    refs.emailInput.value = '';    // Очищаємо поля форми
//    refs.messageInput.value = '';

//     console.log('Submitted:', formData);
// }



import throttle from 'lodash.throttle';



const STORAGE_KEY = 'feedback-form-state'; //робимо константу для розміщення в коді при повторенні ключа

const refs = {
    form: document.querySelector('.feedback-form'),
    emailInput: document.querySelector('.feedback-form input[name="email"]'),
    textarea: document.querySelector('.feedback-form textarea'),
};

populateTextarea();

refs.form.addEventListener('submit', onFormSubmit);
refs.textarea.addEventListener('input', throttle(onFormInput, 500));
refs.emailInput.addEventListener('input', throttle(onFormInput, 500));

let formData = {
    email: '',
    message: '',   //
};

function onFormSubmit(evt) {
    evt.preventDefault(); //блокуєм перезавантаження сторінки після сабміту
    formData.email = refs.emailInput.value;
    formData.message = refs.textarea.value;

    if (formData.email === '' || formData.message === '') {
        alert('Please fill in all the fields!');
        return; 
    }

    console.log('Submitted:', formData);
    // console.log('Email:', formData.email);
    // console.log('Message:', formData.message);

    refs.form.reset(); //скидуєм значення інпут
    localStorage.removeItem(STORAGE_KEY); //скидуємо значення локала після сабміта

}


function onFormInput(evt) {
    const email = refs.emailInput.value;
    const message = evt.target.value; //ставимо саме таргет, бо бібліотека свариться на CurrentTarget через застарілу інфо
    
    const data = {email, message}; //створюємо обєкт для передачі меседжа і імейла

    localStorage.setItem(STORAGE_KEY, JSON.stringify(data));
}



//отримуємо значення зі сховища при оновленні сторінки якщо там була дані
function populateTextarea() {
    const savedData = localStorage.getItem(STORAGE_KEY);
     //розпарсили дані об*єкта
    if (savedData) {
        // console.log(savedMessage);
        const {email, message} = JSON.parse(savedData);
        refs.emailInput.value = email;
        refs.textarea.value = message;
        
        
    }
   
};

   