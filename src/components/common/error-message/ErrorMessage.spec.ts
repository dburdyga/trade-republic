import { shallowMount } from "@vue/test-utils";
import ErrorMessage from "@/ErrorMessage.vue";

describe("ErrorMessage.vue", () => {
  it("renders props.msg when passed", () => {
    const msg = "new message";
    const wrapper = shallowMount(ErrorMessage, {
      props: { msg },
    });
    expect(wrapper.text()).toMatch(msg);
  });
});
