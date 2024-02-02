import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Dashboard from '../Dashboard/Dashboard';
import Profile from '../Profile/Profile';
import Settings from '../Settings/Settings';
import Ionicons from 'react-native-vector-icons/Ionicons';
import COLORS from '../../constants/color';

const Tab = createBottomTabNavigator();

function Home() {
    return (
        <Tab.Navigator
            screenOptions={({ route }) => ({
                tabBarIcon: ({ focused, color, size }) => {
                    let iconName;

                    if (route.name === 'Dashboard') {
                        iconName = focused ? "grid-sharp" : "grid-outline";
                    } else if (route.name === 'Profile') {
                        iconName = focused ? "person-sharp" : "person-outline";
                    } else if (route.name === 'Settings') {
                        iconName = focused ? "options-sharp" : "options-outline";
                    }

                    return iconName && <Ionicons name={iconName} size={size} color={color} />;
                },
                tabBarActiveTintColor: COLORS.tomato,
                tabBarInactiveTintColor: COLORS.grey3,
            })}
        >
            <Tab.Screen name="Dashboard" component={Dashboard} />
            <Tab.Screen name="Profile" component={Profile} />
            <Tab.Screen name="Settings" component={Settings} />
        </Tab.Navigator>
    );
}

export default Home