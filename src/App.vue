<template>
  <div id="container">
    <TheHeader />
    <main>
      <About />
      <span class="WIP">WIP</span>
    </main>
    <Transition>
      <SlideMenu v-if="variablesStore.menuIsOpen" />
    </Transition>
  </div>
</template>

<script setup lang="ts">
import { watch, onMounted } from "vue";
import { useVariablesStore } from "@/stores/store";
import { useWindowSize } from "@vueuse/core";
import { useWindowScroll } from "@vueuse/core";
import TheHeader from "@/components/header/TheHeader.vue";
import SlideMenu from "@/components/header/SlideMenu.vue";
import About from "@/components/main/About.vue";

const variablesStore = useVariablesStore();
const { width } = useWindowSize();
const { y } = useWindowScroll();

const checkWidth = (width: number): void => {
  variablesStore.isDesktop = width > 768 ? true : false;
  variablesStore.menuIsOpen = false;
};

watch(() => width.value, checkWidth);
watch(
  () => y.value,
  () => {
    variablesStore.menuIsOpen = false;
  }
);

onMounted(() => checkWidth(width.value));
</script>

<style lang="scss">
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
  @include fdCol-aiCt;
  min-height: 1000px;
  width: 100%;
  background-color: rgb(41, 40, 40);
  & > span {
    margin-top: 200px;
    font-size: 50px;
    font-family: "Courier New", Courier, monospace;
    color: rgb(235, 235, 235);
  }
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
