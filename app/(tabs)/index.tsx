import { ActivityIndicator, StyleSheet, View } from "react-native";
import React, { useEffect, useState } from "react";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import Header from "@/components/Header";
import Searchbar from "@/components/Searchbar";
import BreakingNews from "@/components/BreakingNews";
import NewsDataSet from "@/newsData.json";
import { NewsDataType } from "@/types";

type Props = {};

const Page = (props: Props) => {
  const { top: safeTop } = useSafeAreaInsets();
  const [news, setNews] = useState<NewsDataType[]>([]);
  const [breakingNews, setBreakingNews] = useState<NewsDataType[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(true);

  useEffect(() => {
    // Simulating data fetching
    setTimeout(() => {
      setNews(NewsDataSet);
    }, 800);
  }, []);

  useEffect(() => {
    if (news.length > 0) {
      setIsLoading(false);
      // Shuffle the news data and pick 5 random items
      const shuffled = [...news].sort(() => 0.5 - Math.random());
      const fiveRandomNews = shuffled.slice(0, 5);
      setBreakingNews(fiveRandomNews);
    }
  }, [news]);

  return (
    <View style={[styles.container, { paddingTop: safeTop }]}>
      <Header />
      <Searchbar />
      {!isLoading && news.length > 0 ? (
        <BreakingNews newsList={breakingNews} />
      ) : (
        <ActivityIndicator size="large" color="#0000ff" />
      )}
    </View>
  );
};

export default Page;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
