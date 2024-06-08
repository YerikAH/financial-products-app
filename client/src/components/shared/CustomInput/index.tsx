import {StyleSheet, Text, TextInput, View} from 'react-native';
import React from 'react';
import {Control, Controller} from 'react-hook-form';
import {
  charade,
  eastBay,
  getDynamicStyles,
  red,
  woodsmoke,
} from '../../../colors';
import {useTheme} from '../../../context/ThemeContext';

interface CustomInputProps {
  name: string;
  label: string;
  placeholder: string;
  control: Control<any>;
  rules: any;
  errorMessage?: string;
}
export const CustomInput: React.FC<CustomInputProps> = ({
  name,
  label,
  placeholder,
  control,
  rules,
  errorMessage,
}: CustomInputProps) => {
  const {theme} = useTheme();
  const isDarkMode = theme === 'dark';
  const dynamicStyles = getDynamicStyles(isDarkMode);
  const dynamicBorderColor = {
    borderColor: errorMessage
      ? red[600]
      : isDarkMode
      ? woodsmoke[700]
      : charade[200],
  };

  return (
    <View style={styles.inputContainer}>
      <Text style={[styles.inputLabel, dynamicStyles.color]}>{label}</Text>
      <Controller
        control={control}
        rules={rules}
        render={({field: {onChange, onBlur, value}}) => (
          <TextInput
            placeholder={placeholder}
            style={[
              styles.input,
              dynamicStyles.color,
              dynamicStyles.card,
              dynamicBorderColor,
            ]}
            cursorColor={eastBay[600]}
            placeholderTextColor={isDarkMode ? woodsmoke[500] : charade[400]}
            onBlur={onBlur}
            onChangeText={onChange}
            value={value}
          />
        )}
        name={name}
      />
      {errorMessage && <Text style={styles.errorMessage}>{errorMessage}</Text>}
    </View>
  );
};
const styles = StyleSheet.create({
  inputContainer: {
    marginTop: 16,
  },
  inputLabel: {
    fontFamily: 'UbuntuSans-SemiBold',
    fontSize: 14,
  },
  input: {
    borderRadius: 4,
    borderWidth: 1,
    padding: 16,
    fontSize: 14,
    fontFamily: 'UbuntuSans-Regular',
    width: '100%',
    marginTop: 8,
  },
  errorMessage: {
    color: red[600],
    fontSize: 12,
    fontFamily: 'UbuntuSans-Regular',
  },
  errorInput: {
    borderColor: red[600],
  },
});
