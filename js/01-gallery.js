import { galleryItems } from './gallery-items.js';
// Change code below this line

console.log(galleryItems);

const newGallery = document.querySelector('.gallery');
const galleryMarkup = createGalLeryMarkup (galleryItems);

function createGalLeryMarkup (galleryItems) {
    return galleryItems
    .map(({ preview, original, description }) => {
        
        return `
        <div class="gallery__item">
        <a class="gallery__link" href="large-image.jpg">
            <img
            class="gallery__image"
            src="small-image.jpg"
            data-source="large-image.jpg"
            alt="Image description"
            />
        </a>
        </div>`
    })
    .join('');
}
newGallery.insertAdjacentHTML('beforeend', galleryMarkup);
console.log(newGallery);

newGallery.addEventListener('click', onNewGalleryClick);
function onNewGalleryClick (evt) {
    console.log(evt.target.original);
    

}
