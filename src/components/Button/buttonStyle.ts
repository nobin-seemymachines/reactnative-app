import {StyleSheet} from 'react-native';
import COLORS from '../../constants/color';

export const styles = StyleSheet.create({
  button: {
    width: 350,
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 8,
  },
  primaryButton: {
    backgroundColor: COLORS.black,
  },
  secondaryButton: {
    backgroundColor: COLORS.white,
    borderWidth: 1,
  },
  primaryText: {
    color: COLORS.white,
  },
  secondaryText: {
    color: COLORS.black,
  },
  buttonText: {
    fontWeight: '600',
  },
  disabled:{
    opacity:0.4
  },
});
