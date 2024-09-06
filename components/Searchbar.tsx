import { Text, StyleSheet, View, TextInput } from "react-native";
import React, { Component } from "react";
import { Ionicons } from "@expo/vector-icons";
import { Colors } from "@/constants/Colors";

export default class Searchbar extends Component {
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.searchBar}>
          <Ionicons name="search-outline" size={20} color={Colors.lightGrey} />
          <TextInput
            placeholder="Search"
            placeholderTextColor={Colors.lightGrey}
            style={styles.searchText}
            autoCapitalize="none"
          />
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    marginHorizontal: 20,
  },
  searchBar: {
    backgroundColor: "#E4E4E4",
    paddingHorizontal: 10,
    paddingVertical: 12,
    borderRadius: 14,
    flexDirection: "row",
    gap: 10,
  },
  searchText: {
    fontSize: 14,
    flex: 1,
    color: Colors.darkGrey,
  },
});
