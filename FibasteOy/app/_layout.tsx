import { StatusBar } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { useFonts } from "expo-font";
import { Stack, useRouter } from "expo-router";
import { useEffect, useState } from "react";
import { TouchableOpacity } from "react-native";
import { ClerkProvider, useAuth } from "@clerk/clerk-expo";

import * as SplashScreen from "expo-splash-screen";
import * as SecureStore from "expo-secure-store";

import AnimatedSplashScreen from "@/components/AnimatedSplashScreen";
import Animated, { FadeIn } from "react-native-reanimated";

// Prevent the splash screen from auto-hiding before asset loading is complete.
//SplashScreen.preventAutoHideAsync();

const EXPO_PUBLIC_CLERK_PUBLISHABLE_KEY = process.env.EXPO_PUBLIC_CLERK_PUBLISHABLE_KEY;
// Cache the Clerk JWT
const tokenCache = {
  async getToken(key: string) {
    try {
      return SecureStore.getItemAsync(key);
    } catch (err) {
      return null;
    }
  },
  async saveToken(key: string, value: string) {
    try {
      return SecureStore.setItemAsync(key, value);
    } catch (err) {
      return;
    }
  },
};

export default function RootLayout() {
  const [appReady, setAppReady] = useState(false);
  const [splashAnimationFinished, setSplashAnimationFinished] = useState(false);
  
  const [loaded, error] = useFonts({
    TE: require('../assets/fonts/Teachers-VariableFont_wght.ttf'),
  });

  // Expo Router uses Error Boundaries to catch errors in the navigation tree.
  useEffect(() => {
    if (error) throw error;
  }, [error]);

  useEffect(() => {
    if (loaded) {
      //SplashScreen.hideAsync();
      setAppReady(true);
    }
  }, [loaded]);

  if (!loaded) {
    return null;
  }

  console.log(appReady, splashAnimationFinished);

  const showAnimatedSplash = !appReady || !splashAnimationFinished;
  if (showAnimatedSplash) {
    return (
      <AnimatedSplashScreen 
        onAnimationFinish={(isCancelled) => {
        if (!isCancelled) {
          setSplashAnimationFinished(true);
        }
      }}
    />
    )
  }

  return (
    <>
      <StatusBar barStyle="dark-content" />
        <ClerkProvider
          publishableKey={EXPO_PUBLIC_CLERK_PUBLISHABLE_KEY!}
          tokenCache={tokenCache}
        >
          <Animated.View style={{ flex: 1 }} entering={FadeIn.duration(400)}>
            <RootLayoutNav/>
          </Animated.View>
        </ClerkProvider>
    </>
  );
}

function RootLayoutNav() {
  const { isLoaded, isSignedIn } = useAuth();
  const router = useRouter();

  // Automatically open login if user is not authenticated
  useEffect(() => {
    if (isLoaded && !isSignedIn) {
      router.push("/(modals)/DetailsScreen");
    }
  }, [isLoaded]);

  return (
    <Stack>
      <Stack.Screen name="(tabs)" options={{ headerShown: false }} />

      <Stack.Screen
        name="(modals)/login"
        options={{
          title: "Login or sign up",
          headerTitleStyle: {
            fontFamily: "TE",
          },
          presentation: "modal",
          headerLeft: () => (
            <TouchableOpacity onPress={() => router.back()}>
              <Ionicons name="close-outline" size={28} />
            </TouchableOpacity>
          ),
        }}
      />

      <Stack.Screen
        name="listing/[id]"
        options={{
          headerTitle: "",
        }}
      />

      <Stack.Screen
        name="(modals)/booking"
        options={{
          presentation: "transparentModal",
          animation: "fade",
          headerLeft: () => (
            <TouchableOpacity onPress={() => router.back()}>
              <Ionicons name="close-outline" size={28} />
            </TouchableOpacity>
          ),
        }}
      />

      <Stack.Screen 
        name="(modals)/taskCreation"
        options={{
          title: 'Create a Task',
          presentation: 'modal',
          animation: 'fade',
          headerLeft: () => (
            <TouchableOpacity onPress={() => router.back()}>
              <Ionicons name="close-outline" size={28} />
            </TouchableOpacity>
          ),
        }}
      />

      <Stack.Screen 
        name="(modals)/map"
        options={{
          title: 'Map',
          presentation: 'card',
          animation: 'fade',
          headerLeft: () => (
            <TouchableOpacity onPress={() => router.back()}>
              <Ionicons name="close-outline" size={28} />
            </TouchableOpacity>
          )
        }}
      />
      
      <Stack.Screen 
        name="(modals)/Animation"
        options={{
          title: 'Animation',
          presentation: 'card',
          animation: 'fade',
          headerLeft: () => (
            <TouchableOpacity onPress={() => router.back()}>
              <Ionicons name="close-outline" size={28} />
            </TouchableOpacity>
          )
        }}
      />
    </Stack>
  );

}