import {StyleSheet} from 'react-native';
import COLORS from '../../constants/color';

export const styles = StyleSheet.create({
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
  login_container: {
    backgroundColor: COLORS.white,
    height: '100%',
    flex: 1,
    alignItems: 'center',
    justifyContent: 'flex-start',
    padding: 10,
    gap: 20,
  },

  heading: {
    width: 300,
    color: COLORS.black,
    fontSize: 30,
    fontWeight: '700',
    alignSelf: 'flex-start',
    lineHeight: 45,
  },
  input: {
    backgroundColor: COLORS.grey,
    width: 350,
    height: 50,
    borderRadius: 5,
    padding: 15,
  },
  login_with: {},
  social_icons: {
    width: 350,
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  icon: {
    width: 100,
    height: 55,
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 1,
    borderRadius: 5,
    borderColor: COLORS.grey2,
  },

  forgot_text: {
    marginLeft: 'auto',
    fontWeight: '500',
  },

  footer_text: {
    lineHeight: 40,
  },
  text: {
    color: COLORS.link,
    fontWeight: '500',
    lineHeight: 50,
    textAlign: 'center',
  },
  error_msg: {
    color: COLORS.red,
    paddingLeft: 10,
    fontSize: 12,
  },
  disabled:{
    opacity:0.4
  },
});
