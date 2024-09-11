import {
  View,
  Text,
  StyleSheet,
  Dimensions,
  TouchableOpacity,
} from "react-native";
import React from "react";
import { Colors } from "@/constants/Colors";
import { NewsDataType } from "@/types";
import SliderItem from "./SliderItem";
import Carousel, { ICarouselInstance } from "react-native-reanimated-carousel";
import { useSharedValue } from "react-native-reanimated";
import Pagination from "./CarouselPagenation";

type INews = {
  newsList: NewsDataType[];
};

export default function BreakingNews({ newsList }: INews) {
  const width = Dimensions.get("window").width;

  // Carousel reference and progress tracking
  const ref = React.useRef<ICarouselInstance>(null);
  const progress = useSharedValue(0);

  const onProgressChange = (index: number) => {
    progress.value = index;
  };

  const onPressPagination = (index: number) => {
    ref.current?.scrollTo({ index, animated: true });
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Breaking News</Text>
      <View style={{ flex: 1 }}>
        <Carousel
          ref={ref}
          loop
          width={width}
          height={width / 2}
          autoPlay={true}
          data={newsList}
          onSnapToItem={onProgressChange}
          scrollAnimationDuration={1000}
          renderItem={({ item }) => <SliderItem sliderItem={item} />}
          panGestureHandlerProps={{
            activeOffsetX: [-10, 10],
          }}
        />
      </View>
      <View style={{ position: "absolute", bottom: 0 }}>
        <Pagination
          data={newsList}
          progress={progress}
          onPress={onPressPagination}
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
});
