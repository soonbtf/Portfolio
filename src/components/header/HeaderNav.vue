<template>
  <nav ref="nav" :class="isMenuOpen ? 'nav--slider' : 'nav--header'">
    <a v-for="category in categories">{{ category }}</a>
  </nav>
</template>

<script setup lang="ts">
import { ref, computed } from "vue";
import { useVariablesStore } from "@/stores/store";
import { useI18n } from "vue-i18n";
const { t } = useI18n();

const variablesStore = useVariablesStore();
const nav = ref<HTMLElement | null>(null);

const isMenuOpen = computed(() => {
  return variablesStore.menuIsOpen;
});

const key = ["about", "experience", "projects", "contact"];

const categories = computed(() => {
  return key.map((key) => {
    return t(`categories.${key}`);
  });
});
</script>

<style scoped lang="scss">
.nav--header {
  @include jcCt-aiCt;
  width: max-content;
  gap: 30px;
}
.nav--slider {
  @include fdCol;
  width: 100%;
  background-color: #ffffff;
  position: absolute;
  padding: 20px 20px 0;
  margin-top: 80px;
  height: 100%;
  gap: 50px;
}

a {
  @include jcCt-aiCt;
  flex-wrap: nowrap;
  cursor: pointer;
}
</style>
