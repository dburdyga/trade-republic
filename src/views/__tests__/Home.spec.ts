import { shallowMount } from "@vue/test-utils";
import Home from "../Home.vue";

describe("Home.vue", () => {
  it("renders props.msg when passed", () => {
    const msg = "Streaming market data";
    const wrapper = shallowMount(Home, {
      props: { msg },
    });
    expect(wrapper.text()).toMatch(msg);
  });
});
