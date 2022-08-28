import React, { useRef, useEffect, } from 'react';
import { Animated, ImageBackground } from 'react-native';
import { useNavigation } from '@react-navigation/native';
const FadeInView = (props) => {
    const fadeAnim = useRef(new Animated.Value(0)).current  // Initial value for opacity: 
    const navigation = useNavigation();
    0
    useEffect(() => {
        Animated.timing(
            fadeAnim,
            {
                toValue: 1,
                duration: 5000,
                useNativeDriver: true,
            }
        ).start();
    }, [fadeAnim])
    useEffect(() => {
        setTimeout(() => {
            navigation.navigate("OnBoard")
        }, 4000);
    })
    return (
        <Animated.View
            style={{
                ...props.style,
                opacity: fadeAnim,
            }}
        >
            {props.children}
        </Animated.View>
    );
}
export default () => {
    return (
        <FadeInView style={{ height: '100%', width: '100%', backgroundColor: 'powderblue' }}>
            {/* <StatusBar backgroundColor="#DC3434" barStyle="light-content" /> */}
            <ImageBackground style={{ height: "100%", width: "100%" }} resizeMode="stretch" source={require("../assets/Images/splash.jpg")}>
            </ImageBackground>
        </FadeInView>
    )
}