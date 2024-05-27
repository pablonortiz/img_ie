import ImageActionButtons from '@components/organisms/ImageActionButtons';
import ImageEditionView from '@components/organisms/ImageEditionView';
import BlankTemplate from '@components/templates/BlankTemplate';
import React, {useState} from 'react';
import imageActions from '@constants/imageActions';
import ActionsHistory from '@components/organisms/ActionsHistory';
import NavigationButtons from '@components/organisms/NavigationButtons';

const ImageEdition = () => {
  const [actionData, setActionData] = useState({});

  return (
    <BlankTemplate>
      <ImageEditionView />
      <ImageActionButtons selectedActionData={actionData} onPressButton={setActionData} actionButtonsData={imageActions} />
      <ActionsHistory />
      <NavigationButtons />
    </BlankTemplate>
  );
};

export default ImageEdition;
