import React, {useEffect, useState} from 'react';
import ListOfImages from '@components/molecules/ListOfImages';
import getImageList from '@apis/getImageList';
import BlankTemplate from '@components/templates/BlankTemplate';
import {useDispatch} from 'react-redux';
import {useNavigation} from '@react-navigation/native';
import {actSetSelectedImage} from '@redux/images/actions';

const ImageList = () => {
  const dispatch = useDispatch();
  const {navigate} = useNavigation();
  const [images, setImages] = useState([]);

  const fetchImages = async () => {
    const fetchedImages = await getImageList();
    return setImages(fetchedImages);
  };

  const onPressImage = imageUrl => {
    dispatch(actSetSelectedImage(imageUrl));
    return navigate('ImageEdition');
  };

  useEffect(() => {
    fetchImages();
  }, []);

  return (
    <BlankTemplate>
      <ListOfImages images={images} onPress={onPressImage} />
    </BlankTemplate>
  );
};

export default ImageList;
