// Add imports above this line
import SimpleLightbox from "simplelightbox";
import "simplelightbox/dist/simple-lightbox.min.css";
import { galleryItems } from './gallery-items';
// Change code below this line

const galleryEl = document.querySelector(".gallery");
const imgMarkup = createGalleryMarkup (galleryItems);

galleryEl.style.listStyle = 'none';

function createGalleryMarkup (galleryItems) {
    return galleryItems.map(({preview, original, description}) => {
        return `
        <li class="gallery__item">
      <a class="gallery__link" href="${original}">
        <img
          class="gallery__image"
          src="${preview}"
          data-source="${original}"
          alt="${description}"
        />
      </a>
    </li>`;
    })
    .join("");
    }
        
    galleryEl.insertAdjacentHTML("afterbegin", imgMarkup);
    
    const lightbox = new SimpleLightbox('.gallery a');