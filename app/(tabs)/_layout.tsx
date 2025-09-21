import { Tabs } from "expo-router";
import FontAwesome from "@expo/vector-icons/FontAwesome";
import { StyleSheet } from "react-native";
import { JSX } from "react";

export default function TabsLayout(): JSX.Element {
  return (
    <Tabs
      screenOptions={{
        headerShown: false,
        tabBarStyle: styles.tabBar,
        tabBarActiveTintColor: "#4285f4",
        tabBarInactiveTintColor: "#f7e4c1",
      }}
    >
      <Tabs.Screen
        name="index"
        options={{
          title: "Explorar",
          headerShown: false,
          tabBarLabel: "Explorar",
          tabBarIcon: ({ color, size }: { color: string; size: number }) => (
            <FontAwesome name="map" size={size} color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="perfil"
        options={{
          title: "Perfil",
          headerShown: false,
          tabBarLabel: "Perfil",
          tabBarIcon: ({ color, size }: { color: string; size: number }) => (
            <FontAwesome name="user" size={size} color={color} />
          ),
        }}
      />
    </Tabs>
  );
}

const styles = StyleSheet.create({
  tabBar: {
    backgroundColor: "#111",
    borderTopWidth: 0,
    borderTopColor: "#111",
    height: 60,
  },
});