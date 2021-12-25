import { mount } from "@vue/test-utils";
import Input from "../Input.vue";

describe("Input.vue", () => {
  it('displays id, label and placeholder', () => {
    const wrapper = mount(Input, {
      props: {
        id: "input-id",
        placeholder: "Input data",
        label: "Input text"
      }
    })

    expect(wrapper.text()).toContain("Input text")
  })
});
