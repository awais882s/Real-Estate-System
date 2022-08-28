import React, { useContext, useState } from 'react'
import { StatusBar, StyleSheet, View, Image, KeyboardAvoidingView, TouchableOpacity, Text, Keyboard } from 'react-native'
import { commonJustify } from '../../../Common/CommonStyle/CommonStyle'
import { TextInput } from 'react-native-paper';
import { Button } from '@rneui/base';
import { AuthContext } from '../../../Contexts/AuthContexts';
import auth from "@react-native-firebase/auth"
import { PaperSelect } from 'react-native-paper-select';
import firestore from '@react-native-firebase/firestore';
import firebase from "@react-native-firebase/app"
import { TouchableWithoutFeedback } from 'react-native-gesture-handler';


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
            <TouchableWithoutFeedback onPress={Keyboard.dismiss}>

                <View>
                    <StatusBar backgroundColor="#3369e7" barStyle="light-content" />
                    <View style={styles.main}>
                        <View style={[commonJustify.rowCenter]}>
                            <Image style={styles.image} source={require("../../../../assets/Images/homepic.jpg")} />
                        </View>
                        <View>
                            <View style={{ marginVertical: 4 }}>
                                <TextInput
                                    label="Enter Your Full Name"
                                    mode="outlined"
                                    onChangeText={val => handleChange("name", val)}
                                    outlineColor='#3369e7'
                                    activeUnderlineColor='#00aeef'
                                    activeOutlineColor='#00aeef'
                                    keyboardType="default"
                                />
                            </View>
                            <View style={{ marginVertical: 4 }}>
                                <TextInput
                                    label="Enter your Email"
                                    mode="outlined"
                                    onChangeText={val => handleChange("email", val)}
                                    outlineColor='#3369e7'
                                    activeUnderlineColor='#00aeef'
                                    activeOutlineColor='#00aeef'
                                    keyboardType="email-address"
                                />
                            </View>
                            <View style={{ marginVertical: 4 }}>
                                <TextInput
                                    label="Enter your Password"
                                    onChangeText={val => handleChange("password", val)}
                                    mode="outlined"
                                    outlineColor='#3369e7'
                                    activeUnderlineColor='#00aeef'
                                    activeOutlineColor='#00aeef'
                                    secureTextEntry
                                />
                            </View>
                            <View style={{ marginVertical: 4 }}>

                                <TextInput
                                    label="Enter your Mobile"
                                    mode="outlined"
                                    outlineColor='#3369e7'
                                    activeUnderlineColor='#00aeef'
                                    onChangeText={val => handleChange("phoneNo", val)}
                                    activeOutlineColor='#00aeef'
                                    keyboardType="number-pad"
                                />
                            </View>
                            <View style={{ marginVertical: 4 }}>
                                <TextInput
                                    label="Enter Your Username"
                                    mode="outlined"
                                    outlineColor='#3369e7'
                                    activeUnderlineColor='#00aeef'
                                    activeOutlineColor='#00aeef'
                                    onChangeText={val => handleChange("bloodGroup", val)}
                                    keyboardType="default"
                                />
                            </View>
                            <View style={{ marginVertical: 4 }}>
                                <TextInput
                                    label="Enter your Address"
                                    mode="outlined"
                                    outlineColor='#3369e7'
                                    activeUnderlineColor='#00aeef'
                                    onChangeText={val => handleChange("address", val)}
                                    activeOutlineColor='#00aeef'
                                    keyboardType="default"
                                />
                            </View>
                            <View>
                                <Button title="Register Account" onPress={handleRegister} buttonStyle={{ backgroundColor: "#3369e7" }} radius="15" containerStyle={{ marginTop: 10 }} />
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
            </TouchableWithoutFeedback>
        </KeyboardAvoidingView >
    )
}
const styles = StyleSheet.create({
    main: {
        height: "100%",
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
        color: "#3369e7",
        marginTop: 10,
    }
})