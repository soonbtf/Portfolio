<template>
  <div>
    <TheHeader />
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue";
import TheHeader from "@/components/header/TheHeader.vue";

const myName = ref<string>("test");

console.log(myName.value);
</script>

<style>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: "Roboto Mono", monospace;
}

#app {
  min-height: 100vh;
  background-color: #272727;
}
</style>
