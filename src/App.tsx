/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import * as React from 'react';
import LandingScreen from './screens/LandingScreen/LandingScreen';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Login from './screens/LoginScreen/Login';
import Register from './screens/RegisterScreen/Register';
import Home from './screens/Home/Home';
import BootSplash from "react-native-bootsplash";
import { useSelector } from 'react-redux';
import { getUser, storeData } from './helpers/tokenStorage';
import { getToken } from './helpers/getToken';

const Stack = createNativeStackNavigator();

function App(): React.JSX.Element {
  const [isLoggedIn, setIsLoggedIn] = React.useState(false)

  const token = useSelector((state: any) => state.user.token)

  React.useEffect(() => {
    if (typeof (token) !== 'string') {
      getUser(setIsLoggedIn)
    }
    else if (typeof (token) === 'string') {
      storeData(token)
      setIsLoggedIn(true)
    }
    else {
      setIsLoggedIn(false)
    }

  }, [token]);

  return (
    <NavigationContainer onReady={() => {
      BootSplash.hide();
    }}>
      <>
        {isLoggedIn ? (
          <Stack.Navigator screenOptions={{ headerShown: false }}>
            <Stack.Screen name='Home' component={Home} />
          </Stack.Navigator>
        ) : (
          <Stack.Navigator screenOptions={{ headerShown: false }}>
            <Stack.Screen name='Landing' component={LandingScreen} />
            <Stack.Screen name='Login' component={Login} />
            <Stack.Screen name='Register' component={Register} />
          </Stack.Navigator>
        )}
      </>
    </NavigationContainer>

  );
}

export default App;
