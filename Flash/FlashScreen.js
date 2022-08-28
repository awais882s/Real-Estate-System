import React, { useRef, useEffect, } from 'react';
import { Animated, ImageBackground, StyleSheet, View } from 'react-native';
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
        }, 400000);
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
        <FadeInView style={styles.main}>
            {/* <StatusBar backgroundColor="#DC3434" barStyle="light-content" /> */}
            <View style={styles.img} >
                <ImageBackground style={{ height: "60%" }} source={require("../assets/Images/homepic.jpg")}>
                </ImageBackground>
            </View>
        </FadeInView>
    )
}

const styles = StyleSheet.create({
    img: {
        justifyContent: 'center',
        // flex: 1,
        height: "100%"
    },
    main: {
        height: '100%',
        width: '100%',
        backgroundColor: 'white',
        flex: 1,
        justifyContent: "center"
    }
})             