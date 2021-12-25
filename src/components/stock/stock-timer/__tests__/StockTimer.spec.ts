import { mount } from "@vue/test-utils";
import StockTimer from "../StockTimer.vue";

describe("StockTimer.vue", () => {
  it('displays timer', () => {
    const wrapper = mount(StockTimer, {
      props: {
        timer: 50
      }
    })

    expect(wrapper.text()).toContain("Next price update in 50 seconds")
  })
});
