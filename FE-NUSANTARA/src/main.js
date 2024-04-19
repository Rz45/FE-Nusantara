import { createApp } from "vue";
import App from "../src/App.vue";
import "./assets/global.css";
import router from "./router";
const app = createApp(App);
app.use(router);
app.mount("#app");
