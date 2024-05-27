import React from 'react';
import Styles from './styles';
import Button from '@components/atoms/Button';
import {useDispatch, useSelector} from 'react-redux';
import selectSelectedImage from '@redux/images/selectors/selectSelectedImage';
import useActionOnImage from '@hooks/useActionOnImage';
import {State} from '@constants/interfaces';
import {actUpdateActionsHistory} from '@redux/userActions/actions';

const ImageEditionView = () => {
  const dispatch = useDispatch();
  const selectedImage = useSelector((state: State) => selectSelectedImage(state));

  const {cleanImage} = useActionOnImage();

  const handleCleanImage = () => {
    cleanImage();
    return dispatch(actUpdateActionsHistory([]));
  };

  return (
    <Styles.Wrapper>
      <Styles.ButtonsWrapper>
        <Button iconData={{name: 'delete'}} type="circular" onPress={handleCleanImage} />
      </Styles.ButtonsWrapper>
      <Styles.ImageWrapper>
        <Styles.Image src={selectedImage} />
      </Styles.ImageWrapper>
    </Styles.Wrapper>
  );
};

export default ImageEditionView;
