import { Text, View, StyleSheet } from 'react-native';

export default function AboutScreen() {
  return (
    <View className="flex-1 bg-[#1a1a2e] px-6 py-8">
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
