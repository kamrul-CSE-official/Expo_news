export interface NewsDataType {
  id: number;
  title: string;
  details: string;
  author: string;
  date: string;
  time: string;
  banner: string;
  category: string;
  location: string;
}

interface Sentimentstats {
  positive: number;
  neutral: number;
  negative: number;
}
