import { createApp } from "vue";
import { createPinia } from "pinia";
import { createI18n } from "vue-i18n";
import App from "@/App.vue";
import { data } from "@/i18n";

const app = createApp(App);
const pinia = createPinia();

const i18n = createI18n({
  locale: "en",
  messages: data,
  legacy: false,
});

app.use(pinia);
app.use(i18n);
app.mount("#app");
