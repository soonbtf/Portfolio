import { ref, computed } from "vue";
import { defineStore } from "pinia";

export const useVariablesStore = defineStore("variable", () => {
  const isDesktop = ref(true);
  const menuIsOpen = ref(false);
  const categories = ref<string[]>([
    "ABOUT",
    "EXPERIENCE",
    "PROJECTS",
    "CONTACT",
  ]);

  return { isDesktop, menuIsOpen, categories };
});
