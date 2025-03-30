import React, { useState } from "react";
import { View, Text, TextInput, TouchableOpacity } from "react-native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
type RootStackParamList = {
    Login: undefined;
};

type RegisterScreenNavigationProp = NativeStackNavigationProp<RootStackParamList>;

export default function Register({ navigation }: { navigation: RegisterScreenNavigationProp }) {
  return (
    <View className="flex-1 justify-center items-center bg-[#FF5733] px-6">
      <Text className="text-3xl font-bold text-white mb-6">Create Account</Text>

      <TextInput className="w-full h-12 bg-white rounded-lg px-4 mb-4" placeholder="Email" />
      <TextInput className="w-full h-12 bg-white rounded-lg px-4 mb-4" placeholder="Password" secureTextEntry />

      <TouchableOpacity className="w-full h-12 bg-white rounded-lg justify-center items-center mt-2">
        <Text className="text-[#FF5733] text-lg font-bold">Sign Up</Text>
      </TouchableOpacity>

      <TouchableOpacity onPress={() => navigation.navigate("Login")}>
        <Text className="mt-3 text-white text-sm">Already have an account? <Text className="font-bold">Login</Text></Text>
      </TouchableOpacity>
    </View>
  );
};
