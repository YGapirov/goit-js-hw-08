// Add imports above this line
import { galleryItems } from './gallery-items';

import SimpleLightbox from "simplelightbox";

import "simplelightbox/dist/simple-lightbox.min.css";

// Change code below this line

const galleryLis = document.querySelector('.gallery');
const markup = createMarkup(galleryItems)

galleryLis.insertAdjacentHTML('beforeend', markup);   //виводимо на живу сторінку контейнер


function createMarkup (arr) {
    return arr.map(({preview, original, description }) => {
        return `<li  class="gallery__item">
        <a class="gallery__link" href="${original}">
        <img class="gallery__image" src="${preview}" alt="${description}" />
        </a>
        </li>`

    }).join('');
    
};


    const lightbox = new SimpleLightbox('.gallery a', {
        caption: true,    //показувати підпис під фото
        captionsData: 'alt',   //виводимо з алт дескріпшин
        captionDelay: 250,   //затримка появи підпсу
      });





// console.log(galleryItems);
