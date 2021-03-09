import React from 'react';
import {Image, StyleSheet, View} from 'react-native';

type BreedImageProps = {
  source: string;
};

const BreedImage = ({source}: BreedImageProps) => {
  return (
    <View style={styles.card}>
      <Image style={styles.image} source={{uri: source}} />
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    flex: 1,
    borderRadius: 16,
    margin: 6,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.23,
    shadowRadius: 2.62,

    elevation: 4,
  },
  image: {
    width: '100%',
    height: 150,
    borderRadius: 16,
  },
});

export default BreedImage;
