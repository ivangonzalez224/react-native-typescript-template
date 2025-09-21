import React, { useEffect, useState } from "react";
import { Stack, useRouter } from "expo-router";
import { SafeAreaView } from "react-native-safe-area-context";
import { Provider } from "react-redux";
import { MenuProvider } from "react-native-popup-menu";
import * as SecureStore from "expo-secure-store";

import store, { login } from "../redux/store";
import { useAppDispatch, useAppSelector } from "../redux/hooks";

function MainLayout(): JSX.Element {
  const isLoggedIn = useAppSelector((state) => state.auth.isLoggedIn);
  const dispatch = useAppDispatch();
  const [loading, setLoading] = useState<boolean>(true);
  const router = useRouter();

  useEffect(() => {
    const checkLoginStatus = async (): Promise<void> => {
      const userData = await SecureStore.getItemAsync("userData");
      if (userData) {
        dispatch(login());
      }
      setLoading(false);
    };
    checkLoginStatus();
  }, [dispatch]);

  useEffect(() => {
    if (!loading && !isLoggedIn) {
      router.replace("/login");
    }
  }, [isLoggedIn, loading, router]);

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <Stack screenOptions={{ headerShown: false }}>
        <Stack.Screen name="(tabs)" />
        <Stack.Screen name="login" />
      </Stack>
    </SafeAreaView>
  );
}

export default function Layout(): JSX.Element {
  return (
    <Provider store={store}>
      <MenuProvider>
        <MainLayout />
      </MenuProvider>
    </Provider>
  );
}