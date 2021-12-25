import { mount } from "@vue/test-utils";
import Button from "../Button.vue";

describe("Button.vue", () => {
  test("layout default slot", () => {
    const wrapper = mount(Button, {
      slots: {
        default: "Button text"
      }
    })

    expect(wrapper.html()).toContain("Button text")
  })
});
