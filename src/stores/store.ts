import { ref, computed } from "vue";
import { defineStore } from "pinia";

export const useVariablesStore = defineStore("variable", () => {
  const isDesktop = ref(true);
  const menuIsOpen = ref(false);
  const language = ref("EN");

  return { isDesktop, menuIsOpen, language };
});
