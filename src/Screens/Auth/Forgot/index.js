import React from 'react'
import { StyleSheet, Text, View, TouchableOpacity, KeyboardAvoidingView, StatusBar, Image, Keyboard, TouchableWithoutFeedback } from 'react-native'
import { TextInput } from 'react-native-paper';
import { Button } from '@rneui/base';
import { commonJustify } from '../../../Common/CommonStyle/CommonStyle'

const Forgot = ({ navigation }) => {
    return (
        <KeyboardAvoidingView>
            <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
                <View style={styles.main}>
                    <StatusBar backgroundColor="#FF2156" barStyle="light-content" />
                    <View style={styles.main}>
                        <View style={[commonJustify.rowCenter]}>
                            <Image style={styles.image} source={require("../../../../assets/Images/login-logo.png")} />
                        </View>
                        <View>
                            <View>
                                <TextInput
                                    label="Enter your email"
                                    mode="outlined"
                                    outlineColor='#FF2156'
                                    activeUnderlineColor='red'
                                    activeOutlineColor='red'
                                    keyboardType="email-address"
                                />
                            </View>
                            <View>
                                <Button title="Forgot Password" buttonStyle={{ backgroundColor: "#FF2156" }} radius="15" containerStyle={{ marginTop: 10 }} />
                            </View>
                        </View>
                        <View>
                            <View style={commonJustify.rowCenter}>
                                <TouchableOpacity onPress={() => { navigation.navigate("Login") }}>
                                    <Text style={styles.forgot}>
                                        Login
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
export default Forgot
const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    main: {
        height: "90%",
        width: "100%",
        padding: 10,
        justifyContent: "center"
    },
    image: {
        height: 200,
        width: 200,
        resizeMode: "contain"
    },
    forgot: {
        fontSize: 16,
        color: "#FF2156",
        marginTop: 6,
    },

})