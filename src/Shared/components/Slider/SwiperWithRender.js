import React from 'react';
import { Dimensions, Image, StyleSheet } from 'react-native';
import SwiperFlatList from 'react-native-swiper-flatlist';
import { img1, img2, img3, img4, img5, img6 } from '../../../../assets/Slider';
import colorValue from '../../../Common/CommonStyle/ColorValue';
import { CustomPagination } from './CustomPagination';
const { width, height } = Dimensions.get('window');
const newImage = [img1, img2, img3, img4, img5, img6];
const image = index => ({ image: newImage[index % newImage.length] });
const items = Array.from(Array(6)).map((_, index) => image(index));
export default function SwiperWithRender() {
    return (
        <SwiperFlatList
            autoplay
            autoplayDelay={6}
            paginationStyleItem={{ width: 10, height: 10 }}
            paginationActiveColor={colorValue.primary}
            paginationDefaultColor="black"
            paginationStyleItemInactive={{ borderWidth: 2, borderColor: "#FF2156" }}
            paginationStyle={{ height: 10, width: 10 }}
            index={0}
            autoplayLoop
            // autoplayInvertDirection
            data={items}
            renderItem={({ item }) => <Image style={styles.image} source={item.image} />}
            showPagination
            PaginationComponent={CustomPagination}
        />
    );
};
const styles = StyleSheet.create({
    image: {
        height: height * 0.3,
        width,
    },
});
