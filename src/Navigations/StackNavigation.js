import React, { useContext, useEffect } from 'react'
import { StyleSheet } from 'react-native'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import BottomNavigation from './BottomNavigation';
import OnBoard from '../Screens/Frontend/OnBoarding';
import Login from '../Screens/Auth/Login';
import SignUp from '../Screens/Auth/SignUp';
import Forgot from '../Screens/Auth/Forgot';
import NotificationScreen from '../Screens/Frontend/NotoficationScreen';
import FlashScreen from '../../Flash/FlashScreen';
import { AuthContext } from '../Contexts/AuthContexts';
import { NavigationContainer } from '@react-navigation/native';
const Stack = createNativeStackNavigator();
export default function StackNavigation({ navigation }) {

    const { isAuthenticated } = useContext(AuthContext);
    useEffect(() => {
        console.log(isAuthenticated);
        // if (isAuthenticated === false) {
        //     navigation.navigate("BottomNavigation"); 
        // } else {
        //     console.log("User Signed Out"); 
        // }
    }, [])
    return (
        <NavigationContainer>

            <Stack.Navigator
            >
                <Stack.Screen name="FlashScreen" component={FlashScreen}
                    options={{
                        headerShown: false
                    }}
                />
                <Stack.Screen name="OnBoard" component={OnBoard}
                    options={{
                        headerShown: false
                    }}
                />
                {!isAuthenticated ?
                    <Stack.Group>
                        <Stack.Screen name="Login" component={Login}
                            options={{
                                headerShown: false
                            }}
                        />
                        <Stack.Screen name="SignUp" component={SignUp}
                            options={{
                                headerShown: false
                            }}
                        />
                        <Stack.Screen name="Forgot" component={Forgot}
                            options={{
                                headerShown: false
                            }}
                        />

                    </Stack.Group>
                    :
                    <Stack.Group>
                        <Stack.Screen name="NotificationScreen" component={NotificationScreen}
                            options={{
                                // headerShown: false
                            }}
                        />

                        <Stack.Screen name="BottomNavigation" component={BottomNavigation}
                            options={{
                                headerShown: false
                            }}
                        />
                    </Stack.Group>
                }
            </Stack.Navigator>
        </NavigationContainer>
    )
}