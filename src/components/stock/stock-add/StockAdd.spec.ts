import { shallowMount } from "@vue/test-utils";
import StockAdd from "@/StockAdd.vue";

describe("StockAdd.vue", () => {
  it("renders props.msg when passed", () => {
    const msg = "new message";
    const wrapper = shallowMount(StockAdd, {
      props: { msg },
    });
    expect(wrapper.text()).toMatch(msg);
  });
});
