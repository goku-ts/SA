import { useLocalSearchParams } from 'expo-router';
import React from 'react';
import { Image, ScrollView, StyleSheet, Text, useWindowDimensions, View } from 'react-native';
import { ActiveLink } from '../../component/ActiveLink';
import AppText from '../../component/AppText';
import { Header } from '../../component/Header';
import { NavLink } from '../../component/NavLink';
import RegularText from '../../component/RegularText';
import { home } from '../../constants/images';

import { COLORS } from '../../constants/theme';
import { DATA } from '../../data/Data';

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
                <ActiveLink href='/' name="Home" icon={home} />
                <NavLink href='../prayer' name='Prayer' />
                <NavLink href='../wallpapers' name='Wallpapers' />
                <NavLink href='../ebooks' name='e-Books' />
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
                    <Image source={DATA[post - 1]?.image} resizeMode='cover' style={{
                        width: bigScreen ? width * 0.4 : isMobile ? width * 0.85 : width * 0.85,
                        height: bigScreen ? height * 0.3 : isMobile ? height * 0.3 : height * 0.3,
                        borderRadius: 10
                    }} />
                    <View style={{
                        marginTop: 10,
                        flexDirection: "row",
                    }}>
                        <View style={styles.author}>
                            <RegularText>
                                {DATA[post - 1]?.author}
                            </RegularText>
                        </View>
                        <View style={[styles.author, {
                            marginLeft: 20
                        }]}>
                            <RegularText>
                                {DATA[post - 1]?.date}
                            </RegularText>
                        </View>

                    </View>
                    <View style={{
                        marginTop: 10
                    }}>
                        <AppText>
                            {DATA[post - 1]?.title}
                        </AppText>
                    </View>


                    {DATA[post - 1]?.content.map((item) => <View key={item.id} style={{
                        marginTop: 10
                    }}>
                        <AppText>
                            <Text style={{
                                fontFamily: "Montserrat-Regular",
                            }}>
                                {item.paragraph}
                            </Text>
                        </AppText>
                    </View>)}
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
        backgroundColor: COLORS.gray2,
        marginBottom: 5,
        borderRadius: 5
    }
});