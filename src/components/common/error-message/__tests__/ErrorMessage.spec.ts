import { mount } from "@vue/test-utils";
import ErrorMessage from "../ErrorMessage.vue";

describe("ErrorMessage.vue", () => {
  it("should layout default slot", () => {
    const wrapper = mount(ErrorMessage, {
      slots: {
        default: "Error text message",
      },
    });

    expect(wrapper.html()).toContain("Error text message");
  });
});
