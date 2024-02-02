import AsyncStorage from '@react-native-async-storage/async-storage';

export const storeData = async (token: string) => {
  try {
    await AsyncStorage.setItem('token', token);
  } catch (e) {
    console.log(e);
  }
};

export const getUser = async (setIsLoggedIn: any) => {
  try {
    const savedUser = await AsyncStorage.getItem('token');
    setIsLoggedIn(!!savedUser);
  } catch (error) {
    setIsLoggedIn(false);
  }
};
