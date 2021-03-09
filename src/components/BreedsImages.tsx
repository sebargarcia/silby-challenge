import React from 'react';
import {FlatList} from 'react-native';
import BreedImage from './BreedImage';

type BreedsImagesProps = {
  images: string[];
};

const BreedsImages = ({images}: BreedsImagesProps) => {
  return (
    <FlatList
      showsVerticalScrollIndicator={false}
      keyExtractor={(item, idx) => 'a' + idx.toString()}
      data={images}
      key={'2'}
      numColumns={2}
      renderItem={({item}) => <BreedImage source={item} key={item} />}
    />
  );
};

export default BreedsImages;
