import { mount } from "@vue/test-utils";
import Message from "../Message.vue";

describe("Message.vue", () => {
  const wrapper = mount(Message);

  test("does a wrapper exist", () => {
    expect(wrapper.exists()).toBe(true);
  });
});
