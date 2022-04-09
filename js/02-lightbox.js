import { galleryItems } from './gallery-items.js';
// Change code below this line
const galleryList = document.querySelector(".gallery");
const galleryMarkup = createMarkupGallery(galleryItems);
galleryList.insertAdjacentHTML("beforeend", galleryMarkup);
galleryList.addEventListener("click", onGalleryItemClick);
function createMarkupGallery(array) {
  return array
    .map(({ preview, original, description }) => {
      return `
      <a class="gallery__item" href="${original}">
            <img class="gallery__image" src="${preview}" alt="${description}" />
      </a>`;
   })
   .join("");
}
const lightbox = new SimpleLightbox('.gallery a', { captions: true, captionsData: 'alt', captionDelay: 250 }); 
function onGalleryItemClick(event) { };