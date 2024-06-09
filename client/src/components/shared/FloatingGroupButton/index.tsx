import {StyleSheet, View} from 'react-native';
import {CustomButton} from '../CustomButton';
import {useKeyboardVisibility, useThemedStyles} from '../../../hooks';

interface Props {
  buttons: {
    text: string;
    action: () => void;
    backgroundColor?: string;
    activeBackgroundColor?: string;
    textColor?: string;
  }[];
}
export const FloatingGroupButton = ({buttons}: Props) => {
  const isVisible = useKeyboardVisibility();
  const {dynamicStyles} = useThemedStyles();
  if (!isVisible) {
    return null;
  }
  return (
    <View style={[styles.container, dynamicStyles.colorLow]}>
      {buttons.map((button, index) => (
        <CustomButton
          key={index}
          text={button.text}
          action={button.action}
          backgroundColor={button.backgroundColor}
          activeBackgroundColor={button.activeBackgroundColor}
          textColor={button.textColor}
        />
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 32,
    paddingVertical: 32,
    position: 'relative',
    bottom: 0,
    right: 0,
    width: '100%',
    rowGap: 16,
  },
});
