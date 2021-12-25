import { mount } from "@vue/test-utils";
import Button from "../Button.vue";

type PropType = {
  id?: string;
  type?: string;
}

describe("Button.vue", () => {
  let wrapper: any;

  test("Display text passed via slots", () => {
    const text = "Button text";
    const wrapper = mount(Button, {
      slots: {
        default: text
      }
    })

    expect(wrapper.html()).toContain(text);
  });

  it('should have correct id and type if provided', () => {
    let id = "button-id";
    let type = "submit";
    const wrapper = mount(Button, {
      props: {
        id,
        type,
      }
    });

    expect(wrapper.attributes().id).toEqual(id);
    expect(wrapper.attributes().type).toEqual(type);
  })
});
