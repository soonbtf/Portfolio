<template>
  <div id="container">
    <TheHeader />
    <main></main>
    <Transition>
      <SlideMenu v-if="variablesStore.menuIsOpen" />
    </Transition>
  </div>
</template>

<script setup lang="ts">
import { ref, watch } from "vue";
import { useVariablesStore } from "@/stores/store";
import { useWindowScroll } from "@vueuse/core";
import TheHeader from "@/components/header/TheHeader.vue";
import SlideMenu from "@/components/header/SlideMenu.vue";

const variablesStore = useVariablesStore();
const { x, y } = useWindowScroll();

watch(
  () => y.value,
  (newScrollHeight) => {
    variablesStore.menuIsOpen = false;
  }
);
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
  flex-direction: column;
  position: relative;
}

main {
  min-height: 1000px;
  width: 100%;
  background-color: bisque;
}
#container {
  position: relative;
  display: flex;
  flex-direction: column;
  position: relative;
  overflow: hidden;
  width: 100%;
  min-height: 100vh;
}
</style>
