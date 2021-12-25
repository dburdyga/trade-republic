import { mount } from "@vue/test-utils";
import App from "../App.vue";

describe("App.vue", () => {
  const wrapper = mount(App);

  test("does a wrapper exist", () => {
    expect(wrapper.exists()).toBe(true);
  });
});
