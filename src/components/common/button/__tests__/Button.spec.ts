import { mount } from "@vue/test-utils";
import Button from "../Button.vue";

describe("Button.vue", () => {
  it("Display text passed via slots", () => {
    const text = "Button text";
    const wrapper = mount(Button, {
      slots: {
        default: text,
      },
    });

    expect(wrapper.html()).toContain(text);
  });

  it("should have correct id and type if provided", () => {
    const id = "button-id";
    const type = "submit";
    const wrapper = mount(Button, {
      props: {
        id,
        type,
      },
    });

    expect(wrapper.attributes().id).toEqual(id);
    expect(wrapper.attributes().type).toEqual(type);
  });
});
