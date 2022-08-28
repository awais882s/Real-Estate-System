import React from 'react'
import { Dimensions, FlatList, StyleSheet, View, Image, Text } from 'react-native'
import colorValue from '../../../Common/CommonStyle/ColorValue'
import { ItemArray } from './Data'
export const Body = () => {
    return (
        <FlatList
            data={ItemArray}
            numColumns={3}
            renderItem={({ item }) => <Card item={item} />}
        />
    )
}
const Card = ({ item }) => {
    return (
        <View style={styles.card}>
            <View style={styles.subCard}>
                <View style={styles.body}>
                    <Image style={{ width: "60%", height: "60%", resizeMode: "contain" }} source={item.image} />
                    <Text style={styles.font}>
                        {item.title}
                    </Text>

                </View>
            </View>

        </View >
    )
}
const { width, height } = Dimensions.get('window');

const styles = StyleSheet.create({
    card: {
        width: width * 0.333,
        height: 100,
        marginBottom: 10,
    },
    subCard: {
        margin: 10,
        height: 100,
        backgroundColor: colorValue.white,
        borderRadius: 9
    },
    body: {
        alignItems: "center",
        margin: 20,
    },
    font: {
        fontSize: 12,
        fontWeight: "bold",
        fontFamily: "PoppinsBold",
        color: "black"
    }
}) 