import { View, Text, StatusBar, TextInput, Pressable, Image, Alert, TouchableWithoutFeedback, Keyboard, PressableProps } from 'react-native'
import React, { useRef, useState } from 'react'
import { styles } from './RegisterStyle'
import COLORS from '../../constants/color'
import IMAGES from '../../constants/image'
import { isEmailValid, isNotNull, isPasswordMismatch, isPasswordValid } from '../../constants/validation'
import { useSafeAreaInsets } from 'react-native-safe-area-context'
import Button from '../../components/Button/Button'
import axios from 'axios'
import { baseUrl } from '../../constants/api'
import AsyncStorage from '@react-native-async-storage/async-storage'


const Register = ({ navigation}: any) => {

    const insets = useSafeAreaInsets();

    const [userData, setUserData] = useState({
        username: "",
        email: "",
        password: "",
        confirmPassword: "",
    })

    const [errors, setErrors] = useState({
        username: "",
        email: "",
        password: "",
        confirmPassword: "",
    })

    const handleChange = (field: string) => (text: string) => {
        setUserData({ ...userData, [field]: text });
        setErrors({ ...errors, [field]: "" });
        setValid(false)
    };

    const [valid, setValid] = useState(false)


    const handleRegister = async () => {
        const { email, password } = userData
        try {
            const response: any = await axios.post(`${baseUrl}/users/signup`, { email, password })
            await AsyncStorage.setItem('token', response.data.data.token)
        } catch (error: any) {
            console.log(error.response.data.message);
        }
    }
    const onSubmit = () => {
        const { username, email, password, confirmPassword } = userData
        const newErrors = {
            username: "",
            email: "",
            password: "",
            confirmPassword: "",
        }

        if (!isEmailValid(email)) {
            newErrors.email = "Invalid email address";
        }

        if (!isNotNull(username)) {
            newErrors.username = "username cannot be empty"
        }

        if (!isPasswordValid(password)) {
            newErrors.password = "Password cannot be empty and must have at least one alphabet, one digit, and one special character. Length should be at least 8 characters"
        }
        if (!isPasswordMismatch(password, confirmPassword)) {
            newErrors.confirmPassword = "Password mismatch"
        }

        setErrors(newErrors)

        if (Object.values(newErrors).every(error => error === "")) {
            setValid(true)
            handleRegister()
        }
    }

    const nameInput = useRef<TextInput>(null)
    const emailInput = useRef<TextInput>(null);
    const passwordInput = useRef<TextInput>(null)
    const confirmPasswordInput = useRef<TextInput>(null)

    return (
        <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
            <View style={[styles.login_container, { paddingTop: insets.top }]}>
                <StatusBar backgroundColor={COLORS.white} barStyle={'dark-content'} />
                <Text style={styles.heading}>Hello! Register to get started</Text>
                <View>
                    <TextInput style={styles.input} placeholder='Username'
                        onChangeText={handleChange('username')}
                        value={userData.username}
                        returnKeyType='next'
                        ref={nameInput}
                        onSubmitEditing={() => emailInput.current?.focus()}
                    />
                    <Text style={styles.error_msg}>{errors.username}</Text>
                </View>
                <View>
                    <TextInput style={styles.input} placeholder='Email'
                        onChangeText={handleChange('email')}
                        value={userData.email}
                        returnKeyType='next'
                        keyboardType='email-address'
                        ref={emailInput}
                        onSubmitEditing={() => passwordInput.current?.focus()}
                    />
                    <Text style={styles.error_msg}>{errors.email}</Text>
                </View>
                <View>
                    <TextInput style={styles.input} placeholder='Password'
                        onChangeText={handleChange('password')}
                        value={userData.password}
                        secureTextEntry
                        returnKeyType='next'
                        ref={passwordInput}
                        onSubmitEditing={() => confirmPasswordInput.current?.focus()}
                    />
                    <Text style={styles.error_msg}>{errors.password}</Text>
                </View>
                <View>
                    <TextInput style={styles.input} placeholder='Confirm Password'
                        onChangeText={handleChange('confirmPassword')}
                        value={userData.confirmPassword}
                        secureTextEntry
                        returnKeyType='done'
                        ref={confirmPasswordInput}
                        onSubmitEditing={() => onSubmit()}
                    />
                    <Text style={styles.error_msg}>{errors.confirmPassword}</Text>
                </View>
                <Text style={styles.forgot_text}>Forgot Password?</Text>
                <Pressable onPress={() => onSubmit()}>
                    <Button label='Register' type='primary' valid={valid} />
                </Pressable>
                <Text style={styles.login_with}>Or Register with</Text>
                <View style={styles.social_icons}>
                    <View style={styles.icon}>
                        <Image source={IMAGES.FACEBOOK_LOGO} />
                    </View>
                    <View style={styles.icon}>
                        <Image source={IMAGES.GOOGLE_LOGO} />
                    </View>
                    <View style={styles.icon}>
                        <Image source={IMAGES.APPLE_LOGO} />
                    </View>
                </View>
                <Text style={styles.footer_text}>Already have an account?
                    <Text style={styles.text} onPress={() => navigation.navigate("Login")}> Login Now</Text>
                </Text>
            </View>
        </TouchableWithoutFeedback>
    )
}

export default Register