import { StyleSheet, useWindowDimensions, View } from 'react-native';
import { ActiveLink } from '../component/ActiveLink';
import { Header } from '../component/Header';
import { NavLink } from '../component/NavLink';
import { prayer } from '../constants/images';

export default function Prayer() {
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
                <ActiveLink href='prayer' name='Prayer' icon={prayer} />
                <NavLink href='wallpapers' name='Wallpapers' />
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
