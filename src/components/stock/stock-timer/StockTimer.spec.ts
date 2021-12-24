import { shallowMount } from "@vue/test-utils";
import StockTimer from "@/StockTimer.vue";

describe("StockTimer.vue", () => {
  it("renders props.msg when passed", () => {
    const msg = "new message";
    const wrapper = shallowMount(StockTimer, {
      props: { msg },
    });
    expect(wrapper.text()).toMatch(msg);
  });
});
