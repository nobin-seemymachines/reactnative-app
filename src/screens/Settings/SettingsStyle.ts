import {StyleSheet} from 'react-native';
import COLORS from '../../constants/color';

export const styles = StyleSheet.create({
  settings: {
    flex: 1,
    justifyContent: 'center',
    alignItems:'center'
  },
  primary_button: {
    backgroundColor: COLORS.black,
    width: 200,
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 8,
  },
  secondary_text: {
    color: COLORS.white,
    fontWeight: '600',
  },
});
