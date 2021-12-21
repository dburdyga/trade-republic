import { createStore } from "vuex";
import stocks from "@/store/modules/stocks";

export default createStore({
  modules: {
    stocks,
  },
});
