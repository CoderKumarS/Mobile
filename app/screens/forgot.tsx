import React from "react";
import { View, Text, TextInput, TouchableOpacity } from "react-native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
type RootStackParamList = {
    Login: undefined;
};

type ForgotScreenNavigationProp = NativeStackNavigationProp<RootStackParamList>;

export default function Forgot({ navigation }: { navigation: ForgotScreenNavigationProp }) {
  return (
    <View className="flex-1 justify-center items-center bg-[#FF5733] px-6">
      <Text className="text-3xl font-bold text-white mb-6">Reset Password</Text>

      <TextInput className="w-full h-12 bg-white rounded-lg px-4 mb-4" placeholder="Enter your email" />

      <TouchableOpacity className="w-full h-12 bg-white rounded-lg justify-center items-center mt-2">
        <Text className="text-[#FF5733] text-lg font-bold">Send Reset Link</Text>
      </TouchableOpacity>

      <TouchableOpacity onPress={() => navigation.navigate("Login")}>
        <Text className="mt-3 text-white text-sm">Remember your password? <Text className="font-bold">Login</Text></Text>
      </TouchableOpacity>
    </View>
  );
};
