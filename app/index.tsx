import { useFonts } from 'expo-font';
import { SplashScreen } from 'expo-router';
import { useEffect } from 'react';
import { ScrollView, StyleSheet, useWindowDimensions, View } from 'react-native';

import { ActiveLink } from '../component/ActiveLink';
import ContentCard from '../component/ContentCard';
import { Header } from '../component/Header';
import { QouteCard } from '../component/QouteCard';
import { home } from '../constants/images';

import { NavLink } from '../component/NavLink';
import { DATA } from '../data/Data';

export default function Home() {

    (function () {
        const [loaded, error] = useFonts({
            'Montserrat-Regular': require('../assets/fonts/Montserrat-Regular.ttf'),
            'Montserrat-SemiBold': require('../assets/fonts/Montserrat-SemiBold.ttf'),
        });

        useEffect(() => {
            if (loaded || error) {
                SplashScreen.hideAsync();
            }
        }, [loaded, error]);

        if (!loaded && !error) {
            return null;
        }

    })()

    const { width } = useWindowDimensions();

    const isMobile = width < 700
    const bigScreen = width > 1000

    let sortedData = DATA.sort((a, b) => DATA.indexOf(b) - DATA.indexOf(a))



    const NavBar = () => {
        return (
            <View style={{
                flexDirection: "row",
                alignItems: "center",
                marginTop: 10,
                marginBottom: 20
            }}>
                <ActiveLink href='/' name="Home" icon={home} />
                <NavLink href='prayer' name='Prayer' />
                <NavLink href='wallpapers' name='Wallpapers' />
                <NavLink href='ebooks' name='e -Books' />
            </View>
        )
    }



    return (
        <View style={[styles.container, {
            paddingHorizontal: bigScreen ? width / 5 : isMobile ? 10 : width / 20
        }]}>

            <ScrollView
                showsVerticalScrollIndicator={false}
            >
                <View style={styles.nav_area}>
                    <Header />
                    <NavBar />
                </View>

                <View style={{
                    alignItems: "center",
                }}>

                    <QouteCard
                        text='But you will receive power when the Holy Spirit
                        comes on you; and you will be my witnesses in Jerusalem,
                        and in all Judea and Samaria, and to the ends of the earth.
                        '
                        reference=' - Romans 1:8'
                        h_padding={bigScreen ? width / 5 : isMobile ? 10 : width / 20}
                    />
                    <View style={{

                        // flexDirection: isMobile ? "column" : "row",
                    }}>
                        {DATA && sortedData.map((item) => {
                            return (
                                <ContentCard
                                    image={item.image}
                                    desktop={isMobile ? false : true}
                                    ImageSize={isMobile ? undefined : width - 35}
                                    size={isMobile ? undefined : width - 15}
                                    key={item.id}
                                    author={item.author}
                                    description={`${item.description}`}
                                    title={`${item.title}`}
                                    date={`${item.date}`}
                                    hPadding={bigScreen ? width / 5 : isMobile ? 10 : width / 20}
                                    path={`${item.id}`}
                                    data={item}
                                />
                            )
                        })}

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
        padding: 15,

    }
});
