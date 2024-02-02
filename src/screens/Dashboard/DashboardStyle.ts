import {StyleSheet} from 'react-native';
import COLORS from '../../constants/color';

export const styles = StyleSheet.create({
  container: {
    backgroundColor: COLORS.white,
    flex: 1,
    flexDirection: 'column',
    gap: 10,
  },
  data: {
    backgroundColor: COLORS.tomato,
    flex: 1,
    flexDirection: 'column',
    gap: 10,
    marginHorizontal: 20,
    marginVertical: 10,
    padding:15,
  },
  test: {
    color: COLORS.white,
    fontSize:20,
  },
});
