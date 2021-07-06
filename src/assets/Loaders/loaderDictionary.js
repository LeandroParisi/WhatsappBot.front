import mainLoader from './images/main_loader.gif'

const loaderImages = {
  mainLoader: {
    src: mainLoader,
    timer: 1600,
  },
}

export const getImage = (image) => loaderImages[image]

export default loaderImages
