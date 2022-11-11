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
        <a class="gallery__link" href="${original}">
            <img
            class="gallery__image"
            src="${preview}"
            data-source="${original}"
            alt="${description}"
            />
        </a>
        </div>`
    })
    .join('');
}

newGallery.insertAdjacentHTML('beforeend', galleryMarkup);
console.log(newGallery);

const object = {
	/*
	 * Prevents the lightbox from closing when clicking its background.
	 */
	closable: true,
	/*
	 * One or more space separated classes to be added to the basicLightbox element.
	 */
	className: 'modal',
	/*
	 * Function that gets executed before the lightbox will be shown.
	 * Returning false will prevent the lightbox from showing.
	 */
	onShow: (instance) => {},
	/*
	 * Function that gets executed before the lightbox closes.
	 * Returning false will prevent the lightbox from closing.
	 */
	onClose: (instance) => {}
};

const instance = basicLightbox.create(`
    <div class="modal">
        <p>
            Your first lightbox with just a few lines of code.
            Yes, it's really that simple.
        </p>
    </div>
`, object);

newGallery.appendChild(instance);
console.log(instance);

const visible = instance.visible();

function onNewGalleryClick (event) {
    event.preventDefault();
    if (event.currentTarget.preview === event.target) {
        instance.show();
    } else {
        instance.close();
    }
    
    
}

document.body.addEventListener('keypress', (event) => {
    if (event.code === "Escape") {
        instance.close();
    } 
})
