import React from 'react';
import Styles from './styles';
import Button from '@components/atoms/Button';
import {useNavigation} from '@react-navigation/native';
import useActionOnImage from '@hooks/useActionOnImage';
import useSaveImage from '@hooks/useSaveImage';
import {useSelector} from 'react-redux';

import selectSelectedImage from '@redux/images/selectors/selectSelectedImage';
import {State} from '@constants/interfaces';

const NavigationButtons = () => {
  const selectedImage = useSelector((state: State) => selectSelectedImage(state));

  const {navigate} = useNavigation();
  const {wipeImageData} = useActionOnImage();
  const {saveImage} = useSaveImage();

  const handleGoBack = () => {
    wipeImageData();
    return navigate('ImageList' as never);
  };

  const handleSaveImage = () => saveImage(selectedImage);

  return (
    <Styles.Wrapper>
      <Button label="<-" onPress={handleGoBack} type="circular" fontSize={28} />
      <Button label="S" onPress={handleSaveImage} type="circular" fontSize={28} />
    </Styles.Wrapper>
  );
};

export default NavigationButtons;
