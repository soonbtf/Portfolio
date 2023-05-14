<template>
  <nav>
    <a v-for="category in categories">
      <span> {{ category }}</span>
    </a>
  </nav>
</template>

<script setup lang="ts">
import { ref, computed, watch } from "vue";

const categories = ref<string[]>([
  "ABOUT",
  "EXPERIENCE",
  "PROJECTS",
  "CONTACT",
]);
</script>

<style scoped></style>
