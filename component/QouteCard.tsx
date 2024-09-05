import React from 'react';
import { Image, StyleSheet, Text, useWindowDimensions, View } from 'react-native';
import { quote } from '../constants/images';
import { COLORS } from '../constants/theme';
import AppText from './AppText';

export const QouteCard = ({ text, reference, h_padding }: { h_padding?: number, text: string, reference: string }) => {

    const { width } = useWindowDimensions();
    return (
        <View style={{
            backgroundColor: COLORS.gray,
            // height: 150,
            width: width - 30,
            // borderWidth: 1,
            borderRadius: 10,
            borderColor: COLORS.gray3,
            padding: 10,
            marginTop: 20,
            paddingHorizontal: h_padding
        }}>

            <Image source={quote} style={{
                height: 20,
                width: 20,
                tintColor: COLORS.gray5,
                alignSelf: "flex-start",
                marginBottom: 10
            }} />
            <View style={{ alignItems: "center" }}>
                <AppText>
                    <Text style={{
                        fontFamily: "Montserrat-Regular",
                        fontStyle: "italic",
                        textAlign: "left"
                    }}>{text}</Text>
                </AppText>
            </View>
            <View style={{ alignSelf: "flex-end", marginBottom: 5 }}>
                <AppText>
                    <Text style={{
                        fontStyle: "italic",
                        textAlign: "left"
                    }}>{reference}</Text>
                </AppText>
            </View>
            <Image source={quote} style={{
                height: 20,
                width: 20,
                tintColor: COLORS.gray5,
                alignSelf: "flex-end",
            }} />

        </View>
    )
}

const styles = StyleSheet.create({})