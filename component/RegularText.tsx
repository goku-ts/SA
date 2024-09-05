import React from 'react'
import { StyleSheet, Text } from 'react-native'
import { COLORS } from '../constants/theme'

export default function RegularText({ children }: { children: any }) {
    return (
        <Text style={styles.app_text}>
            {children}
        </Text>
    )
}

const styles = StyleSheet.create({
    app_text: {
        fontFamily: "Montserrat-Regular",
        color: COLORS.gray7,

    }
})