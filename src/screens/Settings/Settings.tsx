import { View, Text, Pressable } from 'react-native'
import React from 'react'
import { styles } from './SettingsStyle'
import AsyncStorage from '@react-native-async-storage/async-storage';
import { logoutAction } from '../../redux/actions/userActions';
import { useDispatch } from 'react-redux';

const Settings = () => {
    const dispatch = useDispatch()
    const handleLogout = async () => {
        await AsyncStorage.removeItem('token');
        dispatch(logoutAction())
    };

    return (
        <View style={styles.settings}>
            <Pressable style={styles.primary_button} onPress={handleLogout}>
                <Text style={styles.secondary_text}>Logout</Text>
            </Pressable>
        </View >
    )
}

export default Settings