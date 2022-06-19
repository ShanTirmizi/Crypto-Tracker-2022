export interface CurrencyProps {
  id: string;
  name: string;
  symbol: string;
  image: string;
  current_price: number;
  market_cap: number;
  market_cap_rank: number;
  total_volume: number;
  high_24h: number;
  low_24h: number;
  price_change_24h: number;
  price_change_percentage_24h: number;
  circulating_supply: number;
  max_supply: number;
}
export interface ErrorProps {
  isError: boolean;
  msg: string;
}

export interface CurrenciesProps {
  currencies: Array<CurrencyProps>;
  isLoading: boolean;
  search: string;
  setSearch: (search: string) => void;
  errorMsg: ErrorProps;
}
export interface ChartDataProps {
  setErrorMsg: (errorMsg: ErrorProps) => void;
  errorMsg: ErrorProps;
}

export interface CurrencyComProps {
  currency: CurrencyProps;
  addToWatchlist: (currency: CurrencyProps) => void;
}

export interface CurrencyDetialsProps {
  currency: CurrencyProps | undefined;
}

export interface PopupProps {
  watchlist: Array<CurrencyProps>;
  setIsOpen: (isOpen: boolean) => void;
}

export interface SearchProps {
  search: string;
  setSearch: (search: string) => void;
  handlePageClick: (props: { selected: number }) => void;
}

export interface CurrencyPageProps {
  currencies: Array<CurrencyProps>;
  isLoading: boolean;
  search: string;
  errorMsg: {
    isError: boolean;
    msg: string;
  };
  setErrorMsg: (errorMsg: { isError: boolean; msg: string }) => void;
}

export interface HandlePageClickProps {
  selected: number;
}
