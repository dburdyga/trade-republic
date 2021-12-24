import Button from "@/components/common/button/Button.vue";
import ErrorMessage from "@/components/common/error-message/ErrorMessage.vue";
import Input from "@/components/common/input/Input.vue";
import SvgIcon from "@/components/common/svg-icon/SvgIcon.vue";
import Select from "@/components/common/select/Select.vue";

import { App } from "vue";

const components: { [key: string]: Record<string, unknown> } = {
  Button,
  ErrorMessage,
  Input,
  SvgIcon,
  Select,
};

// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
function registerGlobalComponents(app: App) {
  Object.keys(components).forEach((key) => app.component(key, components[key]));
}

export default registerGlobalComponents;
