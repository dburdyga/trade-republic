import { shallowMount } from "@vue/test-utils";
import Input from "../Input.vue";

describe("Input.vue", () => {
  it("renders props.msg when passed", () => {
    const msg = "new message";
    const wrapper = shallowMount(Input, {
      props: { msg },
    });
    expect(wrapper.text()).toMatch(msg);
  });
});
