import { mount } from "@vue/test-utils";
import Input from "../Input.vue";

describe("Input.vue", () => {
  let wrapper: any;

  const defaultProps = {
    id: "input-id",
    placeholder: "placeholder",
    label: "Select data",
    isValid: true,
  };

  const mountInput = (props = defaultProps) => {
    wrapper = mount(Input, {
      props
    });
  }

  it("Should display default placeholder for input if provided", () => {
    mountInput({ label: "", placeholder: defaultProps.placeholder, id: defaultProps.id, isValid: true });
    const label = wrapper.find("label");
    const input = wrapper.find("input")

    expect(input.attributes().placeholder).toEqual(defaultProps.placeholder);
    expect(label.exists()).toBe(false);
  });

  it("Should display default label for input if provided", () => {
    mountInput();
    const label = wrapper.find('label');

    expect(label.exists()).toBe(true);
    expect(label.text()).toContain(defaultProps.label);
  });

  it("Should have invalid class if input is invalid", () => {
    mountInput({
      label: defaultProps.label,
      placeholder: defaultProps.placeholder,
      id: defaultProps.id,
      isValid: false
    });

    expect(wrapper.find('input').classes()).toContain('is-invalid');
  });

  it('Should emit event when typing', async () => {
    const value = "value";
    mountInput();
    const input = wrapper.find('input');
    input.element.value = value;
    wrapper.find('input').trigger('input');

    expect(wrapper.emitted()).toHaveProperty('update:modelValue');
    expect(wrapper.emitted('update:modelValue')[0]).toEqual([value]);
  });
});
