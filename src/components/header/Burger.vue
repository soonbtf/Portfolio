<template>
  <div class="icon" @click="openMenu">
    <div class="line" v-for="line in 3"></div>
  </div>
</template>

<script setup lang="ts">
import { useVariablesStore } from "@/stores/store";
const variablesStore = useVariablesStore();
const openMenu = (): void => {
  variablesStore.menuIsOpen = !variablesStore.menuIsOpen;
};
</script>

<style scoped lang="scss">
.icon {
  @include fdCol;
  margin-left: auto;
  width: 35px;
  height: 100%;
  gap: 8px;
  cursor: pointer;
}
.line {
  width: 35px;
  height: 3px;
  background-color: black;
}
</style>
