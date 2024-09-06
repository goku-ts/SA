import React from 'react'
import { Image, StyleSheet, Text, View } from 'react-native'
import { fire } from '../constants/images'
import { COLORS } from '../constants/theme'
import AppText from './AppText'

export const Header = () => {
    return (
        <View style={{
            flexDirection: "row",
            alignItems: "center",
            marginBottom: 30
        }}>
            {/* <Image source={cross} style={{
                width: 20,
                height: 20,
                marginRight: 3,
                tintColor: "orange",
            }} /> */}
            <Image source={fire} style={{
                width: 25,
                height: 25,
                marginRight: 3,
                tintColor: COLORS.orange6,
            }} />
            <AppText>
                <Text style={{
                    // fontWeight: "bold",
                    fontSize: 17
                }}>Spirit Army</Text>
            </AppText>
        </View>
    )
}


const styles = StyleSheet.create({})