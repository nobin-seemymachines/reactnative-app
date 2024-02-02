import { View, Text, ImageBackground, StatusBar, Image, Pressable } from 'react-native'
import React from 'react'
import IMAGES from '../../constants/image'
import { styles } from './LandingScreenStyle'
import Button from '../../components/Button/Button'

const LandingScreen = ({ navigation }: any) => {
    return (
        <ImageBackground
            source={IMAGES.BG_IMAGE}
            resizeMode="cover"
            style={styles.container}>
            <StatusBar backgroundColor={"transparent"} translucent barStyle={'dark-content'} />
            <View style={styles.element_group}>
                <Image source={IMAGES.BRAND_IMAGE} />
                <Pressable onPress={() => navigation.navigate("Login")}>
                    <Button label='Login' type='primary' valid={false} />
                </Pressable>
                <Pressable onPress={() => navigation.navigate("Register")}>
                    <Button label='Register' type='secondary' valid={false} />
                </Pressable>
                <Text style={styles.text}>Continue as a guest</Text>
            </View>
        </ImageBackground>
    )
}
export default LandingScreen