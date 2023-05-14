<template>
  <div class="container" v-if="variablesStore.menuIsOpen">
    <a v-for="category in variablesStore.categories">
      <span> {{ category }}</span>
    </a>
  </div>
</template>

<script setup lang="ts">
import { useVariablesStore } from "@/stores/store";

const variablesStore = useVariablesStore();
</script>

<style scoped lang="scss">
.container {
  @include fdCol;
  width: 100%;
  background-color: #ffffff;
  position: absolute;
  padding: 100px 20px 0;
  height: 100%;
  gap: 50px;
  & a {
    cursor: pointer;
  }
}
.v-enter-active,
.v-leave-active {
  transition: all 0.3s ease-in-out;
}

.v-enter-from,
.v-leave-to {
  transform: translateX(100%);
}
</style>
