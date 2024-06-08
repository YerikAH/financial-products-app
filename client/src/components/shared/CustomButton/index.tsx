import React from 'react';
import {StyleSheet, Text, TouchableHighlight} from 'react-native';
import {candlelight, charade} from '../../../colors';

interface CustomButtonProps {
  text: string;
  backgroundColor?: string;
  activeBackgroundColor?: string;
  action: () => void;
}
export const CustomButton = ({
  text,
  backgroundColor,
  action,
  activeBackgroundColor,
}: CustomButtonProps) => {
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
      <Text style={styles.textButton}>{text}</Text>
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
    color: charade[950],
    fontFamily: 'UbuntuSans-Medium',
    textAlign: 'center',
  },
});
