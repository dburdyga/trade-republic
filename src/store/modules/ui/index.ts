import { Module } from "vuex";
import { Message, MessageType } from "@/lib/types/ui/Message";
import {
  CLEAR_MESSAGE,
  GET_MESSAGE,
  GET_UPDATE_INTERVAL,
  SET_ERROR_MESSAGE,
  SET_SUCCESS_MESSAGE,
  SET_UPDATE_INTERVAL,
} from "@/store/modules/ui/constants";
import { RootState } from "@/store/RootState";
import { MESSAGE_INTERVAL } from "@/api/websocket.service";

export interface UiModule {
  message: Message;
  updateInterval: number;
}

const ui: Module<UiModule, RootState> = {
  state: (): UiModule => {
    return {
      message: {} as Message,
      updateInterval: MESSAGE_INTERVAL,
    };
  },
  getters: {
    [GET_MESSAGE]: (state) => state.message,
    [GET_UPDATE_INTERVAL]: (state) => state.updateInterval,
  },
  mutations: {
    [SET_SUCCESS_MESSAGE](state, text: string) {
      state.message = { text, type: MessageType.SUCCESS };
    },
    [SET_ERROR_MESSAGE](state, text: string) {
      state.message = { text, type: MessageType.ERROR };
    },
    [SET_UPDATE_INTERVAL](state, interval: number) {
      state.updateInterval = interval;
    },
    [CLEAR_MESSAGE](state) {
      state.message = {} as Message;
    },
  },
};

export default ui;
