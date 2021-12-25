import { shallowMount } from "@vue/test-utils";
import StockAdd from "../StockAdd.vue";

describe("StockAdd.vue", () => {
  it("renders props.msg when passed", () => {
    const msg = "Stock was already subscribed  Only Numbers or characters. Input length is 12. Subscribe";
    const wrapper = shallowMount(StockAdd, {
      props: { msg },
    });
    expect(wrapper.text()).toMatch(msg);
  });
});
