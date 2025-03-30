import { Text, View } from 'react-native';
import Ionicons from '@expo/vector-icons/Ionicons';

export default function AboutScreen() {
  return (
    <View className="flex-1 bg-[#1a1a2e]">
      <div className='grid items-center grid-cols-3 justify-items-stretch bg-[#1e1e2a] h-20 py-4 px-12 mb-2'>
        <Ionicons name='arrow-back' color='white' size={24} />
        <Text className="text-white text-2xl font-bold justify-self-center">About</Text>
      </div>
      <View className="bg-[#25292e] rounded-lg shadow-lg p-6">
        <Text className="text-green-500 text-3xl font-extrabold text-center mb-6">
          About Us
        </Text>
        <View className="space-y-6">
          <Text className="text-gray-300 text-lg text-center leading-relaxed">
            Welcome to our app! We aim to provide the best experience for our users.
          </Text>
          <Text className="text-gray-300 text-lg text-center leading-relaxed">
            This app is built with love and powered by cutting-edge technology.
          </Text>
        </View>
      </View>
    </View>
  );
}
