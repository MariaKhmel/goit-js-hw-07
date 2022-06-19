
import { galleryItems } from './gallery-items.js';
// Change code below this line

const gallaryContainer = document.querySelector(".gallery");
const items = createGallaryItems(galleryItems);

gallaryContainer.insertAdjacentHTML('beforeend', items);

gallaryContainer.addEventListener('click', onGallaryContainerClickHandler)

function createGallaryItems(galleryItems) {
  return galleryItems.map(({preview, original, description}) => {
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
</div>`;
  }).join("")  
}

let instance = "";

function onGallaryContainerClickHandler(event) {  
  event.preventDefault();
  
  if (event.target.nodeName !== "IMG") {
    return
  }
  
  else {
   instance = basicLightbox.create(`
    <img src="${event.target.dataset.source}" width="800" height="600">
`);
    instance.show()
  };

  window.addEventListener('keydown', onEscKeyPress);
}



function onCloseModal() {
  window.removeEventListener('keydown', onEscKeyPress);
instance.close()
}

function onEscKeyPress(event) {
  if (event.code === 'Escape') {
    onCloseModal()
 }
}