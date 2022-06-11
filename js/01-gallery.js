import { galleryItems } from './gallery-items.js';
// Change code below this line
console.log(galleryItems);

const createGallery = document.querySelector('.gallery');

const galleryMarkUp = createGalleryItems(galleryItems);
let instance = "";


createGallery.innerHTML = galleryMarkUp;



createGallery.addEventListener('click', onImageClick);


function createGalleryItems() {
    return galleryItems.map(({ preview, original, description }) =>
    `
 <div class="gallery__item">
  <a class="gallery__link" href="${original}">
    <img
      class="gallery__image  "
      src="${preview}"
      data-source='${original}'
      alt="${description}"
    />
  </a>
</div>`
) .join('')
    }  ;

function onImageClick(event) {
    event.preventDefault();
    const isPictureClicked = event.target.classList.contains('.gallery__image');

    if (!isPictureClicked) {
        return;
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
