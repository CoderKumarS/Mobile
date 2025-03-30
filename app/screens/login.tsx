import React, { useState } from "react";
import { View, Text, TextInput, TouchableOpacity } from "react-native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
type RootStackParamList = {
    Login: undefined;
    ForgotPassword: undefined;
    Register: undefined;
};

type LoginScreenNavigationProp = NativeStackNavigationProp<RootStackParamList>;

export default function Login({ navigation }: { navigation: LoginScreenNavigationProp }) {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    return (
        <View className="flex-1 justify-center items-center bg-[#FF5733] px-6">
            <Text className="text-3xl font-bold text-white mb-6">Welcome Back</Text>

            <TextInput className="w-full h-12 bg-white rounded-lg px-4 mb-4" placeholder="Email" value={email} onChangeText={setEmail} />
            <TextInput className="w-full h-12 bg-white rounded-lg px-4 mb-4" placeholder="Password" secureTextEntry value={password} onChangeText={setPassword} />

            <TouchableOpacity className="w-full h-12 bg-white rounded-lg justify-center items-center mt-2">
                <Text className="text-[#FF5733] text-lg font-bold">Login</Text>
            </TouchableOpacity>

            <TouchableOpacity onPress={() => navigation.navigate("ForgotPassword")}>
                <Text className="mt-3 text-white text-sm">Forgot Password?</Text>
            </TouchableOpacity>

            <TouchableOpacity onPress={() => navigation.navigate("Register")}>
                <Text className="mt-3 text-white text-sm">Don't have an account? <Text className="font-bold">Sign Up</Text></Text>
            </TouchableOpacity>
        </View>
    );
};

