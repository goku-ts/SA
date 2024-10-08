import React from 'react'
import { StyleSheet, View } from 'react-native'
import Markdown from 'react-native-markdown-display'
import { COLORS } from '../constants/theme'

export default function Content({ children }: { children: any }) {
    return (
        <View>
            <Markdown style={markdown}>
                {children}
            </Markdown>
        </View>
    )
}

const markdown = StyleSheet.create({
    body: {
        fontFamily: "Montserrat-Regular",
        fontSize: 17,
        lineHeight: 22
    },
    heading3: {
        fontFamily: "Montserrat-Regular",
        color: COLORS.gray7,
    }
})