import { Module } from "vuex";
import { Stock } from "@/lib/types/Stock";

export interface StockModule {
  stocks: Stock[];
}

export const GET_STOCKS = "stocks/GET_STOCKS";
export const SET_STOCKS = "stocks/SET_STOCKS";

const stocks: Module<StockModule, StockModule> = {
  state: (): StockModule => {
    return {
      stocks: [],
    };
  },
  getters: {
    [GET_STOCKS]: (state: StockModule) => state.stocks,
  },
  mutations: {
    [SET_STOCKS](state, payload: Stock) {
      const stocks = [...state.stocks];
      const stockIndex = stocks.findIndex(({ isin }) => isin === payload.isin);

      if (stockIndex > -1) {
        stocks[stockIndex] = payload;
      } else {
        stocks.push(payload);
      }

      state.stocks = stocks;
    },
  },
};

export default stocks;
