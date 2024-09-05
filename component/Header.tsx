import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import AppText from './AppText'

export const Header = () => {
    return (
        <View style={{
            flexDirection: "row",
            alignItems: "center",
            marginBottom: 30
        }}>
            {/* <Image source={shield} style={{
                width: 30,
                height: 30,
                marginRight: 3,
                tintColor: "black",
            }} /> */}
            <AppText>
                <Text style={{
                    // fontWeight: "bold",
                    fontSize: 15
                }}>Spirit Army</Text>
            </AppText>
        </View>
    )
}


const styles = StyleSheet.create({})