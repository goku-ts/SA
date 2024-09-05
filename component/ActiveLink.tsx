import { Link } from 'expo-router'
import React from 'react'
import { Pressable, StyleSheet, Text, View } from 'react-native'
import { COLORS } from '../constants/theme'
import AppText from './AppText'

export const ActiveLink = ({ href, name, icon }:
    { href: string, name: string, icon: any }) => {
    return (
        <Link href={href} style={{ marginRight: 5 }} asChild>
            <Pressable style={{
                flexDirection: "row",
                backgroundColor: COLORS.gray2,
                height: 30,
                justifyContent: "center",
                alignItems: "center",
                borderRadius: 5,

                borderColor: COLORS.gray4,
                marginRight: 10
            }}>
                {/* <Image source={icon} style={{
                    height: 13,
                    width: 13,
                    marginRight: 5,
                    marginLeft: 5,
                    tintColor: COLORS.gray5
                }} /> */}

                <AppText>
                    <Text style={{
                        fontSize: 13,
                        marginRight: 5,
                        marginLeft: 5
                    }}>
                        {name}
                    </Text>
                </AppText>
                <View style={{
                    height: 8,
                    width: 8,
                    backgroundColor: COLORS.green5,
                    position: "absolute",
                    top: -3,
                    right: -3,
                    borderRadius: 4
                }} />
            </Pressable>
        </Link>
    )
}

const styles = StyleSheet.create({})