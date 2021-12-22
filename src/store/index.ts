import { createStore } from "vuex";
import stocks from "@/store/modules/stocks";
import ui from "@/store/modules/ui";

export default createStore({
  modules: {
    stocks,
    ui,
  },
});
