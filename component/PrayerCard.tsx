import React from 'react';
import { StyleSheet, Text, TouchableOpacity, useWindowDimensions, View } from 'react-native';
import { COLORS } from '../constants/theme';

import { router } from 'expo-router';
import AppText from './AppText';
import Content from './Content';

export default function PrayerCard({
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
    image
}: {
    title: string,
    description: string,
    author: string,
    date: string,
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
        <TouchableOpacity
            onPress={() => router.push({
                pathname: `/prayer/${data.id}`,
                params: {
                    id: data.id,

                }
            })}
        >
            <View style={{
                flexDirection: desktop ? "row" : "column",
                backgroundColor: "#FCFBF4",
                // height: 150,
                width: size ? size : width - 30,
                // borderWidth: 1,
                borderRadius: 10,
                borderColor: COLORS.gray3,
                padding: 10,
                marginTop: 20,
                paddingHorizontal: hPadding
            }}>
                <View style={{ flex: 1, justifyContent: "space-between" }}>
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
                        marginTop: 5,
                        paddingLeft: desktop ? 20 : 0,
                    }}>
                        <View style={{
                            flexDirection: "row",
                            alignItems: "center",
                            //marginLeft: 5,
                            // padding: 5,
                            marginTop: 5,
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
                            <View style={styles.author}>
                                <AppText>
                                    <Text style={{
                                        fontFamily: "Montserrat-Regular",
                                        fontSize: 13,
                                        color: COLORS.gray9
                                    }}>{date}</Text>
                                </AppText>
                            </View>

                        </View>
                        {/* <Link href={{
                            pathname: `post/${path}`,
                            params: {
                                id: data?.id
                            }
                        }} asChild>
                            <Pressable
                                // onPress={() => router.push({
                                //     pathname: `${path}`,
                                //     params: {
                                //         id: data.id,
                                //         title: data.title,
                                //         $description: data.description,
                                //         $author: data.author,
                                //         $date: data.date,
                                //         $content: data.content,
                                //         $image: data.image

                                //     }
                                // })}
                                style={{
                                    flexDirection: "row",
                                    justifyContent: "center",
                                    alignItems: "center",
                                    backgroundColor: COLORS.gray7,
                                    height: 25,
                                    padding: 10,
                                    borderRadius: 10
                                }}>

                                <AppText>
                                    <Text style={{
                                        color: COLORS.gray1
                                    }}>Read More</Text>
                                </AppText>
                                <Image source={arrow_rignt}
                                    style={{
                                        height: 15,
                                        width: 15,
                                        tintColor: COLORS.gray1,
                                        marginLeft: 5
                                    }} />

                            </Pressable>
                        </Link> */}

                    </View>
                </View>
            </View>


        </TouchableOpacity>

    )
}

const styles = StyleSheet.create({
    author: {
        marginLeft: 5,
        height: 20,
        alignItems: "center",
        justifyContent: "center",
        padding: 5,
        backgroundColor: COLORS.green1,
        marginBottom: 5,
        borderRadius: 5
    }
})