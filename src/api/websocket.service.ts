import store from "@/store";
import { Message } from "@/lib/types/api/Message";
import { SET_STOCKS } from "@/store/modules/stocks/constants";

let MAX_CONNECT_RETRY = 3;
const ABNORMAL_REASON_CODE = "1006";

const MESSAGE_INTERVAL = 50;
let COUNTER_MESSAGES = MESSAGE_INTERVAL;

let websocket: WebSocket | undefined = undefined;

function init (url: string): void {
  websocket = new WebSocket(url);

  websocket.onopen = (e) => {
    // sendMessage({ subscribe: "BMG9156K1018" });
  };

  websocket.onclose = (event) => {
    if (event.reason === ABNORMAL_REASON_CODE && MAX_CONNECT_RETRY >= 0) {
      init(url);
      MAX_CONNECT_RETRY--;
    }
  };

  websocket.onerror = (event) => {
    websocket?.close();
  };

  websocket.onmessage = (e) => {
    if (COUNTER_MESSAGES === 0 || COUNTER_MESSAGES === MESSAGE_INTERVAL) {
      let message = {};
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
};

function sendMessage(message: Message): void {
  if (websocket && websocket.readyState === WebSocket.OPEN) {
    websocket.send(JSON.stringify(message));
    COUNTER_MESSAGES = MESSAGE_INTERVAL;
  }
}



export { init, sendMessage }
