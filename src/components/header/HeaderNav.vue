<template>
  <nav>
    <a v-for="category in variablesStore.categories">
      <span> {{ category }}</span>
    </a>
  </nav>
</template>

<script setup lang="ts">
import { ref } from "vue";
import { useVariablesStore } from "@/stores/store";

const variablesStore = useVariablesStore();
</script>

<style scoped lang="scss">
nav {
  @include jcCt-aiCt;
  width: min-content;
  margin-left: auto;
  gap: 20px;
  & a {
    cursor: pointer;
  }
}
</style>
