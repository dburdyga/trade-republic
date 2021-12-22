import Button from "@/components/common/button/Button.vue";
import Input from "@/components/common/input/Input.vue";
import SvgIcon from "@/components/common/svg-icon/SvgIcon.vue";
import { App } from "vue";

const components: { [key: string]: Record<string, unknown> } = {
  Button,
  Input,
  SvgIcon,
};

function registerGlobalComponents(app: App) {
  Object.keys(components).forEach((key) => app.component(key, components[key]));
}

export default registerGlobalComponents;
