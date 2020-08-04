import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import state from "./state";

import "./index.css";

createApp(App).provide("state", state).use(router).mount("#app");
