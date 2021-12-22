export enum MessageType {
  ERROR = "error",
  SUCCESS = "success",
}

export interface Message {
  text: string;
  type: MessageType;
}
