import React from "react";
import {
  StyleSheet,
  Text,
  TouchableOpacity,
  useWindowDimensions,
  View,
} from "react-native";
import { COLORS } from "../constants/theme";

import { router } from "expo-router";
import AppText from "./AppText";
import Content from "./Content";

export default function PrayerCard({
  time,
  title,
  description,
  author,
  date,
  size,
  ImageSize,
  hPadding,
  desktop,
  path,
  data,
  image,
}: {
  time?: string
  title: string;
  description: string;
  author: string;
  date: string;
  size?: number;
  ImageSize?: number;
  hPadding?: number;
  desktop?: boolean;
  path?: string;
  data?: any;
  image?: any;
}) {
  const { width, height } = useWindowDimensions();

  return (
    <TouchableOpacity
      activeOpacity={0.8}
      onPress={() =>
        router.push({
          pathname: `/prayer/${data.slug}`,
          params: {
            id: data.id,
          },
        })
      }
    >
      <View
        style={{
          // flexDirection: desktop ? "row" : "column",
          backgroundColor: "#FCFBF4",
          // height: 150,
          //width: size ? size : width - 30,
          // borderWidth: 1,
          borderRadius: 10,
          borderColor: COLORS.gray3,
          padding: 15,
          //paddingLeft: 15,
          marginTop: 10,
          //paddingHorizontal: hPadding,
        }}
      >
        <View style={{ flex: 1, justifyContent: "space-between" }}>
          <View
            style={{
              padding: 5,
              marginTop: 5,
              paddingLeft: desktop ? 20 : 0,
            }}
          >
            <View
              style={{
                marginBottom: 5,
              }}
            >
              <AppText>
                <Content>{title}</Content>
              </AppText>
            </View>

            <AppText>
              <Text
                style={{
                  fontFamily: "Montserrat-Regular",
                  marginTop: 5,
                }}
              >
                {description}
              </Text>
            </AppText>
          </View>

          <View
            style={{
              flexDirection: "row",
              justifyContent: "space-between",
              alignItems: "center",
              //padding: 5,
              marginTop: 5,
              paddingLeft: desktop ? 20 : 0,
            }}
          >
            <View
              style={{
                flexDirection: "row",
                alignItems: "center",
                //marginLeft: 5,
                // padding: 5,
                marginTop: 5,
                paddingLeft: desktop ? 0 : 0,
              }}
            >

              <View style={styles.author}>
                <AppText>
                  <Text
                    style={{
                      fontFamily: "Montserrat-Regular",
                      fontSize: 13,
                      color: COLORS.green8,
                    }}
                  >
                    {date}
                  </Text>
                </AppText>
              </View>
              <View style={[styles.author, { backgroundColor: COLORS.orange1 }]}>
                <AppText>
                  <Text
                    style={{
                      fontFamily: "Montserrat-Regular",
                      fontSize: 13,
                      color: COLORS.orange6,
                    }}
                  >
                    {author}
                  </Text>
                </AppText>
              </View>

              <View style={[styles.author, { backgroundColor: COLORS.gray2 }]}>
                <AppText>
                  <Text
                    style={{
                      fontFamily: "Montserrat-Regular",
                      fontSize: 13,
                      color: COLORS.gray8,
                    }}
                  >
                    {`${time} min`}
                  </Text>
                </AppText>
              </View>

            </View>
          </View>
        </View>
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  author: {
    marginRight: 10,
    height: 20,
    alignItems: "center",
    justifyContent: "center",
    padding: 5,
    backgroundColor: COLORS.green1,
    marginBottom: 5,
    borderRadius: 5,
  },
});
