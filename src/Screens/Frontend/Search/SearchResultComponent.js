import React from 'react'
import { StyleSheet, Text, View, Image } from 'react-native'
import colorValue from '../../../Common/CommonStyle/ColorValue'
import { Avatar } from "@rneui/themed";
import { commonJustify } from '../../../Common/CommonStyle/CommonStyle';

export default function SearchResultComponent({ item }) {
  return (
    <View style={[styles.main, commonJustify.rowSpaceBetween]}>
      <Avatar
        size={64}
        rounded
        title={item.name[0]}
        containerStyle={{ backgroundColor: '#6733b9' }}
        activeOpacity={0.7}
      />
      <View style={commonJustify.center}>
        <Text style={styles.name}>{item.name}</Text>
        <Text style={styles.location}>{item.location}</Text>
      </View>
      <View style={commonJustify.center}>
        <Image style={{ width: 50, height: 50, resizeMode: "contain" }} source={require("../../../../assets/Images/BloodGroup.png")} />
      </View>
    </View>
  )
}


const styles = StyleSheet.create({
  main: {
    backgroundColor: colorValue.white,
    marginVertical: 10,
    borderRadius: 5,
    width: "90%",
    marginHorizontal: "5%"
  },
  name: {
    fontSize: 16,
    fontWeight: "bold",
    color: "black"
  },
  location: {
    fontSize: 13,
    color: "#7E7E7E",

  }
})