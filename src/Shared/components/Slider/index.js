import React from 'react';
import { StyleSheet, View } from 'react-native';
import SwiperWithRenderItems from './SwiperWithRender';
export const Slider = () => {
    return (
        <View style={styles.container}>
            <View style={styles.container}>
                <SwiperWithRenderItems />
            </View>
        </View>
    );
};
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white',
    },
});
