import {StyleSheet, TextInput, View} from 'react-native';
import {MagnifyingGlassIcon} from 'react-native-heroicons/outline';
import {charade, eastBay, woodsmoke} from '../../../../colors';
import {useThemedStyles} from '../../../../hooks';
import {useState} from 'react';

export const SearchProduct = () => {
  const {dynamicStyles, isDarkMode} = useThemedStyles();
  const [searchText, setSearchText] = useState('');

  const handleChange = (text: string) => {
    setSearchText(text);
  };
  return (
    <View style={[styles.containerInput, dynamicStyles.card]}>
      <MagnifyingGlassIcon
        strokeWidth={3}
        size={14}
        style={dynamicStyles.icon}
      />
      <TextInput
        placeholder="Search ..."
        style={[styles.input, dynamicStyles.color]}
        cursorColor={eastBay[600]}
        placeholderTextColor={isDarkMode ? woodsmoke[500] : charade[400]}
        onChangeText={handleChange}
        value={searchText}
      />
    </View>
  );
};
const styles = StyleSheet.create({
  containerInput: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-start',
    borderRadius: 4,
    borderWidth: 1,
    paddingHorizontal: 16,
  },
  input: {
    padding: 12,
    fontSize: 14,
    fontFamily: 'UbuntuSans-Regular',
    width: '100%',
  },
});
