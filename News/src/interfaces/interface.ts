export interface Articles {
  articles?: any;
  author?: string;
  title?: string;
  description?: string;
  url?: string;
  content?: string;
  urlToImage?: string;
  publishedAt?: string;
  source?: {
    name: string;
  };
}
export interface Stats {
  stats?:any,
    data?: {
      active?: number;
      cases?: number;
      deaths?: number;
      recovered?: number;
    };
  loading?: boolean
  };
export interface Rates {
  date?: string;
  rates?: any;
  USD?: number;
  EUR?: number;
  DKK?: number;
  RUB?: number;
}

export interface CryptoRates {
  rates?: any;
  USD?: number;
  EUR?: number;
  DKK?: number;
  HUF?: number;
}
export interface ChartData {
  data?: any;

  BTC?: {
    PRICE?: number;
    OPENDAY?: number;
    HIGHDAY?: number;
    LOWDAY?: number;
    SUPPLY?: number;
  };
  LTC?: {
    PRICE?: number;
    OPENDAY?: number;
    HIGHDAY?: number;
    LOWDAY?: number;
    SUPPLY?: number;
  };
  ETH?: {
    PRICE?: number;
    OPENDAY?: number;
    HIGHDAY?: number;
    LOWDAY?: number;
    SUPPLY?: number;
  };
  XRP?: {
    PRICE?: number;
    OPENDAY?: number;
    HIGHDAY?: number;
    LOWDAY?: number;
    SUPPLY?: number;
  };
}
export interface selectableChartData {
  data?: any;
  high?: number;
  low?: number;
  time?: number;
}
