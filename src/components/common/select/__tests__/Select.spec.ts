import { mount } from "@vue/test-utils";
import Select from "../Select.vue";
import { generateStocks } from "@/tests/mocks/mocks";
import { SelectItem } from "@/lib/types/ui/SelectItem";

type PropType = {
  label?: string;
  items: SelectItem[],
  id: string;
  placeholder?: string;
  modelValue?: string;
}

describe("Select.vue", () => {
  let wrapper: any;
  const items: SelectItem[] = generateStocks(3).map(({ isin }) => ({label: isin, value: isin}));



  const mountSelect = (props: PropType) => {
    wrapper = mount(Select, {
      props
    });
  }

  it('Should display default placeholder if provided', () => {
    let placeholder = "Select data";
    mountSelect({ id: "select-id", placeholder, items})


    const placeholderOption = wrapper.findAll('option')[0];
    const label = wrapper.find('label');
    expect(placeholderOption.text()).toContain(placeholder);
    expect(label.exists()).toBe(false);
  });

  it('Should display default label if provided', () => {
    let labelText = "Select data";
    mountSelect({ id: "select-id", items, label: labelText })


    const label = wrapper.find('label');

    expect(label.exists()).toBe(true);
    expect(label.text()).toContain(labelText);
  });

  it('Should display select options', () => {
    mountSelect({ id: "select-id", items })

    const expectedLength = items.length + 1; // default placeholder option
    const options = wrapper.findAll('option');

    expect(options).toHaveLength(expectedLength);
    expect(options[1].text()).toContain(items[0].label);
    expect(options[2].text()).toContain(items[1].label);
    expect(options[3].text()).toContain(items[2].label);
  });

  it('Should select item and emit event', async () => {
    mountSelect({ id: "select-id", items })

    const select = wrapper.find('select');
    const options = select.findAll('option');
    await options.at(1).setSelected();
    wrapper.find('select').trigger('change');

    expect(wrapper.emitted()).toHaveProperty('update:modelValue');
    expect(wrapper.emitted('update:modelValue')[0]).toEqual([items[0].label]);
  });
});
