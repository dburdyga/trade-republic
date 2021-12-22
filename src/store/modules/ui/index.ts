import { Module } from "vuex";
import { Message, MessageType } from "@/lib/types/ui/Message";
import {
  CLEAR_MESSAGE,
  GET_MESSAGE,
  SET_ERROR_MESSAGE,
  SET_SUCCESS_MESSAGE,
} from "@/store/modules/ui/constants";
import { RootState } from "@/store/RootState";

export interface UiModule {
  message: Message;
}

const ui: Module<UiModule, RootState> = {
  state: (): UiModule => {
    return {
      message: {} as Message,
    };
  },
  getters: {
    [GET_MESSAGE]: (state) => state.message,
  },
  mutations: {
    [SET_SUCCESS_MESSAGE](state, text: string) {
      state.message = { text, type: MessageType.SUCCESS };
    },
    [SET_ERROR_MESSAGE](state, text: string) {
      state.message = { text, type: MessageType.ERROR };
    },
    [CLEAR_MESSAGE](state) {
      state.message = {} as Message;
    },
  },
};

export default ui;
