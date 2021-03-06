import { Module } from "vuex";
import { Stock } from "@/lib/types/models/Stock";
import { sendMessage } from "@/api/websocket.service";
import {
  GET_STOCKS,
  REMOVE_STOCK,
  SET_STOCKS,
  SUBSCRIBE_STOCK,
  UNSUBSCRIBE_STOCK,
} from "@/store/modules/stocks/constants";
import { RootState } from "@/store/RootState";
import { SET_SUCCESS_MESSAGE } from "@/store/modules/ui/constants";
import store from "@/store";

export interface StockModule {
  stocks: Stock[];
}

const stocks: Module<StockModule, RootState> = {
  state: (): StockModule => {
    return {
      stocks: [],
    };
  },
  actions: {
    [SUBSCRIBE_STOCK]({ commit }, isin: string) {
      sendMessage({ subscribe: isin });
      commit(SET_STOCKS, { isin, price: 0, ask: 0, bid: 0 });
      store.commit(
        SET_SUCCESS_MESSAGE,
        "Message was added. Stock can appear in couple of seconds"
      );
    },
    [UNSUBSCRIBE_STOCK]({ commit }, isin: string) {
      sendMessage({ unsubscribe: isin });
      commit(REMOVE_STOCK, isin);
      commit(SET_SUCCESS_MESSAGE, "Stock was removed");
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
    [REMOVE_STOCK](state, isin: string) {
      const stocks = [...state.stocks];
      const index = stocks.findIndex((stock) => stock.isin === isin);
      if (index > -1) {
        stocks.splice(index, 1);
      }

      state.stocks = stocks;
    },
  },
};

export default stocks;
