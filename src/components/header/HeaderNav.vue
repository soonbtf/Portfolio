<template>
  <nav :class="isMenuOpen ? 'nav--slider' : 'nav--header'">
    <a @click="scrollTo(category.key)" v-for="category in categories">{{
      category.value
    }}</a>
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

const scrollTo = (el: string): void => {
  // https://www.w3schools.com/typescript/typescript_keyof.php
  const element = el.toLowerCase() as keyof typeof variablesStore.categories;
  const htmlElement = variablesStore.categories[element];
  htmlElement?.scrollIntoView({
    behavior: "smooth",
    block: "start",
  });
};

const categories = computed(() => {
  const result = [];
  for (let i = 1; i <= 3; i++) {
    result.push({
      key: `c${i}`,
      value: t(`categories.c${i}`),
    });
  }
  return result;
});
</script>

<style scoped lang="scss">
.nav--header {
  @include jcCt-aiCt;
  width: max-content;
  gap: 30px;
  a {
    position: relative;
    @include jcCt-aiCt;
    flex-wrap: nowrap;
    cursor: pointer;
    transition: all 0.3s ease 0s;
    &:hover {
      color: white;
    }
    &::before {
      content: "";
      width: 110%;
      position: absolute;
      bottom: -5px;
      height: 0;
      z-index: 1;
      // background: linear-gradient(90deg, rgb(45, 161, 239), rgb(36, 60, 80));
      background: linear-gradient(90deg, rgb(106, 167, 207), rgb(57, 104, 165));
      transition: all 0.3s ease 0s;
      z-index: -1;
    }
    &:hover::before {
      height: 30px;
    }
  }
}
.nav--slider {
  @include fdCol;
  width: 100%;
  background-color: #ffffff;
  position: fixed;
  padding: 20px 20px 0;
  height: 100%;
  margin-top: 80px;
  gap: 50px;
  a {
    position: relative;
    @include jcCt-aiCt;
    flex-wrap: nowrap;
    cursor: pointer;
  }
}
</style>
