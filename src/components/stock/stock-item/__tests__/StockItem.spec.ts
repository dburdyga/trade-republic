import { mount } from "@vue/test-utils";
import StockItem from "../StockItem.vue";

describe("StockItem.vue", () => {
  const wrapper = mount(StockItem);

  test("does a wrapper exist", () => {
    expect(wrapper.exists()).toBe(true);
  });
});
