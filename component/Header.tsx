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
            marginBottom: 10,
            marginLeft: -5
        }}>
            <Image source={fire} style={{
                width: 25,
                height: 25,
                marginRight: 3,
                tintColor: COLORS.orange6,
            }} />
            <View>
                <AppText>
                    <Text style={{
                        // fontWeight: "bold",
                        fontSize: 17
                    }}>Spirit Army</Text>
                </AppText>

                <Text style={{
                    fontSize: 9,
                    marginTop: -2,
                    fontFamily: "Montserrat-SemiBold",
                }}>Intercessory Network</Text>

            </View>
        </View>
    )
}


const styles = StyleSheet.create({})