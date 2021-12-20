import store from "@/store";
import { SET_STOCKS } from "@/store/modules/stocks";

let MAX_CONNECT_RETRY = 3;
const ABNORMAL_REASON_CODE = "1006";

const MESSAGE_INTERVAL = 50;
let COUNTER_MESSAGES = MESSAGE_INTERVAL;

export const websocketService = {
  init: function (url: string) {
    const websocket = new WebSocket(url);

    websocket.onopen = (e) => {
      console.log(websocket.readyState);
      console.log(e);
      websocket.send(JSON.stringify({ subscribe: "BMG9156K1018" }));
      // websocket.send(JSON.stringify({ unsubscribe: "BMG9156K1018" }));
    };

    websocket.onclose = (event) => {
      if (event.reason === ABNORMAL_REASON_CODE && MAX_CONNECT_RETRY >= 0) {
        this.init(url);
        MAX_CONNECT_RETRY--;
      }
    };

    websocket.onerror = (event) => {
      console.log(websocket.readyState);
      console.log(event, "err");
      websocket.close();
    };

    websocket.onmessage = (e) => {
      if (COUNTER_MESSAGES === 0 || COUNTER_MESSAGES === MESSAGE_INTERVAL) {
        let message = {};
        // console.log( JSON.parse(e.data));
        try {
          message = JSON.parse(e.data);
        } catch (e) {
          console.error(e);
        }
        COUNTER_MESSAGES = MESSAGE_INTERVAL;
        store.commit(SET_STOCKS, message);
      }

      COUNTER_MESSAGES--;
    };
  },
};
