import { shallowMount } from "@vue/test-utils";
import StockList from "../StockList.vue";

describe("StockList.vue", () => {
  it("renders props.msg when passed", () => {
    const msg = "Stock list is empty. Please add stock.";
    const wrapper = shallowMount(StockList, {
      props: { msg },
    });
    expect(wrapper.text()).toMatch(msg);
  });
});
