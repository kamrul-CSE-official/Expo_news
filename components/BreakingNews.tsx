import { Text, StyleSheet, View, FlatList, Animated } from "react-native";
import React, { useState } from "react";
import { Colors } from "@/constants/Colors";
import { NewsDataType } from "@/types";
import SliderItem from "./SliderItem";
import {
  useSharedValue,
  useAnimatedScrollHandler,
} from "react-native-reanimated";

type INews = {
  newsList: NewsDataType[];
};

export default function BreakingNews({ newsList }: INews) {
  const scrollX = useSharedValue(0);

  const onScrollHandler = useAnimatedScrollHandler({
    onScroll: (event) => {
      scrollX.value = event.contentOffset.x;
    },
  });

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Breaking News</Text>
      <View style={styles.sliderWrapper}>
        <Animated.FlatList
          data={newsList}
          keyExtractor={(_, index) => `list_item${index}`}
          renderItem={({ item, index }) => (
            <SliderItem sliderItem={item} index={index} scrollX={scrollX} />
          )}
          horizontal
          showsVerticalScrollIndicator={false}
          pagingEnabled
          onScroll={onScrollHandler} // Ensure this is correctly set
          scrollEventThrottle={16}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginBottom: 10,
  },
  title: {
    fontSize: 18,
    fontWeight: "600",
    color: Colors.black,
    marginBottom: 10,
    marginLeft: 20,
  },
  sliderWrapper: {
    height: 180,
  },
});
