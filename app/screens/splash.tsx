import React, { useEffect, useRef } from "react";
import { View, Image, Dimensions } from "react-native";
import { gsap } from "gsap-trial";

const { width, height } = Dimensions.get("window");

import type { StackNavigationProp } from "@react-navigation/stack";
type RootStackParamList = {
    Login: undefined;
};

type SplashScreenNavigationProp = StackNavigationProp<RootStackParamList>;

export default function Splash({ navigation }: { navigation: SplashScreenNavigationProp }) {
  const logoRef = useRef(null);

  useEffect(() => {
    gsap.fromTo(
      logoRef.current,
      { scale: 1, opacity: 1 },
      {
        scale: 20,
        opacity: 0,
        duration: 1.8,
        ease: "power2.inOut",
        delay: 0.2,
        onComplete: () => navigation.replace("Login"),
      }
    );
  }, []);

  return (
    <View className="flex-1 justify-center items-center bg-[#FF5733]">
      <Image ref={logoRef} source={require("@/assets/icons/splash-icon-dark.png")} className="w-32 h-32" />
    </View>
  );
};


