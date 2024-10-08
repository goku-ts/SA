import { useLocalSearchParams } from 'expo-router';
import React from 'react';
import { ScrollView, StyleSheet, Text, useWindowDimensions, View } from 'react-native';
import { ActiveLink } from '../../component/ActiveLink';
import AppText from '../../component/AppText';
import { Header } from '../../component/Header';
import { NavLink } from '../../component/NavLink';
import RegularText from '../../component/RegularText';

import Content from '../../component/Content';
import ShareButton from '../../component/ShareButton';
import loadFont from '../../constants/loadFont';
import { COLORS } from '../../constants/theme';
import { PRAYERS } from '../../data/Data';

export default function Details() {

    loadFont();

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
                {/* <NavLink href='/' name="Home" /> */}
                <ActiveLink href='/' name='Prayer' />
                <NavLink href="../faith" name="Faith Wall" />
                {/* <NavLink href='../ebooks' name='Books' />
                <NavLink href='../wallpapers' name='Wallpapers' /> */}
            </View>
        )
    }

    return (
        <ScrollView showsVerticalScrollIndicator={false}
            style={{
                flex: 1,
                backgroundColor: "#f4f4f5",

            }}
        >
            <View style={[styles.container, {
                paddingHorizontal: bigScreen ? width / 5 : isMobile ? 10 : width / 20
            }]}>




                <View style={styles.nav_area}>
                    <Header />
                    <NavBar />
                </View>
                <View style={styles.postContainer}>


                    <View style={{
                        marginTop: 10
                    }}>
                        <AppText>
                            <Content>
                                {PRAYERS[post - 1]?.title}
                            </Content>
                        </AppText>
                    </View>

                    <View style={{
                        marginTop: 10,
                        flexDirection: "row",
                        marginBottom: 30
                    }}>
                        <View style={[styles.author,
                        {
                            backgroundColor: PRAYERS[post - 1]?.author === "Warfare" ? COLORS.red1
                                : PRAYERS[post - 1]?.author === "Petition" ? COLORS.orange1
                                    : PRAYERS[post - 1]?.author === "Intercession" ? COLORS.teal1
                                        : COLORS.orange1
                        }
                        ]}>
                            <Text
                                style={{
                                    fontFamily: "Montserrat-Regular",
                                    fontSize: 14,
                                    color: PRAYERS[post - 1]?.author === "Warfare" ? COLORS.red4
                                        : PRAYERS[post - 1]?.author === "Petition" ? COLORS.orange5
                                            : PRAYERS[post - 1]?.author === "Intercession" ? COLORS.teal9
                                                : COLORS.orange5,
                                }}
                            >
                                {PRAYERS[post - 1]?.author}
                            </Text>
                        </View>
                        <View style={[styles.author, {
                            marginLeft: 20
                        }]}>

                            <RegularText>
                                {`${PRAYERS[post - 1]?.time} mins read`}
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
                <ShareButton url={"https://spiritarmy.com/prayer/breaking-out-of-the-mould?id=1"} />
                <View style={{
                    height: 100
                }} />
            </View>
        </ScrollView>
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