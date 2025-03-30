import { Text, View, Image, ScrollView, StyleSheet } from 'react-native';

const images = [
    { id: 1, uri: 'https://via.placeholder.com/150' },
    { id: 2, uri: 'https://via.placeholder.com/150' },
    { id: 3, uri: 'https://via.placeholder.com/150' },
    { id: 4, uri: 'https://via.placeholder.com/150' },
    { id: 5, uri: 'https://via.placeholder.com/150' },
    { id: 6, uri: 'https://via.placeholder.com/150' },
];

export default function Gallery() {
    return (
        <View className="flex-1 bg-[#25292e]">
            <Text className="text-white text-2xl font-bold text-center mt-4">Gallery</Text>
            <ScrollView contentContainerStyle={{ paddingHorizontal: 16, paddingVertical: 8 }}>
                <View className="flex-row flex-wrap justify-between">
                    {images.map((image) => (
                        <View key={image.id} className="w-[48%] bg-[#1e1e2a] rounded-lg overflow-hidden mb-4">
                            <Image source={{ uri: image.uri }} className="w-full h-40" />
                        </View>
                    ))}
                </View>
            </ScrollView>
        </View>
    );
}
