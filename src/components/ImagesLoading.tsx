import React from 'react';
import {FlatList, StyleSheet, View} from 'react-native';
import BreedImage from './BreedImage';

const images = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const ImagesLoading = () => {
  return <View style={styles.card}></View>;
};

const styles = StyleSheet.create({
  card: {
    flex: 1,
    borderRadius: 16,
    backgroundColor: '#C1E7BB',
    margin: 6,
    height: 150,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.23,
    shadowRadius: 2.62,
    elevation: 4,
  },
});

export default ImagesLoading;
