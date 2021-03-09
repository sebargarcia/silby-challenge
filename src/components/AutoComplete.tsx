import React, {useEffect, useState} from 'react';
import {
  Keyboard,
  StyleSheet,
  Text,
  TextInput,
  TouchableWithoutFeedback,
  View,
} from 'react-native';

type Props = {
  items: string[];
  onChangeText: (text: string) => void;
  onSelectItem: (item: unknown) => void;
  //Later we can enchance this components with another props like
  //containerStyle, inputStyle, listStyle, onShowItems, etc...
};

const AutoComplete = ({items = [], onChangeText, onSelectItem}: Props) => {
  const [text, setText] = useState('');
  const [itemSelected, setItemSelected] = useState(false);

  //Add debounce time to avoid filter on every key stroke
  //this avoids multiple calls to API
  useEffect(() => {
    const timer = setTimeout(() => {
      onChangeText(text);
    }, 300);
    return () => clearTimeout(timer);
  }, [text]);

  const handleChangeText = (text: string) => {
    setText(text);
    setItemSelected(false);
  };

  const handleSelectItem = (item: string) => {
    setText(item);
    setItemSelected(true);
    onSelectItem(item);
  };

  return (
    <View>
      <View>
        <TextInput
          underlineColorAndroid="transparent"
          style={styles.input}
          placeholder="Search breeds"
          selectionColor={'#779573'}
          value={text}
          onChangeText={(text) => handleChangeText(text)}
        />
      </View>
      {!itemSelected &&
        items.map((item, index) => {
          return (
            <TouchableWithoutFeedback
              key={index}
              onPress={(e) => handleSelectItem(item)}>
              <Text style={styles.item}>{item}</Text>
            </TouchableWithoutFeedback>
          );
        })}
    </View>
  );
};

const styles = StyleSheet.create({
  input: {
    fontSize: 16,
    fontWeight: '700',
    color: '#779573',
    backgroundColor: '#F8F9F8',
    borderColor: '#F8F9F8',
    padding: 12,
    paddingHorizontal: 24,
    borderStyle: 'solid',
    borderRadius: 16,
    borderWidth: 1,
    width: '100%',
    marginBottom: 8,
  },

  containerItems: {
    backgroundColor: 'red',
    height: 100,
    width: 100,
  },

  item: {
    fontSize: 16,
    fontWeight: '700',
    color: '#779573',
    backgroundColor: '#F8F9F8',
    width: '100%',
    padding: 16,
    paddingLeft: 16,
    borderRadius: 8,
    marginVertical: 4,
  },
});

export default AutoComplete;
