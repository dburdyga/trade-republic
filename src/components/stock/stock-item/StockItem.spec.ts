import { shallowMount } from "@vue/test-utils";
import StockItem from "@/StockItem.vue";

describe("StockItem.vue", () => {
  it("renders props.msg when passed", () => {
    const msg = "new message";
    const wrapper = shallowMount(StockItem, {
      props: { msg },
    });
    expect(wrapper.text()).toMatch(msg);
  });
});
