import React, { useContext } from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { Avatar, ListItem, Icon } from '@rneui/themed';
import colorValue from '../../../Common/CommonStyle/ColorValue';
import { Button } from 'react-native-paper';
import MaterialIcons from "react-native-vector-icons/MaterialCommunityIcons";
import AntDesign from "react-native-vector-icons/AntDesign";
import auth from "@react-native-firebase/auth"
import { commonJustify } from '../../../Common/CommonStyle/CommonStyle';
import { AuthContext } from '../../../Contexts/AuthContexts';
const Profile = () => {

    const handleLogout = () => {
        auth().signOut();
    }

    const { data } = useContext(AuthContext)
    console.log("data=======>>>>>" + data.name);
    return (
        <View>
            <View>
                <View style={[commonJustify.rowCenter, { marginTop: 20 }]}>
                    <Avatar
                        size={90}
                        rounded
                        icon={{ name: 'user', type: 'font-awesome' }}
                        containerStyle={{ backgroundColor: colorValue.primary }}
                    />
                </View>
                <View>
                    <Text style={[styles.profiletext, commonJustify.textCenter]}>{data.name}</Text>
                </View>
                <View style={[commonJustify.rowCenter, { marginVertical: 15 }]}>
                    <MaterialIcons name="map" size={24} color="black" />
                    <Text style={[styles.locationtext, commonJustify.textCenter]}>
                        Okara , Pakistan
                    </Text>
                </View>
                <View style={[commonJustify.rowSpaceEvenly, { marginVertical: 15 }]}>
                    <Button color='#38AF48' icon="phone-in-talk" mode="outlined" onPress={() => console.log('Call Me')}>
                        Call Me
                    </Button>
                    <Button icon="clipboard-edit-outline" mode="outlined" onPress={() => console.log('Request')} color={colorValue.primary}>
                        Request
                    </Button>
                </View>
                <View style={[commonJustify.rowSpaceEvenly, { marginTop: 15 }]}>
                    <View style={styles.card}>
                        <Text style={styles.common}>Type </Text>
                        <Text style={styles.A}>Buy</Text>
                    </View>
                    <View style={styles.card}>
                        <Text style={styles.common}>Buy</Text>
                        <Text style={styles.A}>05</Text>
                    </View>
                    <View style={styles.card}>
                        <Text style={styles.common}>Home Loans</Text>
                        <Text style={styles.A}>02</Text>
                    </View>
                </View>
                <View style={{ marginVertical: 10 }}>
                    {
                        list.map((item, i) => (
                            <ListItem containerStyle={{ marginTop: 20 }} key={i} bottomDivider>
                                <item.iconName color={colorValue.primary} style={{ fontSize: 23 }} name={item.icon} />
                                <ListItem.Content>
                                    <ListItem.Title>{item.title}</ListItem.Title>
                                </ListItem.Content>
                                <ListItem.Chevron />
                            </ListItem>
                        ))
                    }
                    <ListItem containerStyle={{ marginTop: 20 }} bottomDivider onPress={handleLogout}>
                        <AntDesign color={colorValue.primary} style={{ fontSize: 23 }} name="logout" />
                        <ListItem.Content>
                            <ListItem.Title>Sign Out</ListItem.Title>
                        </ListItem.Content>
                        <ListItem.Chevron />
                    </ListItem>
                </View>
            </View>

        </View>
    )
}
export default Profile
const styles = StyleSheet.create({
    card: {
        backgroundColor: colorValue.white,
        padding: 10,
        borderRadius: 9,
    },
    A: {
        fontSize: 21,
        fontWeight: "bold",
        textAlign: "center",
        color: "black"
    },
    common: {
        color: "black"
    },
    profiletext: {
        fontSize: 16,
        color: "black",
        fontWeight: "bold",
        marginTop:10,
    },
    locationtext: {
        fontSize: 15,
        color: "black",
    }
})

const list = [
    {
        title: 'Available For Buy',
        icon: 'calendar',
        iconName: AntDesign,
    },
    {
        title: 'Invited Friend',
        icon: 'mail',
        iconName: AntDesign,

    },
    {
        title: 'Get Help',
        icon: 'infocirlceo',
        iconName: AntDesign,

    }
]