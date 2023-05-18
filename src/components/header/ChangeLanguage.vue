<template>
  <div>
    <button @click="changeLanguage">
      {{ variablesStore.language }}
    </button>
    <div class="divider"></div>
  </div>
</template>

<script setup lang="ts">
import { useVariablesStore } from "@/stores/store";
import { useI18n } from "vue-i18n";
const { locale } = useI18n();
const variablesStore = useVariablesStore();

const changeLanguage = (): void => {
  locale.value === "en" ? (locale.value = "fr") : (locale.value = "en");
  variablesStore.language = locale.value.toUpperCase();
};
</script>

<style scoped lang="scss">
div {
  @include jcCt-aiCt;
  height: 100%;
}

button {
  font-size: 16px;
  background-color: transparent;
  border: none;
  cursor: pointer;
}

.divider {
  width: 1px;
  height: 30px;
  background-color: #212529;
  margin: 0 10px;
}
</style>
