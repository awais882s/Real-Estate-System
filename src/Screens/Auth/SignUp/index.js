import React, { useContext, useState } from 'react'
import { StatusBar, StyleSheet, View, Image, KeyboardAvoidingView, TouchableOpacity, Text } from 'react-native'
import { commonJustify } from '../../../Common/CommonStyle/CommonStyle'
import { TextInput } from 'react-native-paper';
import { Button } from '@rneui/base';
import { AuthContext } from '../../../Contexts/AuthContexts';
import auth from "@react-native-firebase/auth"
import { PaperSelect } from 'react-native-paper-select';
import firestore from '@react-native-firebase/firestore';
import firebase from "@react-native-firebase/app"


const initialState = { name: "", email: "", password: "", phoneNo: "", bloodGroup: "", address: "" }
export default function SignUp({ navigation }) {
    const { setUser, user } = useContext(AuthContext)

    const [state, setState] = useState(initialState)
    const handleChange = (name, value) => {
        setState(s => ({ ...s, [name]: value }))
    }
    const handleRegister = () => {
        const { name, email, password, address, bloodGroup, phoneNo } = state;
        // if (name.length < 3) {
        //     alert("Please enter a valid name")
        //     return;
        // }
        // if (!email) {
        //     alert("Please enter ")
        //     return;
        // }
        // if (password.length < 6) {
        //     alert("Please enter a valid password")
        //     return;
        // }
        // if (address.length < 10) {
        //     alert("Please enter a valid address")
        //     return;
        // }
        // if (!bloodGroup) {
        //     alert("Please enter a valid group")
        //     return;
        // }
        // if (phoneNo.length < 8) {
        //     alert("Please enter a valid phone number")
        //     return;
        // }
        auth().createUserWithEmailAndPassword(email, password)
            .then((userCredential) => {
                const user = userCredential.user;
                setUser(user)
                console.log(user);
                state.uid = user.uid;
                state.dateCreated = firebase.firestore.FieldValue.serverTimestamp();
                state.email = user.email;
                console.log(state);
                firestore().collection('users').doc(user.uid).set(state)
                    .then(() => {
                        console.log('User added!');
                    });
            })
            .catch(error => {
                if (error.code === 'auth/email-already-in-use') {
                    alert("User already exist")
                }

                if (error.code === 'auth/invalid-email') {
                    alert("Email invalid")
                }
            })
        console.log(state);
    }

    return (
        <KeyboardAvoidingView>
            <View>
                <StatusBar backgroundColor="#FF2156" barStyle="light-content" />
                <View style={styles.main}>
                    <View style={[commonJustify.rowCenter]}>
                        <Image style={styles.image} source={require("../../../../assets/Images/login-logo.png")} />
                    </View>
                    <View>
                        <View style={{ marginVertical: 4 }}>
                            <TextInput
                                label="Enter your name"
                                mode="outlined"
                                onChangeText={val => handleChange("name", val)}
                                outlineColor='#FF2156'
                                activeUnderlineColor='red'
                                activeOutlineColor='red'
                                keyboardType="default"
                            />
                        </View>
                        <View style={{ marginVertical: 4 }}>
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
                                onChangeText={val => handleChange("password", val)}
                                mode="outlined"
                                outlineColor='#FF2156'
                                activeUnderlineColor='red'
                                activeOutlineColor='red'
                                secureTextEntry
                            />
                        </View>
                        <View style={{ marginVertical: 4 }}>

                            <TextInput
                                label="Enter your Mobile"
                                mode="outlined"
                                outlineColor='#FF2156'
                                activeUnderlineColor='red'
                                onChangeText={val => handleChange("phoneNo", val)}
                                activeOutlineColor='red'
                                keyboardType="number-pad"
                            />
                        </View>
                        <View style={{ marginVertical: 4 }}>
                            <TextInput
                                label="Enter your Blood Group e.g A+ , B+"
                                mode="outlined"
                                outlineColor='#FF2156'
                                activeUnderlineColor='red'
                                activeOutlineColor='red'
                                onChangeText={val => handleChange("bloodGroup", val)}
                                keyboardType="default"
                            />
                        </View>
                        <View style={{ marginVertical: 4 }}>
                            <TextInput
                                label="Enter your Address"
                                mode="outlined"
                                outlineColor='#FF2156'
                                activeUnderlineColor='red'
                                onChangeText={val => handleChange("address", val)}
                                activeOutlineColor='red'
                                keyboardType="default"
                            />
                        </View>
                        <View>
                            <Button title="SIGN UP" onPress={handleRegister} buttonStyle={{ backgroundColor: "#FF2156" }} radius="15" containerStyle={{ marginTop: 10 }} />
                        </View>
                        <View style={commonJustify.rowCenter}>
                            <TouchableOpacity onPress={() => navigation.navigate("Login")}>

                                <Text style={styles.login}>
                                    Login
                                </Text>
                            </TouchableOpacity>

                        </View>
                    </View>
                </View>
            </View >
        </KeyboardAvoidingView >
    )
}
const styles = StyleSheet.create({
    main: {
        height: "95%",
        width: "100%",
        justifyContent: "center",
        padding: 15,
    },
    image: {
        height: 160,
        width: 200,
        resizeMode: "contain",
    },
    login: {
        fontSize: 14,
        color: "#FF2156",
        marginTop: 6,
        fontFamily: "sans-serif"
    }
})