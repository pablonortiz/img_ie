import React from 'react';
import Styles from './styles';
import FastImage from 'react-native-fast-image';

export interface ImageInterface {
  src: string;
}

const Image = ({src, ...props}: ImageInterface) => {
  return <Styles.Image source={{uri: src, cache: FastImage.cacheControl.immutable}} {...props} />;
};

export default Image;
