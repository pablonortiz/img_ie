import {ActionOnImage, State} from '@constants/interfaces';
import useActionsHistory from '@hooks/useActionsHistory';
import {actSetSelectedImage, actWipeImageState} from '@redux/images/actions';
import selectSelectedImage from '@redux/images/selectors/selectSelectedImage';
import generateRandomId from '@utils/generateRandomId';
import {isObject, isString, isUrl} from '@utils/index';
import parseActionOnUrl from '@utils/parseActionOnUrl';
import removeUrlParams from '@utils/removeUrlParams';
import {useDispatch, useSelector} from 'react-redux';

const useActionOnImage = () => {
  const dispatch = useDispatch();
  const selectedImage = useSelector((state: State) => selectSelectedImage(state));

  const {addAction} = useActionsHistory();

  const processImage = (actionOnImage: ActionOnImage) => {
    if (!actionOnImage || !isObject(actionOnImage) || !Object.keys(actionOnImage).length) {
      return null;
    }
    const {action, value = ''} = actionOnImage;

    const processImageUrl = parseActionOnUrl({
      url: selectedImage,
      action,
      value,
    });

    if (!processImageUrl || !isString(processImageUrl) || !isUrl(processImageUrl)) {
      return null;
    }

    addAction({id: generateRandomId(), url: processImageUrl});

    return dispatch(actSetSelectedImage(processImageUrl));
  };

  const cleanImage = () => {
    const originalImage = removeUrlParams(selectedImage);

    if (!originalImage || !isString(originalImage) || !isUrl(originalImage)) {
      return null;
    }
    return dispatch(actSetSelectedImage(originalImage));
  };

  const wipeImageData = () => {
    dispatch(actWipeImageState());
  };

  return {processImage, cleanImage, wipeImageData};
};

export default useActionOnImage;
