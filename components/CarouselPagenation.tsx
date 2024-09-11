import React from "react";
import { View, StyleSheet, TouchableOpacity } from "react-native";
import { SharedValue } from "react-native-reanimated";

type PaginationProps = {
  data: any[];
  progress: SharedValue<number>;
  onPress: (index: number) => void;
};

const Pagination = ({ data, progress, onPress }: PaginationProps) => {
  return (
    <View style={styles.paginationContainer}>
      {data.map((_, index) => {
        const isActive = progress.value === index;

        return (
          <TouchableOpacity
            key={index}
            style={[styles.dot, isActive && styles.activeDot]}
            onPress={() => onPress(index)}
          />
        );
      })}
    </View>
  );
};

const styles = StyleSheet.create({
  paginationContainer: {
    flexDirection: "row",
    justifyContent: "center",
    marginTop: 10,
  },
  dot: {
    width: 10,
    height: 10,
    borderRadius: 5,
    backgroundColor: "rgba(0,0,0,0.2)",
    marginHorizontal: 5,
  },
  activeDot: {
    backgroundColor: "#000",
  },
});

export default Pagination;
