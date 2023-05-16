import { ref, computed } from "vue";
import { defineStore } from "pinia";

export const useVariablesStore = defineStore("variable", () => {
  const isDesktop = ref(true);
  const menuIsOpen = ref(false);
  const language = ref("EN");
  const categories = {
    about: ref<HTMLElement | null>(null),
    experience: ref<HTMLElement | null>(null),
    projects: ref<HTMLElement | null>(null),
    contact: ref<HTMLElement | null>(null),
  };

  return { isDesktop, menuIsOpen, language, categories };
});
