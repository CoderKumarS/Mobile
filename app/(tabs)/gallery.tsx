import { Text, View, Image, ScrollView } from 'react-native';
import Ionicons from '@expo/vector-icons/Ionicons';

const images = [
    { id: 1, uri: 'https://picsum.photos/150/150' },
    { id: 2, uri: 'https://picsum.photos/250/150' },
    { id: 3, uri: 'https://picsum.photos/150/250' },
    { id: 4, uri: 'https://picsum.photos/200/150' },
    { id: 5, uri: 'https://picsum.photos/150/200' },
    { id: 6, uri: 'https://picsum.photos/100/150' },
    { id: 7, uri: 'https://picsum.photos/300/200' },
    { id: 8, uri: 'https://picsum.photos/150/300' },
    { id: 9, uri: 'https://picsum.photos/300/150' },
    { id: 10, uri: 'https://picsum.photos/350/150' },
    { id: 11, uri: 'https://picsum.photos/150/350' },
    { id: 12, uri: 'https://picsum.photos/400/300' },
    { id: 13, uri: 'https://picsum.photos/300/150' },
    { id: 14, uri: 'https://picsum.photos/500/400' },
    { id: 15, uri: 'https://picsum.photos/400/400' },
    { id: 16, uri: 'https://picsum.photos/450/450' },
];

export default function Gallery() {
    return (
        <View className="flex-1 bg-[#25292e]">
            <div className='grid items-center grid-cols-3 justify-items-stretch bg-[#1e1e2a] h-20 py-4 px-12 mb-2'>
                <Ionicons name='arrow-back' color='white' size={24}/>
                <Text className="text-white text-2xl font-bold justify-self-center">Gallery</Text>
            </div>
            <ScrollView contentContainerStyle={{ paddingHorizontal: 16, paddingVertical: 8, marginBottom: 50 }} >
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
