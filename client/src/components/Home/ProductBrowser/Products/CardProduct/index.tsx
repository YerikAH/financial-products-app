import {StyleSheet, Text, TouchableHighlight, View} from 'react-native';
import {ChevronRightIcon} from 'react-native-heroicons/outline';
import {charade, woodsmoke} from '../../../../../colors';
import {Routes} from '../../../../../navigation/routes';
import {useAppNavigation, useThemedStyles} from '../../../../../hooks';

interface Props {
  name: string;
  id: string;
  last?: boolean;
}
export const CardProduct = ({name, id, last}: Props) => {
  const {dynamicStyles, isDarkMode} = useThemedStyles();
  const {navigateTo} = useAppNavigation();
  const handleProduct = () => {
    navigateTo(Routes.ProductDetail, {id: id});
  };
  return (
    <TouchableHighlight
      style={[
        styles.card,
        dynamicStyles.card,
        {borderBottomWidth: !last ? 1 : 0},
      ]}
      underlayColor={isDarkMode ? woodsmoke[900] : charade[100]}
      onPress={handleProduct}>
      <>
        <View>
          <Text style={[styles.title, dynamicStyles.color]}>{name}</Text>
          <Text style={[styles.text, dynamicStyles.text]}>ID: {id}</Text>
        </View>
        <ChevronRightIcon
          style={dynamicStyles.icon}
          strokeWidth={3}
          size={14}
        />
      </>
    </TouchableHighlight>
  );
};

const styles = StyleSheet.create({
  card: {
    flex: 1,
    justifyContent: 'space-between',
    flexDirection: 'row',
    alignItems: 'center',
    padding: 16,
  },
  title: {
    fontFamily: 'UbuntuSans-SemiBold',
    fontSize: 14,
  },
  text: {
    marginTop: 4,
    fontFamily: 'UbuntuSans-Regular',
    fontSize: 14,
  },
});
