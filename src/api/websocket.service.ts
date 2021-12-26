import store from "@/store";
import { Message } from "@/lib/types/api/Message";
import { SET_STOCKS } from "@/store/modules/stocks/constants";
import {
  SET_ERROR_MESSAGE,
  SET_UPDATE_INTERVAL,
} from "@/store/modules/ui/constants";

let MAX_CONNECT_RETRY = 3;
const ABNORMAL_REASON_CODE = "1006";

export const MESSAGE_INTERVAL = 50;
let COUNTER_MESSAGES = MESSAGE_INTERVAL;

let websocket: WebSocket | undefined = undefined;

function init(url: string): void {
  websocket = new WebSocket(url);

  websocket.onclose = (event) => {
    if (event.reason === ABNORMAL_REASON_CODE && MAX_CONNECT_RETRY >= 0) {
      init(url);
      MAX_CONNECT_RETRY--;
    } else {
      store.commit(
        SET_ERROR_MESSAGE,
        `Connection was closed. Reason: ${event.reason}`
      );
    }
  };

  websocket.onerror = (event) => {
    websocket?.close();
    store.commit(SET_ERROR_MESSAGE, `Connection was closed. Reason: ${event}`);
  };

  /**
   * COUNTER_MESSAGES used to throttle coming messages
   * we want to prevent performance heat and not re-render
   * store and ui every time we receive a message
   * @param e
   */
  websocket.onmessage = (e) => {
    if (COUNTER_MESSAGES % 20 === 0) {
      store.commit(SET_UPDATE_INTERVAL, COUNTER_MESSAGES);
    }
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
}

/**
 * Reset COUNTER_MESSAGES to default message
 *
 * @param message
 */
function sendMessage(message: Message): void {
  if (websocket && websocket.readyState === WebSocket.OPEN) {
    websocket.send(JSON.stringify(message));
    COUNTER_MESSAGES = MESSAGE_INTERVAL;
  }
}

export { init, sendMessage };
