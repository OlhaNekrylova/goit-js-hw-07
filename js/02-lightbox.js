import { galleryItems } from './gallery-items.js';

console.log(galleryItems);

const newGallery = document.querySelector('.gallery');

newGallery.addEventListener('click', onNewGalleryClick);

const galleryMarkup = createGalLeryMarkup (galleryItems);

function createGalLeryMarkup (galleryItems) {
    return galleryItems
    .map(({ preview, original, description }) => {
        return `
        <div class="gallery__item">
        <a class="gallery__item" href="${original}">
        <img class="gallery__image" src="${preview}" alt="${description}" />
        </a>
        </div>`
    })
    .join('');
}

newGallery.insertAdjacentHTML('afterbegin', galleryMarkup);
console.log(newGallery);

function onNewGalleryClick (event) {
    event.preventDefault();

    if (event.target.nodeName !== 'IMG') {
    return;
    }

    const instance = basicLightbox.create(`
        <div class="modal">
        <img
        src="${event.target.dataset.source}" width="800" height="600" /> 
        </div>`, {
            onShow: instance => {
                window.addEventListener('keydown', onEscPress);
                instance.element().querySelector('img').onclick = instance.close;
            },
            onClose: instance => {
                window.removeEventListener('keydown', onEscPress);
            },
            }
        );
        instance.show(); 

    function onEscPress(event) {
        if (event.code === 'Escape') {
        instance.close();
        }
    } 
    
}


