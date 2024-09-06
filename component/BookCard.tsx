import { Link } from 'expo-router';
import React from 'react';
import { Image, Pressable, StyleSheet, Text, useWindowDimensions, View } from 'react-native';
import { COLORS } from '../constants/theme';

import AppText from './AppText';
import Content from './Content';

export default function BookCard({
    title,
    description,
    author,
    size,
    ImageSize,
    hPadding,
    desktop,
    path,
    data,
    image
}: {
    title: string,
    description: string,
    author: string,
    size?: number,
    ImageSize?: number,
    hPadding?: number,
    desktop?: boolean,
    path?: string,
    data?: any
    image?: any
}) {

    const { width, height } = useWindowDimensions();


    return (
        <View>
            <View style={{

                flexDirection: desktop ? "row" : "row",
                backgroundColor: "#FCFBF4",
                //height: desktop ? 150 : null,
                width: size ? size : width - 30,
                // borderWidth: 1,
                borderRadius: 10,
                borderColor: COLORS.gray3,
                padding: 10,
                marginTop: 20,
                paddingHorizontal: hPadding
            }}>
                <Image source={image} style={{
                    resizeMode: "contain",
                    width: desktop ? 250 : ImageSize ? ImageSize : width / 2 - 40,
                    height: desktop ? 350 : height / 3,
                    borderRadius: 3
                }} />
                <View style={{
                    flex: 1,
                    //justifyContent: "space-between",
                    //backgroundColor: "red",
                    paddingLeft: 20
                }}>
                    <View style={{
                        padding: 5,
                        marginTop: 5,
                        paddingLeft: desktop ? 20 : 0
                    }}>
                        <View style={{
                            marginBottom: 5,
                        }}>
                            <AppText>
                                <Content>
                                    {title}
                                </Content>
                            </AppText>
                        </View>

                        <View
                            style={{
                                alignItems: "flex-start",
                                //marginLeft: 5,
                                padding: 5,
                                //marginTop: 5,
                                paddingLeft: desktop ? 0 : 0,

                            }}>
                            <View style={styles.author}>
                                <AppText>
                                    <Text style={{
                                        fontFamily: "Montserrat-Regular",
                                        fontSize: 13,
                                        color: COLORS.gray9
                                    }}>{author}</Text>
                                </AppText>
                            </View>

                        </View>

                        <AppText>
                            <Text style={{
                                fontFamily: "Montserrat-Regular",
                                marginTop: 5,

                            }}>{description}</Text>
                        </AppText>
                    </View>

                    <View style={{
                        flexDirection: "row",
                        justifyContent: "space-between",
                        alignItems: "center",
                        padding: 5,
                        marginTop: 50,
                        paddingLeft: desktop ? 20 : 0,
                    }}>
                        {/* <View
                            style={{

                                alignItems: "center",
                                //marginLeft: 5,
                                padding: 5,
                                marginTop: 5,
                                paddingLeft: desktop ? 20 : 0,
                            }}>
                            <View style={styles.author}>
                                <AppText>
                                    <Text style={{
                                        fontFamily: "Montserrat-Regular",
                                        fontSize: 13,
                                        color: COLORS.gray9
                                    }}>{author}</Text>
                                </AppText>
                            </View>

                        </View> */}
                        <Link href={{
                            pathname: `post/${path}`,
                            params: {
                                id: data?.id
                            }
                        }} asChild>
                            <Pressable
                                style={{
                                    flexDirection: "row",
                                    justifyContent: "center",
                                    alignItems: "center",
                                    backgroundColor: COLORS.green1,
                                    height: 30,
                                    padding: 10,
                                    borderRadius: 10
                                }}>

                                <AppText>
                                    <Text style={{
                                        color: COLORS.green9
                                    }}>Download</Text>
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
        </View>

    )
}

const styles = StyleSheet.create({
    author: {
        height: 20,
        alignItems: "center",
        justifyContent: "center",
        padding: 5,
        backgroundColor: COLORS.orange1,
        marginBottom: 5,
        borderRadius: 5
    }
})