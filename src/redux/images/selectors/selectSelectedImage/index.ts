import {State} from '@constants/interfaces';
import {isObject, isString, isUrl} from '@utils/index';

const selectSelectedImage = (state: State) => {
  if (!state || !isObject(state) || !Object.keys(state).length) {
    return '';
  }
  const {images} = state;

  if (!images || !isObject(images) || !Object.keys(images).length) {
    return '';
  }
  const {selectedImage} = images;

  if (!selectedImage || !isString(selectedImage) || !isUrl(selectedImage)) {
    return '';
  }
  return selectedImage;
};

export default selectSelectedImage;
