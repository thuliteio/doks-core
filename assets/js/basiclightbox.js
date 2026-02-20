// Source: https://github.com/electerious/basicLightbox/issues/10#issuecomment-346898146
import * as basicLightbox from 'basiclightbox'

const images = document.querySelectorAll('.lightbox img, img.lightbox')

images.forEach(img => {
  const html = img.outerHTML

  // Function to handle escape key
  const handleEscapeKey = (event) => {
    if (event.key === 'Escape') {
      instance.close()
    }
  }

  const instance = basicLightbox.create(html, {
    onShow: () => {
      // Add escape key listener when lightbox is shown
      document.addEventListener('keydown', handleEscapeKey)
    },
    onClose: () => {
      // Remove escape key listener when lightbox is closed
      document.removeEventListener('keydown', handleEscapeKey)
    }
  })

  img.onclick = () => {
    instance.show()
  }
})
