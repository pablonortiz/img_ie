import React from 'react';
import Styles from './styles';
import Button from '@components/atoms/Button';
import Image from '@components/atoms/Image';
import {useSelector} from 'react-redux';
import selectSelectedImage from '@redux/images/selectors/selectSelectedImage';
import useActionOnImage from '@hooks/useActionOnImage';

const ImageEditionView = () => {
  const selectedImage = useSelector(state => selectSelectedImage(state));

  const {cleanImage} = useActionOnImage();

  return (
    <Styles.Wrapper>
      <Styles.ButtonsWrapper>
        <Button label="D" type="circular" onPress={cleanImage} />
        <Button label="R" type="circular" />
      </Styles.ButtonsWrapper>
      <Styles.ImageWrapper>
        <Image src={selectedImage} style={{width: 200, height: 200}} />
      </Styles.ImageWrapper>
    </Styles.Wrapper>
  );
};

export default ImageEditionView;
