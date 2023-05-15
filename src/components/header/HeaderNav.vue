<template>
  <div ref="nav">
    <a v-for="category in variablesStore.categories">
      <span> {{ category }}</span>
    </a>
  </div>
</template>

<script setup lang="ts">
import { ref, watch, onMounted } from "vue";
import { useVariablesStore } from "@/stores/store";

const variablesStore = useVariablesStore();
const nav = ref<HTMLElement | null>(null);

const defineClass = (value: boolean): void => {
  if (value) {
    nav.value?.classList.remove("nav--header");
    nav.value?.classList.add("nav--slider");
  } else {
    nav.value?.classList.remove("nav--slider");
    nav.value?.classList.add("nav--header");
  }
};

watch(() => variablesStore.menuIsOpen, defineClass);

onMounted(() => {
  defineClass(variablesStore.menuIsOpen);
});
</script>

<style scoped lang="scss">
.nav--header {
  @include jcCt-aiCt;
  width: min-content;
  margin-left: auto;
  gap: 20px;
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
  cursor: pointer;
}
</style>
