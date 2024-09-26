import {
    ScrollView,
    StyleSheet,
    useWindowDimensions,
    View,
} from "react-native";

import { ActiveLink } from "../component/ActiveLink";
import FaithCard from "../component/FaithCard";
import { Header } from "../component/Header";
import { NavLink } from "../component/NavLink";
import loadFont from "../constants/loadFont";
import { FAITH } from "../data/Data";

export default function Faith() {
    const { width } = useWindowDimensions();

    const isMobile = width < 600;
    const bigScreen = width > 1000;

    const NavBar = () => {
        loadFont();

        return (
            <View
                style={{
                    flexDirection: "row",
                    alignItems: "center",
                    marginTop: 10,
                }}
            >
                {/* <NavLink href="/" name="Home" /> */}
                <NavLink href="/" name="Prayer" />
                <ActiveLink href="faith" name="Faith Wall" />
                {/* <NavLink href="ebooks" name="Books" />
          <NavLink href="wallpapers" name="Wallpapers" /> */}
            </View>
        );
    };

    return (
        <ScrollView showsVerticalScrollIndicator={false}
            style={{
                flex: 1,
                backgroundColor: "#f4f4f5",

            }}
        >
            <View
                style={[
                    styles.container,
                    {
                        paddingHorizontal: bigScreen
                            ? width / 5
                            : isMobile
                                ? 10
                                : width / 20,
                    },
                ]}
            >
                <View style={styles.nav_area}>
                    <Header />
                    <NavBar />
                </View>

                <View
                    style={
                        {
                            // alignItems: "center",
                        }
                    }
                >
                    <View
                        style={
                            {
                                // flexDirection: isMobile ? "column" : "row",
                            }
                        }
                    >
                        {FAITH &&
                            FAITH.map((item) => {
                                return (
                                    <FaithCard
                                        desktop={isMobile ? false : true}
                                        //hPadding={bigScreen ? width / 5 : isMobile ? 10 : width / 20}
                                        //size={isMobile ? undefined : width - 15}
                                        key={item.id}
                                        data={item}
                                        title={item?.title}
                                        description={item?.description}
                                        author={item?.author}
                                        date={item?.date}
                                        time={item?.time}
                                    />
                                );
                            })}
                    </View>
                </View>
                <View
                    style={{
                        height: 100,
                    }}
                />
            </View>
        </ScrollView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#f4f4f5",
    },
    nav_area: {
        margin: 15,
        marginBottom: 50,

    },
});
