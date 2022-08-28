import React, { useState } from 'react'
import { StatusBar, StyleSheet, Image, View, TouchableOpacity, Text, KeyboardAvoidingView, Keyboard, TouchableWithoutFeedback } from 'react-native'
import { commonJustify } from '../../../Common/CommonStyle/CommonStyle'
import { TextInput } from 'react-native-paper';
import { Button } from '@rneui/base';
import auth from "@react-native-firebase/auth"

const initialState = { email: "", password: "" }
export default function Login({ navigation }) {
    const [isPasswordShow, setIsPasswordShow] = useState(false)
    const [state, setState] = useState(initialState)
    const handleChange = (name, value) => {
        setState(s => ({ ...s, [name]: value }))
    }
    const handleSubmit = () => {
        let { email, password } = state;

        if (!email) {
            alert("Please enter your email")
            return
        }
        if (password.length < 6) {
            alert("Password must be 6 chars")
            return
        }

        auth()
            .signInWithEmailAndPassword(email, password)
            .then((userCredential) => {
                const user = userCredential.user;
                console.log(user);
                navigation.navigate("BottomNavigation")
            })
            .catch(error => {
                if (error.code === 'auth/email-already-in-use') {
                    alert("User already exist")
                }
                
                if (error.code === 'auth/invalid-email') {
                    alert("Email invalid")
                }
            })
    }

    return (
        <KeyboardAvoidingView>
            <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
                <View>
                    <StatusBar backgroundColor="#FF2156" barStyle="light-content" />
                    <View style={styles.main}>
                        <View style={[commonJustify.rowCenter, { height: "40%" }]}>
                            <Image style={styles.image} source={require("../../../../assets/Images/login-logo.png")} />
                        </View>
                        <View>
                            <View>
                                <TextInput
                                    label="Enter your email"
                                    mode="outlined"
                                    onChangeText={val => handleChange("email", val)}
                                    outlineColor='#FF2156'
                                    activeUnderlineColor='red'
                                    activeOutlineColor='red'
                                    keyboardType="email-address"
                                />
                            </View>
                            <View style={{ marginVertical: 4 }}>
                                <TextInput
                                    label="Enter your password"
                                    mode="outlined"
                                    outlineColor='#FF2156'
                                    activeUnderlineColor='red'
                                    onChangeText={val => handleChange("password", val)}
                                    activeOutlineColor='red'
                                    secureTextEntry={isPasswordShow ? false : true}
                                    right={<TextInput.Icon name={isPasswordShow ? "eye" : "eye-off"}
                                        onPress={() => { setIsPasswordShow(!isPasswordShow) }}
                                    />}
                                />
                            </View>
                            <View>
                                <Button title="LOG IN" buttonStyle={{ backgroundColor: "#FF2156" }} radius="15" containerStyle={{ marginTop: 10 }} onPress={() => { handleSubmit() }} />
                            </View>
                            <View style={commonJustify.rowCenter}>
                                <TouchableOpacity onPress={() => { navigation.navigate("Forgot") }}>
                                    <Text style={styles.forget}>
                                        Forgot Password?
                                    </Text>
                                </TouchableOpacity>
                            </View>
                        </View>
                        <View style={{ position: "absolute", bottom: 30, width: "100%" }}>
                            <View style={commonJustify.rowCenter}>
                                <TouchableOpacity style={{ marginRight: 6 }}>
                                    <Text style={{ fontsize: 10 }}>Don,t have an account?</Text>
                                </TouchableOpacity>
                                <TouchableOpacity onPress={() => { navigation.navigate("SignUp") }}>
                                    <Text style={styles.register}>
                                        Register Now
                                    </Text>
                                </TouchableOpacity>
                            </View>
                        </View>
                    </View>
                </View >
            </TouchableWithoutFeedback>
        </KeyboardAvoidingView>
    )
}
const styles = StyleSheet.create({
    main: {
        height: "100%",
        width: "100%",
        // justifyContent: "center",
        padding: 10,
    },
    image: {
        height: 330,
        width: 200,
        resizeMode: "contain"
    },
    forget: {
        fontSize: 16,
        color: "#FF2156",
        marginTop: 6,
    },
    register: {
        fontSize: 15,
        color: "#FF2156",
    }

})