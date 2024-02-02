import {StyleSheet} from 'react-native';
import COLORS from '../../constants/color';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-end',
  },
  element_group: {
    height: '50%',
    alignItems: 'center',
    justifyContent: 'space-around',
  },
  primary_button: {
    backgroundColor: COLORS.black,
    width: 350,
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 8,
  },
  secondary_button: {
    backgroundColor: COLORS.white,
    width: 350,
    height: 50,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 8,
    borderWidth: 1,
  },
  primar_text: {
    color: COLORS.black,
    fontWeight: '600',
  },
  secondary_text: {
    color: COLORS.white,
    fontWeight: '600',
  },
  text: {
    color: COLORS.link,
    fontWeight: '500',
    lineHeight: 50,
    textAlign: 'center',
  },
});
