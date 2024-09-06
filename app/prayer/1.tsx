import { useLocalSearchParams } from 'expo-router';
import React from 'react';
import { ScrollView, StyleSheet, useWindowDimensions, View } from 'react-native';
import { ActiveLink } from '../../component/ActiveLink';
import AppText from '../../component/AppText';
import { Header } from '../../component/Header';
import { NavLink } from '../../component/NavLink';
import RegularText from '../../component/RegularText';

import Content from '../../component/Content';
import { COLORS } from '../../constants/theme';
import { PRAYERS } from '../../data/Data';

export default function Details() {


    const { width, height } = useWindowDimensions();
    const params = useLocalSearchParams();

    const { id } = params
    let post = parseInt(id as string)

    const isMobile = width < 600
    const bigScreen = width > 1000
    const NavBar = () => {


        return (
            <View style={{
                flexDirection: "row",
                alignItems: "center",
                marginTop: 10,
                marginBottom: 30
            }}>
                <NavLink href='/' name="Home" />
                <ActiveLink href='../prayer' name='Prayer' />
                {/* <NavLink href='../wallpapers' name='Wallpapers' />
                <NavLink href='../ebooks' name='e-Books' /> */}
            </View>
        )
    }

    return (
        <View style={[styles.container, {
            paddingHorizontal: bigScreen ? width / 5 : isMobile ? 10 : width / 20
        }]}>
            <ScrollView showsVerticalScrollIndicator={false}>

                <View style={styles.nav_area}>
                    <Header />
                    <NavBar />
                </View>


                <View style={styles.postContainer}>


                    <View style={{
                        marginTop: 10
                    }}>
                        <AppText>
                            {PRAYERS[post - 1]?.title}
                        </AppText>
                    </View>

                    <View style={{
                        marginTop: 10,
                        flexDirection: "row",
                    }}>
                        <View style={styles.author}>
                            <RegularText>
                                {PRAYERS[post - 1]?.author}
                            </RegularText>
                        </View>
                        <View style={[styles.author, {
                            marginLeft: 20
                        }]}>
                            <RegularText>
                                {PRAYERS[post - 1]?.date}
                            </RegularText>
                        </View>

                    </View>

                    <View style={{
                        marginTop: 10
                    }}>
                        <AppText>
                            <Content>
                                {PRAYERS[post - 1]?.content}
                            </Content>
                        </AppText>

                    </View>
                </View>
                <View style={{
                    height: 100
                }} />
            </ScrollView>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#f4f4f5',

    },
    nav_area: {
        margin: 15
    },
    postContainer: {
        margin: 15
    },
    author: {
        height: 20,
        alignItems: "center",
        justifyContent: "center",
        padding: 5,
        backgroundColor: COLORS.green1,
        marginBottom: 5,
        borderRadius: 5
    }
});