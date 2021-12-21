import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import "./styles/styles.scss";
import registerGlobalComponents from "@/components/common";

const app = createApp(App)
registerGlobalComponents(app)

app.use(store).use(router).mount("#app");
