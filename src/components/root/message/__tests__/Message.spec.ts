import { mount, shallowMount } from "@vue/test-utils";
import Message from "../Message.vue";
import App from "@/App.vue";

describe("Message.vue", () => {
  const wrapper = mount(Message);

  test("does a wrapper exist", () => {
    expect(wrapper.exists()).toBe(true);
  });
});
