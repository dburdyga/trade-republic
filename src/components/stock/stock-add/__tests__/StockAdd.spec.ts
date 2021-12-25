import { mount } from "@vue/test-utils";
import StockAdd from "../StockAdd.vue";

describe("StockAdd.vue", () => {
  const wrapper = mount(StockAdd);

  test("does a wrapper exist", () => {
    expect(wrapper.exists()).toBe(true);
  });
});
