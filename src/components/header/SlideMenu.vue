<template>
  <HeaderNav v-if="variablesStore.menuIsOpen" />
</template>

<script setup lang="ts">
import { useVariablesStore } from "@/stores/store";
import HeaderNav from "@/components/header/HeaderNav.vue";

const variablesStore = useVariablesStore();
</script>

<style scoped lang="scss">
.v-enter-active,
.v-leave-active {
  transition: all 0.3s ease-in-out;
}

.v-enter-from,
.v-leave-to {
  transform: translateX(100%);
}
</style>
