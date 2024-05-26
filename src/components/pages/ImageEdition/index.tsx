import ImageActionButtons from '@components/organisms/ImageActionButtons';
import ImageEditionView from '@components/organisms/ImageEditionView';
import BlankTemplate from '@components/templates/BlankTemplate';
import React, {useState} from 'react';
import Button from '@components/atoms/Button';
import {useDispatch} from 'react-redux';
import {actWipeImageState} from '@redux/images/actions';
import {useNavigation} from '@react-navigation/native';
import imageActions from '@constants/imageActions';

const ImageEdition = () => {
  const dispatch = useDispatch();
  const {navigate} = useNavigation();
  const [actionData, setActionData] = useState({});

  const handleGoBack = () => {
    dispatch(actWipeImageState());
    return navigate('ImageList');
  };

  return (
    <BlankTemplate>
      <Button label="<- Go back" onPress={handleGoBack} />
      <ImageEditionView />
      <ImageActionButtons selectedActionData={actionData} onPressButton={setActionData} actionButtonsData={imageActions} />
    </BlankTemplate>
  );
};

export default ImageEdition;
