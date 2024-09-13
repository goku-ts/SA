import { Link } from "expo-router";
import React, { useState } from "react";
import {
  Image,
  Modal,
  Pressable,
  StyleSheet,
  Text,
  TouchableOpacity,
  useWindowDimensions,
  View,
} from "react-native";
import { close } from "../constants/images";
import { COLORS } from "../constants/theme";
import AppText from "./AppText";

export default function WallpaperCard({
  url,
  size,
  ImageSize,
  hPadding,
  desktop,
  image,
  data,
}: {
  url: string;
  size?: number;
  ImageSize?: number;
  hPadding?: number;
  desktop?: boolean;
  data?: any;
  image?: any;
}) {
  const { width, height } = useWindowDimensions();

  const [visible, setVisible] = useState(false);

  return (
    <>
      <Modal visible={visible} transparent={true}>
        <View
          style={{
            flex: 1,
            justifyContent: "center",
            alignItems: "center",
            backgroundColor: "rgba(0,0,0,0.5)",
          }}
        >
          <View
            style={{
              borderRadius: 10,
              justifyContent: "flex-start",
              backgroundColor: "#FCFBF4",
              width: desktop ? width * 0.85 : width * 0.85,
              height: desktop ? height * 0.9 : height * 0.75,
            }}
          >
            <View
              style={{
                alignItems: "flex-start",
                padding: 5,
              }}
            >
              <TouchableOpacity onPress={() => setVisible(false)}>
                <Image
                  source={close}
                  style={{
                    height: 25,
                    width: 25,
                  }}
                />
              </TouchableOpacity>
            </View>
            <View
              style={{
                alignItems: "center",
              }}
            >
              <Image
                source={image}
                style={{
                  resizeMode: "cover",
                  width: desktop ? width * 0.3 : width * 0.6,
                  height: desktop ? height * 0.7 : height * 0.6,
                  borderRadius: 3,
                  marginTop: 5,
                }}
              />
            </View>
            <View
              style={{
                padding: 20,
                marginBottom: 20,
                alignItems: "center",
              }}
            >
              <Link href={url} asChild>
                <Pressable
                  style={{
                    flexDirection: "row",
                    justifyContent: "center",
                    alignItems: "center",
                    backgroundColor: COLORS.green2,
                    height: 30,
                    width: 150,
                    padding: 10,
                    borderRadius: 10,
                  }}
                >
                  <AppText>
                    <Text
                      style={{
                        color: COLORS.green9,
                      }}
                    >
                      Download
                    </Text>
                  </AppText>
                  {/* <Image source={arrow_rignt}
                                    style={{
                                        height: 15,
                                        width: 15,
                                        tintColor: COLORS.gray1,
                                        marginLeft: 5
                                    }} /> */}
                </Pressable>
              </Link>
            </View>
          </View>
        </View>
      </Modal>
      <TouchableOpacity activeOpacity={0.8} onPress={() => setVisible(true)}>
        <View
          style={{
            alignItems: "center",
            justifyContent: "center",
            // flexDirection: desktop ? "column" : "column",
            // backgroundColor: "red",
            //height: desktop ? 150 : null,
            width: desktop ? 300 : size ? size : width / 2 - 30,
            // borderWidth: 1,
            borderRadius: 10,
            padding: 5,
            marginTop: 20,
            paddingHorizontal: hPadding,
            marginRight: 10,
          }}
        >
          <Image
            source={image}
            style={{
              resizeMode: "cover",
              width: desktop ? 200 : ImageSize ? ImageSize : width / 2 - 40,
              height: desktop ? 300 : height / 3,
              borderRadius: 3,
            }}
          />
        </View>
      </TouchableOpacity>
    </>
  );
}

const styles = StyleSheet.create({
  author: {
    height: 20,
    alignItems: "center",
    justifyContent: "center",
    padding: 5,
    backgroundColor: COLORS.orange1,
    marginBottom: 5,
    borderRadius: 5,
  },
});
