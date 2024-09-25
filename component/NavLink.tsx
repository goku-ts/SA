import { Link } from 'expo-router'
import React from 'react'
import { Pressable, StyleSheet, Text } from 'react-native'
import AppText from './AppText'

export const NavLink = ({ href, name }: { href: string, name: string }) => {
    return (
        <Pressable style={{
            marginRight: 10
        }}>
            <Link href={href} style={{}}>
                <AppText>
                    <Text style={{ fontSize: 15 }}>
                        {name}
                    </Text>
                </AppText>
            </Link>
        </Pressable>
    )
}

const styles = StyleSheet.create({})