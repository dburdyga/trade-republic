/* ts-ignore */
import { mount } from "@vue/test-utils";
import ErrorMessage from "@/components/common/error-message/ErrorMessage.vue";
import StockAdd from "../StockAdd.vue";
import SvgIcon from "@/components/common/svg-icon/SvgIcon.vue";
import Button from "@/components/common/button/Button.vue";
import Input from "@/components/common/input/Input.vue";
import Select from "@/components/common/select/Select.vue";
import store from "@/store";
import { SUBSCRIBE_STOCK } from "@/store/modules/stocks/constants";

describe("StockAdd.vue", () => {
  let wrapper: any;
  let input: any;

  beforeEach(() => {
    wrapper = mount(StockAdd, {
      props: {},
      global: {
        components: {
          SvgIcon,
          Button,
          Input,
          ErrorMessage,
          Select,
        },
      },
    });

    input = wrapper.find("input");
  });

  it("should provide select with default options and input option", () => {
    const select = wrapper.find("Select");
    const errorMessage = wrapper.find(".error-message");
    const selectOption = select.findAll("option");

    expect(select.exists()).toBe(true);
    expect(input.exists()).toBe(true);
    expect(errorMessage.exists()).toBe(true);
    expect(errorMessage.classes()).toContain("is-hidden");
    expect(selectOption).toHaveLength(3); // 2 default options and placeholder
    expect(selectOption[1].attributes().value).toEqual("DE000BASF111");
    expect(selectOption[2].attributes().value).toEqual("BMG9156K1018");
  });

  it("should validate input", async () => {
    const ERROR_MESSAGE = "Only Numbers or characters. Input length is 12.";
    const value = "value";
    input.element.value = value;

    await input.trigger("input");

    const errorMessages = wrapper.findAll(".error-message");
    expect(errorMessages[1].classes(".is-hidden")).toBe(false);
    expect(errorMessages[1].text()).toContain(ERROR_MESSAGE);
  });

  it("should not trigger event if input is invalid", async () => {
    const value = "BMG9156K10181";
    input.element.value = value;

    await input.trigger("input");

    const button = wrapper.find("button");
    await button.trigger("click");

    expect(wrapper.emitted()).not.toHaveProperty("click");
  });

  it("should not trigger event if input is valid", async () => {
    const value = "BMG9156K1018";
    const dispatchMock = jest
      .spyOn(store, "dispatch")
      .mockImplementation(() => Promise.resolve());
    input.element.value = value;

    await input.trigger("input");

    const button = wrapper.find("button");
    await button.trigger("click");

    expect(wrapper.emitted()).toHaveProperty("click");
    expect(dispatchMock).toHaveBeenCalledWith(SUBSCRIBE_STOCK, value);
  });
});
