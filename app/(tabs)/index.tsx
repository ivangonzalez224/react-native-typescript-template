import React, { useEffect } from "react";
import { StyleSheet, View, Text } from "react-native";
import * as SecureStore from "expo-secure-store";

export default function ExploreScreen(): JSX.Element {
  useEffect(() => {
    (async (): Promise<void> => {
      const userData: string | null = await SecureStore.getItemAsync("userData");
    })();
  }, []);

  return (
    <View style={styles.container}>
      <Text>Pantalla Explorar</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});