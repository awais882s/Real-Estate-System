import React, { useEffect } from 'react'
import { Image, StyleSheet, View, Text, TouchableOpacity } from 'react-native'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Home from "../Screens/Frontend/Home";
import Search from '../Screens/Frontend/Search';
import Profile from '../Screens/Frontend/Profile';
import DonationRequest from '../Screens/Frontend/DonationRequestScreen';
import Feather from "react-native-vector-icons/Feather";
import AntDesign from "react-native-vector-icons/AntDesign";
import colorValue from '../Common/CommonStyle/ColorValue';
import { Badge } from "@rneui/themed";
import { commonJustify } from '../Common/CommonStyle/CommonStyle';
import { useNavigation } from '@react-navigation/native';
const Tab = createBottomTabNavigator();
const BottomNavigation = () => {
    const navigation = useNavigation()
    return (
        <Tab.Navigator
            initialRouteName='Home'
            barStyle={{
                backgroundColor: colorValue.white
            }}
            screenOptions={{
                // tabBarShowLabel: false,
                tabBarActiveTintColor: "#fff",
                tabBarInactiveTintColor: "#000000",
                tabBarActiveBackgroundColor: "#3369e7",
                tabBarLabelStyle: {
                    fontSize: 13,
                    // fontStyle: "italic"
                },
            }}
        >
            <Tab.Screen name="Home" component={Home}
                options={{
                    tabBarIcon: ({ color }) => (
                        <AntDesign name="home" color={color} size={28}
                        />
                    ),
                    tabBarActiveBackgroundColor: "#3369e7",
                    headerTitle: "",
                    headerLeft: () => (
                        <View style={{ marginHorizontal: 10 }}>
                            <Image
                                resizeMode="contain"
                                style={{ width: 25, height: 25 }}
                                source={require('../../assets/Images/menu.png')}
                            />
                        </View>
                    ),
                    headerRight: () => (
                        <TouchableOpacity onPress={() => navigation.navigate("NotificationScreen")}>
                            <View style={{ marginHorizontal: 10 }}>
                                <Badge value="50" status="error" />
                                <Feather name="bell" color="black" size={28}
                                />
                            </View>
                        </TouchableOpacity>
                    )
                }}
            />
            <Tab.Screen name="Search" component={Search}
                options={{
                    tabBarIcon: ({ color }) => (
                        <AntDesign name="search1" color={color} size={28} />
                    ),
                    headerTitle: "",
                    headerLeft: () => (
                        <View style={[commonJustify.rowSpaceEvenly, { marginHorizontal: 10 }]}>
                            <Image
                                resizeMode="contain"
                                style={{ width: 25, height: 25 }}
                                source={require('../../assets/Images/menu.png')}
                            />
                            <Text style={styles.donation}>Find Agent</Text>
                        </View>
                    ),
                    headerRight: () => (
                        <View style={{ marginHorizontal: 10 }}>
                            <Badge value="99+" status="error" />
                            <Feather name="bell" color="black" size={28}
                            />
                        </View>
                    )
                }}
            />
            <Tab.Screen name="Requests" component={DonationRequest}
                options={{
                    tabBarIcon: ({ color }) => (
                        <AntDesign name="rightcircleo" color={color} size={24} />
                    ),
                    headerTitle: "",
                    headerLeft: () => (
                        <View style={[commonJustify.rowSpaceEvenly, { marginHorizontal: 10 }]}>
                            <Image
                                resizeMode="contain"
                                style={{ width: 25, height: 25 }}
                                source={require('../../assets/Images/menu.png')}
                            />
                            <Text style={styles.donation}>Requests</Text>
                        </View>
                    ),
                    headerRight: () => (
                        <View style={{ marginHorizontal: 10 }}>
                            <Badge value="99+" status="error" />
                            <Feather name="bell" color="black" size={25}
                            />
                        </View>
                    )
                }}
            />
            <Tab.Screen name="Profile" component={Profile}
                options={{
                    tabBarIcon: ({ color }) => (
                        <AntDesign name="user" color={color} size={24} />
                    ),
                    headerTitle: "",
                    headerLeft: () => (
                        <View style={[commonJustify.rowSpaceEvenly, { marginHorizontal: 10 }]}>
                            <Image
                                resizeMode="contain"
                                style={{ width: 25, height: 25 }}
                                source={require('../../assets/Images/menu.png')}
                            />
                            <Text style={styles.donation}>Profile</Text>
                        </View>
                    ),
                    headerRight: () => (
                        <View style={{ marginHorizontal: 10 }}>
                            <Feather name="edit" color="black" size={25}
                            />
                        </View>
                    )
                }}
            />
        </Tab.Navigator>
    )
}
export default BottomNavigation
const styles = StyleSheet.create({
    donation: {
        fontSize: 18,
        fontWeight: "bold",
        color: "black",
        marginLeft: 10,
    }
})             