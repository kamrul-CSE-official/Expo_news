import React, { useEffect, useState } from "react";
import { ActivityIndicator, StyleSheet, View } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import Header from "@/components/Header";
import Searchbar from "@/components/Searchbar";
import BreakingNews from "@/components/BreakingNews";
import NewsDataSet from "@/newsData.json";
import { NewsDataType } from "@/types";

const Page = () => {
  const { top: safeTop } = useSafeAreaInsets();
  const [news, setNews] = useState<NewsDataType[]>([]);
  const [breakingNews, setBreakingNews] = useState<NewsDataType[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simulating data fetching
    const fetchData = async () => {
      setTimeout(() => {
        setNews(NewsDataSet);
        setIsLoading(false);
      }, 800);
    };
    fetchData();
  }, []);

  useEffect(() => {
    if (news.length) {
      // Shuffle and pick random 5 news
      const shuffledNews = [...news]
        .sort(() => 0.5 - Math.random())
        .slice(0, 5);
      setBreakingNews(shuffledNews);
    }
  }, [news]);

  return (
    <View style={[styles.container, { paddingTop: safeTop }]}>
      <Header />
      <Searchbar />
      {isLoading ? (
        <ActivityIndicator size="large" color="#0000ff" />
      ) : (
        <BreakingNews newsList={breakingNews} />
      )}
    </View>
  );
};

export default React.memo(Page);

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
