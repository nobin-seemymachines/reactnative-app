import { View, Text, StatusBar, TextInput, Pressable, Image, Alert, SafeAreaView, TouchableWithoutFeedback, Keyboard } from 'react-native'
import React, { useRef, useState } from 'react'
import COLORS from '../../constants/color';
import IMAGES from '../../constants/image';
import { styles } from './LoginStyle';
import { isEmailValid, isNotNull } from '../../constants/validation';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import axios from 'axios';
import { baseUrl } from '../../constants/api';
import AsyncStorage from '@react-native-async-storage/async-storage';
import Button from '../../components/Button/Button';
import { useDispatch } from 'react-redux';
import { loginRequestAction } from '../../redux/actions/userActions';

const Login = ({ navigation }: any) => {
    const insets = useSafeAreaInsets();
    const [loginData, setLoginData] = useState({
        email: "",
        password: "",
    })

    const [errors, setErrors] = useState({
        email: "",
        password: "",
    });

    const handleChange = (field: string) => (text: string) => {
        setValid(false)
        setLoginData({ ...loginData, [field]: text });
        setErrors({ ...errors, [field]: "" });
    };

    const [valid, setValid] = useState(false)

    const dispatch = useDispatch()
    const handleLogin = () => {
        dispatch(loginRequestAction(loginData))
    }

    const onSubmit = () => {
        const { email, password } = loginData;
        const newErrors = { email: "", password: "" };

        if (!isEmailValid(email)) {
            newErrors.email = "Invalid email address";
        }

        if (!isNotNull(password)) {
            newErrors.password = "Password cannot be empty";
        }

        setErrors(newErrors);
        if (isEmailValid(email) && isNotNull(password)) {
            setValid(true)
            handleLogin()
        }
    }

    const emailInput = useRef<TextInput>(null);
    const passwordInput = useRef<TextInput>(null);

    return (
        <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
            <View style={[styles.login_container, { paddingTop: insets.top }]}>
                <StatusBar backgroundColor={COLORS.white} barStyle={'dark-content'} />
                <Text style={styles.heading}>Welcome back! Glad to see you, Again!</Text>
                <View>
                    <TextInput style={styles.input} placeholder='Enter your email'
                        onChangeText={handleChange('email')}
                        value={loginData.email}
                        keyboardType='email-address'
                        returnKeyType='next'
                        ref={emailInput}
                        onSubmitEditing={() => passwordInput.current?.focus()}

                    />
                    <Text style={styles.error_msg}>{errors.email}</Text>
                </View>
                <View>
                    <TextInput style={styles.input} placeholder='Enter your password'
                        onChangeText={handleChange('password')}
                        value={loginData.password}
                        returnKeyType='done'
                        secureTextEntry
                        ref={passwordInput}
                        onSubmitEditing={() => onSubmit()}
                    />
                    <Text style={styles.error_msg}>{errors.password}</Text>
                </View>
                <Text style={styles.forgot_text}>Forgot Password?</Text>
                <Pressable onPress={() => onSubmit()}>
                    <Button label='Login' type='primary' valid={valid} />
                </Pressable>
                <Text style={styles.login_with}>Or Login with</Text>
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
                <Text style={styles.footer_text}>Don't have an account?
                    <Text style={styles.text} onPress={() => navigation.navigate('Register')}> Register Now</Text>
                </Text>
            </View>
        </TouchableWithoutFeedback>
    )
}

export default Login