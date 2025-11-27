import { createVaporApp } from "vue";
import "./style.css";
import App from "./App.vue";
const app = createVaporApp(App as any);
app.mount("#app");
