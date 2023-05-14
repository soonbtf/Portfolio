import { ref, computed } from "vue";
import { defineStore } from "pinia";

export const useVariablesStore = defineStore("variable", () => {
  const isDesktop = ref(true);

  return { isDesktop };
});
