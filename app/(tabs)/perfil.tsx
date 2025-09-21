import {
  View,
  Text,
  StyleSheet,
} from "react-native";
import { useEffect } from "react";
import * as SecureStore from "expo-secure-store";
import { useRouter } from "expo-router";
import { JSX } from "react";

export default function Perfil(): JSX.Element {
  const router = useRouter();

  // Se obtienen los datos del usuario almacenados en SecureStore
  useEffect(() => {
    const fetchUserData = async (): Promise<void> => {
      const userData = await SecureStore.getItemAsync("userData");
    };
    fetchUserData();
  }, []);

  return (
    <View style={styles.container}>
      <Text>Pantalla Perfil</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});