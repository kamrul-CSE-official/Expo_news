import { View, Text, StyleSheet, Dimensions, Image } from "react-native";
import React from "react";
import { NewsDataType } from "@/types";
import { SharedValue } from "react-native-reanimated";
import { LinearGradient } from "expo-linear-gradient";
import { Colors } from "@/constants/Colors";

type Props = {
  sliderItem: NewsDataType;
  index: number;
  scrollX: SharedValue<number>;
};

const { width } = Dimensions.get("screen");

const SliderItem = ({ sliderItem, scrollX }: Props) => {
  return (
    <View style={styles.itemWrapper}>
      <Image source={{ uri: sliderItem.banner }} style={styles.image} />
      <LinearGradient
        colors={["transparent", "rgba(0,0,0,0.8)"]}
        style={styles.background}
      >
        <View style={styles.sourceInfo}>
          <Image
            source={{
              uri: "https://st2.depositphotos.com/6789684/12262/v/450/depositphotos_122620866-stock-illustration-illustration-of-flat-icon.jpg",
            }}
            style={styles.sourceIcon}
          />
          <Text style={styles.sourceName}>Kamrul News</Text>
        </View>
        <Text style={styles.title}>{sliderItem.title}</Text>
      </LinearGradient>
    </View>
  );
};

export default SliderItem;

const styles = StyleSheet.create({
  itemWrapper: {
    width: width - 60,
    height: 180,
    borderRadius: 20,
    overflow: "hidden",
    marginHorizontal: 15,
  },
  image: {
    width: "100%",
    height: "100%",
    borderRadius: 20,
  },
  background: {
    ...StyleSheet.absoluteFillObject,
    justifyContent: "flex-end",
    padding: 20,
  },
  sourceInfo: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 10,
  },
  sourceIcon: {
    width: 25,
    height: 25,
    borderRadius: 12.5,
  },
  sourceName: {
    color: Colors.white,
    fontSize: 12,
    fontWeight: "600",
    marginLeft: 10,
  },
  title: {
    fontSize: 16,
    color: Colors.white,
    fontWeight: "600",
  },
});
