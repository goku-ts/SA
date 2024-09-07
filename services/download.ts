import * as FileSystem from 'expo-file-system';

export async function download({ url }: { url: string }) {
    const filename = "dummy.pdf";
    const { uri } = await FileSystem.downloadAsync(
        url,
        FileSystem.documentDirectory + filename
    )
}