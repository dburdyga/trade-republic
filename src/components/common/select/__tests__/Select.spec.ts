import { mount } from "@vue/test-utils";
import Select from "../Select.vue";

describe("Select.vue", () => {
  const wrapper = mount(Select);

  test("does a wrapper exist", () => {
    expect(wrapper.exists()).toBe(true);
  });
});
