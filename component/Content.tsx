import React from 'react'
import { StyleSheet, View } from 'react-native'
import Markdown from 'react-native-markdown-display'

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
        fontSize: 16,
        lineHeight: 22
    }
})