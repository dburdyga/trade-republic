import { Module } from "vuex";
import { Stock } from "@/lib/types/models/Stock";
import { Message } from "@/lib/types/api/Message";
import { sendMessage } from "@/api/websocket.service";
import { GET_STOCKS, SET_STOCKS, SUBSCRIBE_STOCK, UNSUBSCRIBE_STOCK } from "@/store/modules/stocks/constants";

export interface StockModule {
  stocks: Stock[];
}



const stocks: Module<StockModule, StockModule> = {
  state: (): StockModule => {
    return {
      stocks: [],
    };
  },
  actions: {
    [SUBSCRIBE_STOCK]({ commit }, isin: string) {
      sendMessage({ subscribe: isin });
    },
    [UNSUBSCRIBE_STOCK]({ commit }, isin: string) {
      sendMessage({ unsubscribe: isin });
    },
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
