import React from 'react'
import { Dimensions, FlatList, StyleSheet, View } from 'react-native'
import { SearchBar } from "@rneui/themed";
import colorValue from '../../../Common/CommonStyle/ColorValue';
import AntDesign from "react-native-vector-icons/AntDesign";
import { commonJustify } from '../../../Common/CommonStyle/CommonStyle';
import { SearchData } from './Data';
import SearchResultComponent from './SearchResultComponent';
const windowWidth = Dimensions.get('window').width;
export default function Search() {
    return (
        <View>  
            <View style={[commonJustify.rowSpaceEvenly, { marginTop: 20 }]}>
                <SearchBar containerStyle={{
                    backgroundColor: colorValue.white,
                    borderTopWidth: 0,
                    borderBottomWidth: 0,
                    width: windowWidth * 0.8,
                }}
                    inputContainerStyle={{
                        backgroundColor: colorValue.white
                    }}
                />
                <View style={{ backgroundColor: colorValue.primary, width: 45, padding: 5 }}>
                    <AntDesign color={colorValue.white} name="filter" size={30}
                    />
                </View>
            </View>
            <FlatList
                data={SearchData}
                renderItem={({ item }) => <SearchResultComponent item={item} />}
            />
        </View >
    )
}
const styles = StyleSheet.create({

})