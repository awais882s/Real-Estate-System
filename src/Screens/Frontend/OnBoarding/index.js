import React, { useContext } from 'react'
import { StyleSheet, View, Image } from 'react-native'
import Onboarding from 'react-native-onboarding-swiper'
import { commonStyle } from '../../../Common/CommonStyle/CommonStyle'
import fontValue from '../../../Common/CommonStyle/FontValue'
import { getMyStringValue, setStringValue } from '../../../Global/AsyncStorage'
import { useNavigation } from '@react-navigation/native'
import { useEffect } from 'react'
import { AuthContext } from '../../../Contexts/AuthContexts'
export default function OnBoard() {
    const { isAuthenticated } = useContext(AuthContext)
    const navigation = useNavigation()
    const onBoardingDone = async () => {
        try {
            await setStringValue("Onboarding", "true")
            if (isAuthenticated == true) {
                await navigation.navigate("BottomNavigation")
            } else if (isAuthenticated == false) {
                await navigation.navigate("Login")
            }

        } catch (err) {
            console.error(err);
        }
    }
    const getData = async () => {
        const stringValue = await getMyStringValue("Onboarding")
        if (stringValue === "true") {
            if (isAuthenticated == true) {
                navigation.navigate("BottomNavigation")
            } else if (isAuthenticated == false) {
                navigation.navigate("Login")
            }
        }
    }
    useEffect(() => {
        getData()
    }, [])
    return (
        <View style={styles.main}>
            <Onboarding
                pages={Array}
                onSkip={() => onBoardingDone()}
                onDone={() => onBoardingDone()}
                titleStyles={commonStyle({ fontSize: 30, fontFamily: fontValue.PoppinsExtraBold }).text}
            />
        </View>
    )
}
const styles = StyleSheet.create({
    main: {
        width: "100%",
        height: "100%",
    },
})
const Array = [
    {
        backgroundColor: "#fff",
        image: <Image source={require("../../../../assets/Images/z4.jpg")} />,
        title: "Find it Tour it Own it.",
        subtitle: "Let’s find a home that’s perfect for you",
    },
    {
        backgroundColor: "#fff",
        image: <Image source={require("../../../../assets/Images/awais.jpg")} />,
        title: "Know the value of your home",
        subtitle: "Search nearby apartments, condos, and homes for rent",
    },
];