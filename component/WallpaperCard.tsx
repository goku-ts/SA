import React from 'react';
import { Image, StyleSheet, useWindowDimensions, View } from 'react-native';
import { COLORS } from '../constants/theme';


export default function WallpaperCard({
    url,
    size,
    ImageSize,
    hPadding,
    desktop,
    image,
    data
}: {
    url: string,
    size?: number,
    ImageSize?: number,
    hPadding?: number,
    desktop?: boolean,
    data?: any
    image?: any
}) {

    const { width, height } = useWindowDimensions();


    return (
        <View>
            <View style={{
                alignItems: "center",
                justifyContent: "center",
                // flexDirection: desktop ? "column" : "column",
                // backgroundColor: "red",
                //height: desktop ? 150 : null,
                width: desktop ? 300 : size ? size : width / 2 - 30,
                // borderWidth: 1,
                borderRadius: 10,
                padding: 5,
                marginTop: 20,
                paddingHorizontal: hPadding,
                marginRight: 10
            }}>
                <Image source={image} style={{
                    resizeMode: "cover",
                    width: desktop ? 300 : ImageSize ? ImageSize : width / 2 - 40,
                    height: desktop ? 500 : height / 3,
                    borderRadius: 3
                }} />
            </View>
        </View>

    )
}

const styles = StyleSheet.create({
    author: {
        height: 20,
        alignItems: "center",
        justifyContent: "center",
        padding: 5,
        backgroundColor: COLORS.orange1,
        marginBottom: 5,
        borderRadius: 5
    }
})