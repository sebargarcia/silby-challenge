import React, {useMemo, useState} from 'react';
import {
  FlatList,
  SafeAreaView,
  StatusBar,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import AutoComplete from './src/components/AutoComplete';
import BreedImage from './src/components/BreedImage';
import useBreeds from './src/hooks/useBreeds';
import useBreedsImages from './src/hooks/useBreedsImages';

//TODO: Handle errors from API...
//TODO: Make better loading of images

const App = () => {
  const [search, setSearch] = useState<string>('');
  const {data, loading, error, refetch} = useBreeds();
  const breeds = useMemo(
    () =>
      data ? Object.keys(data).filter((breed) => breed.startsWith(search)) : [],
    [search],
  );
  const {
    data: imagesData,
    loading: loadingImages,
    error: errorImages,
  } = useBreedsImages(search, breeds);

  const images = imagesData ? (imagesData as string[]) : [];

  return (
    <>
      <StatusBar barStyle="dark-content" />
      <SafeAreaView style={styles.safeArea}>
        <View style={styles.container}>
          <FlatList
            keyboardShouldPersistTaps={'always'}
            keyboardDismissMode={'interactive'}
            showsVerticalScrollIndicator={false}
            keyExtractor={(item, idx) => 'a' + idx.toString()}
            data={images}
            key={'1'}
            numColumns={2}
            ListHeaderComponent={
              <>
                <Text style={styles.title}>Find dog breeds!</Text>
                <AutoComplete
                  items={breeds}
                  onChangeText={setSearch}
                  onSelectItem={() => {}}></AutoComplete>
              </>
            }
            renderItem={({item}) => <BreedImage source={item} key={item} />}
          />
        </View>
      </SafeAreaView>
    </>
  );
};

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
  },
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: '#FFF',
  },
  title: {
    fontFamily: 'Nunito-Bold',
    fontSize: 32,
    color: '#28402C',
    marginVertical: 16,
  },
});

export default App;
