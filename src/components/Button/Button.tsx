import React from 'react';
import { TouchableOpacity, Text, View } from 'react-native';
import { styles } from './buttonStyle';

interface ButtonProps {
  label: string;
  type: 'primary' | 'secondary';
  valid:boolean
}

const Button: React.FC<ButtonProps> = ({ label, type,valid }) => {
  const buttonStyles = type === 'primary' ? styles.primaryButton : styles.secondaryButton;
  const textStyles = type === 'primary' ? styles.primaryText : styles.secondaryText;

  return (
    <View style={[styles.button, buttonStyles,valid? styles.disabled : null]}>
      <Text style={[styles.buttonText, textStyles]}>{label}</Text>
    </View>
  );
};


export default Button;
