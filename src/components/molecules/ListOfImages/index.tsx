import {URLActionData} from '@constants/interfaces';
import React from 'react';
import {FlatList, ListRenderItem} from 'react-native';
import Styles from './styles';

export interface ListOfImagesInterface {
  images: URLActionData[];
  onPress: (url: string) => {};
}

const ListOfImages = ({images, onPress}: ListOfImagesInterface) => {
  const renderItem: ListRenderItem<URLActionData> = ({item}) => {
    const {url} = item;

    return (
      <Styles.TouchableWrapper onPress={() => onPress(url)}>
        <Styles.Image src={url} />
      </Styles.TouchableWrapper>
    );
  };

  return <FlatList data={images} renderItem={renderItem} numColumns={2} />;
};

export default ListOfImages;
