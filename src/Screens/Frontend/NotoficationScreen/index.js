import React from 'react'
import { StyleSheet } from 'react-native'
import { ListItem, Button } from "@rneui/themed";
import AntDesign from "react-native-vector-icons/AntDesign";
import colorValue from '../../../Common/CommonStyle/ColorValue';

export default function NotificationScreen() {
    return (
        <ListItem.Swipeable
            leftContent={(reset) => (
                <Button
                    title="Info"
                    onPress={() => reset()}
                    icon={{ name: 'info', color: 'white' }}
                    buttonStyle={{ minHeight: '100%' }}
                />
            )}
            rightContent={(reset) => (
                <Button
                    title="Delete"
                    onPress={() => reset()}
                    icon={{ name: 'delete', color: 'white' }}
                    buttonStyle={{ minHeight: '100%', backgroundColor: 'red' }}
                />
            )}
        >
            <AntDesign size={20} color={colorValue.primary} name="notification" />
            <ListItem.Content>
                <ListItem.Title style={styles.person}>Awais Need To Buy House</ListItem.Title>
            </ListItem.Content>
            <ListItem.Chevron />
        </ListItem.Swipeable>
    )
}


const styles = StyleSheet.create({
    person: {
        fontWeight: "bold",
    }

})