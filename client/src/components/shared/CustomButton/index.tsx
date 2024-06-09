import {StyleSheet, Text, TouchableHighlight} from 'react-native';
import {candlelight, charade} from '../../../colors';

interface Props {
  text: string;
  backgroundColor?: string;
  activeBackgroundColor?: string;
  textColor?: string;
  action: () => void;
}
export const CustomButton = ({
  text,
  backgroundColor,
  action,
  activeBackgroundColor,
  textColor,
}: Props) => {
  return (
    <TouchableHighlight
      style={[
        styles.buttonContainer,
        {
          backgroundColor: backgroundColor ?? candlelight[500],
        },
      ]}
      underlayColor={activeBackgroundColor ?? candlelight[400]}
      onPress={action}>
      <Text style={[styles.textButton, {color: textColor ?? charade[950]}]}>
        {text}
      </Text>
    </TouchableHighlight>
  );
};

const styles = StyleSheet.create({
  buttonContainer: {
    paddingHorizontal: 32,
    paddingVertical: 24,
    borderRadius: 6,
  },
  textButton: {
    fontSize: 14,
    fontFamily: 'UbuntuSans-Medium',
    textAlign: 'center',
  },
});
