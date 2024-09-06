import React from "react";
import { SafeAreaView, StyleSheet, StatusBar } from "react-native";
import { Tabs } from "expo-router";
import { TabBar } from "@/components/TabBar";
import { useSafeAreaInsets } from "react-native-safe-area-context";

const TabLayout = () => {
  const insets = useSafeAreaInsets();

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar
        barStyle="dark-content"
        backgroundColor="white"
        translucent={false}
      />

      <Tabs
        tabBar={(props) => <TabBar {...props} />}
        screenOptions={{ headerShown: false }}
      >
        <Tabs.Screen
          name="index"
          options={{
            title: "Home",
          }}
        />
        <Tabs.Screen
          name="discover"
          options={{
            title: "Discover",
          }}
        />
        <Tabs.Screen
          name="saved"
          options={{
            title: "Saved",
          }}
        />
        <Tabs.Screen
          name="settings"
          options={{
            title: "Settings",
          }}
        />
      </Tabs>
    </SafeAreaView>
  );
};

export default TabLayout;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingVertical: 3,
    backgroundColor: "white", // Ensure the background color of your app is white
  },
});
