import { useLocalSearchParams } from 'expo-router';
import React from 'react';
import { Image, ScrollView, StyleSheet, useWindowDimensions, View } from 'react-native';
import { ActiveLink } from '../../component/ActiveLink';
import AppText from '../../component/AppText';
import { Header } from '../../component/Header';
import { NavLink } from '../../component/NavLink';
import RegularText from '../../component/RegularText';
import { home } from '../../constants/images';

import Content from '../../component/Content';
import ShareButton from '../../component/ShareButton';
import loadFont from '../../constants/loadFont';
import { COLORS } from '../../constants/theme';
import { POST } from '../../data/Data';

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
                <ActiveLink href='/' name="Home" icon={home} />
                <NavLink href='../prayer' name='Prayer' />
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
                        marginBottom: 30
                    }}>
                        <AppText>
                            <Content>
                                {POST[post - 1]?.title}
                            </Content>
                        </AppText>
                    </View>

                    <Image source={POST[post - 1]?.image} resizeMode='cover' style={{
                        width: bigScreen ? width * 0.4 : isMobile ? width * 0.85 : width * 0.85,
                        height: bigScreen ? height * 0.3 : isMobile ? height * 0.3 : height * 0.3,
                        borderRadius: 10
                    }} />
                    <View style={{
                        marginTop: 10,
                        flexDirection: "row",
                        marginBottom: 30
                    }}>
                        <View style={styles.author}>
                            <RegularText>
                                {POST[post - 1]?.author}
                            </RegularText>
                        </View>
                        <View style={[styles.author, {
                            marginLeft: 20
                        }]}>
                            <RegularText>
                                {POST[post - 1]?.date}
                            </RegularText>
                        </View>

                    </View>


                    <View style={{
                        marginTop: 10
                    }}>
                        <AppText>
                            <Content>
                                {POST[post - 1]?.content}
                            </Content>
                        </AppText>

                    </View>
                </View>
                <ShareButton url={"https://spiritarmy.com/post/breaking-out-of-the-mould?id=1"} />
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