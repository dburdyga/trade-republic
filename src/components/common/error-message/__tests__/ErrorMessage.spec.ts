import { mount } from "@vue/test-utils";
import ErrorMessage from "../ErrorMessage.vue";

describe("ErrorMessage.vue", () => {
  const wrapper = mount(ErrorMessage);

  test("does a wrapper exist", () => {
    expect(wrapper.exists()).toBe(true);
  });
});
