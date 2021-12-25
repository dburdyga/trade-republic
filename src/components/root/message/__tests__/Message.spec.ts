import { shallowMount } from "@vue/test-utils";
import Message from "../Message.vue";

describe("Message.vue", () => {
  it("renders props.msg when passed", () => {
    const msg = "Stock list is empty. Please add stock.";
    const wrapper = shallowMount(Message, {
      props: { msg },
    });
    expect(wrapper.text()).toMatch(msg);
  });
});
