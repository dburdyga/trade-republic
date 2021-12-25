import { shallowMount } from "@vue/test-utils";
import StockTimer from "../StockTimer.vue";

describe("StockTimer.vue", () => {
  it("renders props.msg when passed", () => {
    const msg = "Next price update in 50 seconds";
    const wrapper = shallowMount(StockTimer, {
      props: { msg },
    });
    expect(wrapper.text()).toMatch(msg);
  });
});
