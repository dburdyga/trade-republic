import { shallowMount } from "@vue/test-utils";
import Select from "@/Select.vue";

describe("Select.vue", () => {
  it("renders props.msg when passed", () => {
    const msg = "new message";
    const wrapper = shallowMount(Select, {
      props: { msg },
    });
    expect(wrapper.text()).toMatch(msg);
  });
});
