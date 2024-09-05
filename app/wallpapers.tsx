import { StyleSheet, useWindowDimensions, View } from 'react-native';
import { ActiveLink } from '../component/ActiveLink';
import { Header } from '../component/Header';
import { NavLink } from '../component/NavLink';
import { wallpaper } from '../constants/images';

export default function Wallpaper() {
    const { width } = useWindowDimensions();

    const isMobile = width < 600
    const NavBar = () => {
        return (
            <View style={{
                flexDirection: "row",
                alignItems: "center",
                marginTop: 10,

            }}>
                <NavLink href='/' name="Home" />
                <NavLink href='prayer' name='Prayer' />
                <ActiveLink href='wallpapers' name='Wallpapers' icon={wallpaper} />
                <NavLink href='ebooks' name='e-Books' />
            </View>
        )
    }

    return (
        <View style={[styles.container, {
            paddingHorizontal: isMobile ? 10 : width / 8
        }]}>
            <View style={styles.nav_area}>
                <Header />
                <NavBar />
            </View>
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

