import * as Clipboard from 'expo-clipboard';
import React, { useState } from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import AppText from './AppText';

const ShareButton = ({ url }: { url: string }) => {
    const [copied, setCopied] = useState(false);

    const handleCopy = async () => {
        await Clipboard.setStringAsync(`https://spiritarmy.com/${url}`);
        setCopied(true);
        setTimeout(() => setCopied(false), 5000); // Reset after 2 seconds
    };

    return (
        <View style={styles.container}>
            <TouchableOpacity
                style={[styles.button, copied ? styles.copiedButton : null]}
                onPress={handleCopy}
            >
                <AppText>
                    <Text style={styles.buttonText}>
                        {copied ? 'Copied!' : 'Copy Share Link'}
                    </Text>
                </AppText>
            </TouchableOpacity>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        marginTop: 30,
        alignItems: "flex-start",
        justifyContent: 'center',
        padding: 10
    },
    button: {
        backgroundColor: '#3498db',
        paddingHorizontal: 10,
        paddingVertical: 5,
        borderRadius: 5,
    },
    copiedButton: {
        backgroundColor: '#2ecc71',
    },
    buttonText: {
        color: 'white',
        fontSize: 14,
    },
});

export default ShareButton;