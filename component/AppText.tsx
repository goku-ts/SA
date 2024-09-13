import React from 'react'
import { StyleSheet, Text } from 'react-native'
import { COLORS } from '../constants/theme'

export default function AppText({ children }: { children: any }) {
    return (
        <Text style={styles.app_text}>
            {children}
        </Text>
    )
}

const styles = StyleSheet.create({
    app_text: {
        fontFamily: "Montserrat-SemiBold",
        color: COLORS.gray7,
        fontSize: 14
    }
})