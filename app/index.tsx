import {
  ScrollView,
  StyleSheet,
  useWindowDimensions,
  View,
} from "react-native";

import { ActiveLink } from "../component/ActiveLink";
import ContentCard from "../component/ContentCard";
import { Header } from "../component/Header";
import { home } from "../constants/images";

import { NavLink } from "../component/NavLink";
import loadFont from "../constants/loadFont";
import { POST } from "../data/Data";

export default function Home() {
  loadFont();

  const { width } = useWindowDimensions();

  const isMobile = width < 700;
  const bigScreen = width > 1000;

  const NavBar = () => {
    return (
      <View
        style={{
          flexDirection: "row",
          alignItems: "center",
          marginTop: 10,
          marginBottom: 20,

        }}
      >
        <ActiveLink href="/" name="Home" icon={home} />
        <NavLink href="prayer" name="Prayer" />
        <NavLink href="faith" name="Faith Wall" />
        {/* <NavLink href="ebooks" name="Books" />
        <NavLink href="wallpapers" name="Wallpapers" /> */}
      </View>
    );
  };

  return (
    <ScrollView
      showsVerticalScrollIndicator={false}
      style={[
        styles.container,
        {
          paddingHorizontal: bigScreen ? width / 5 : isMobile ? 10 : width / 20,
        },
      ]}
    >
      <View>
        <View style={styles.nav_area}>
          <Header />
          <NavBar />
        </View>

        <View
          style={{
            //alignItems: "center",
          }}
        >
          {/* <QouteCard
                        text='But you will receive power when the Holy Spirit
                        comes on you; and you will be my witnesses in Jerusalem,
                        and in all Judea and Samaria, and to the ends of the earth.
                        '
                        reference=' - Romans 1:8'
                        h_padding={bigScreen ? width / 5 : isMobile ? 10 : width / 20}
                    /> */}
          <View
            style={
              {
                // flexDirection: isMobile ? "column" : "row",
              }
            }
          >
            {POST &&
              POST.map((item) => {
                return (
                  <ContentCard
                    image={item.image}
                    desktop={isMobile ? false : true}
                    // hPadding={bigScreen ? width / 5 : isMobile ? 10 : width / 20}
                    //size={isMobile ? undefined : width - 15}
                    // ImageSize={isMobile ? undefined : width - 35}
                    key={item.id}
                    author={item.author}
                    description={`${item.description}`}
                    title={`${item.title}`}
                    date={`${item.date}`}
                    path={`${item.id}`}
                    data={item}
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
    padding: 15,
    marginBottom: 20,
  },
});
