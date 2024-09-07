import { FlatList, ScrollView, StyleSheet, useWindowDimensions, View } from 'react-native';
import { ActiveLink } from '../component/ActiveLink';
import { Header } from '../component/Header';
import { NavLink } from '../component/NavLink';
import WallpaperCard from '../component/WallpaperCard';
import { wallpaper } from '../constants/images';
import loadFont from '../constants/loadFont';
import { WALLPAPERS } from '../data/Data';

export default function Wallpaper() {

    loadFont();

    const { width } = useWindowDimensions();

    const isMobile = width < 600
    const bigScreen = width > 1000

    const NavBar = () => {
        return (
            <View style={{
                flexDirection: "row",
                alignItems: "center",
                marginTop: 10,

            }}>
                <NavLink href='/' name="Home" />
                <NavLink href='prayer' name='Prayer' />
                <NavLink href='ebooks' name='Books' />
                <ActiveLink href='wallpapers' name='Wallpapers' icon={wallpaper} />
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

                    {/* <QouteCard
                        text='But you will receive power when the Holy Spirit
                        comes on you; and you will be my witnesses in Jerusalem,
                        and in all Judea and Samaria, and to the ends of the earth.
                        '
                        reference=' - Romans 1:8'
                        h_padding={bigScreen ? width / 5 : isMobile ? 10 : width / 20}
                    /> */}
                    <View style={{

                        // flexDirection: isMobile ? "column" : "row",
                    }}>

                        <FlatList
                            data={WALLPAPERS}
                            key={2}
                            numColumns={2}
                            renderItem={({ item }) =>
                                <WallpaperCard
                                    hPadding={bigScreen ? width / 8 : isMobile ? 10 : width / 5}
                                    //size={isMobile ? undefined : width - 15}
                                    url={item.download_url}
                                    key={item.id}
                                    image={item.image}
                                    desktop={isMobile ? false : true}
                                />
                            }
                        />


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
    }
});

