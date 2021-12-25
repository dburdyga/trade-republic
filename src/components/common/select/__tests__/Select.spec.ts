import { mount } from "@vue/test-utils";
import Select from "../Select.vue";

describe("Select.vue", () => {
  it('displays id, label and placeholder', () => {
    const wrapper = mount(Select, {
      props: {
        id: "select-id",
        placeholder: "Select data",
        label: "Select text",
        // items:
      }
    })

    expect(wrapper.text()).toContain("Select text")
  })
});
