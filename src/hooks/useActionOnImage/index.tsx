import {ActionOnImage} from '@constants/interfaces';
import {actSetSelectedImage} from '@redux/images/actions';
import selectSelectedImage from '@redux/images/selectors/selectSelectedImage';
import {isObject, isString, isUrl} from '@utils/index';
import parseActionOnUrl from '@utils/parseActionOnUrl';
import removeUrlParams from '@utils/removeUrlParams';
import {useDispatch, useSelector} from 'react-redux';

const useActionOnImage = () => {
  const dispatch = useDispatch();
  const selectedImage = useSelector(state => selectSelectedImage(state));

  const processImage = (actionOnImage: ActionOnImage) => {
    if (!actionOnImage || !isObject(actionOnImage) || !Object.keys(actionOnImage).length) {
      return null;
    }
    const {action, value} = actionOnImage;

    const processImageUrl = parseActionOnUrl({
      url: selectedImage,
      action,
      value,
    });

    if (!processImageUrl || !isString(processImageUrl) || !isUrl(processImageUrl)) {
      return null;
    }

    return dispatch(actSetSelectedImage(processImageUrl));
  };

  const cleanImage = () => {
    const originalImage = removeUrlParams(selectedImage);

    if (!originalImage || !isString(originalImage) || !isUrl(originalImage)) {
      return null;
    }
    return dispatch(actSetSelectedImage(originalImage));
  };

  return {processImage, cleanImage};
};

export default useActionOnImage;
