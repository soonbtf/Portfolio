<template>
  <header>
    <div class="container">
      <Logo />
      <HeaderNav v-if="variablesStore.isDesktop" />
      <button class="burger" v-if="!variablesStore.isDesktop">
        <Burger />
      </button>
    </div>
    <div class="colorBand" ref="band"></div>
  </header>
</template>

<script setup lang="ts">
import { ref, computed, watch, onMounted } from "vue";
import { useVariablesStore } from "@/stores/store";
import { useWindowScroll } from "@vueuse/core";
import Logo from "@/components/header/Logo.vue";
import HeaderNav from "@/components/header/HeaderNav.vue";
import Burger from "@/components/header/Burger.vue";
const variablesStore = useVariablesStore();

// const showMenu = computed(() => {
//   return variablesStore.isDesktop;
// });
const { y } = useWindowScroll();
const band = ref<HTMLElement | null>(null);

const checkValue = (value: number | boolean): void => {
  if (typeof value === "number") {
    value === 0
      ? band.value?.classList.remove("colorBandWidth")
      : band.value?.classList.add("colorBandWidth");
  } else {
    if (y.value !== 0) return;
    value
      ? band.value?.classList.add("colorBandWidth")
      : band.value?.classList.remove("colorBandWidth");
  }
};

watch(
  () => y.value,
  (newValue) => {
    checkValue(newValue);
  }
);

watch(
  () => variablesStore.menuIsOpen,
  (newValue) => {
    checkValue(newValue);
  }
);
</script>

<style scoped lang="scss">
header {
  @include jcCt-aiCt;
  position: fixed;
  padding: 0 15px;
  min-height: 80px;
  height: 80px;
  width: 100%;
  z-index: 1000;
  color: #212529;
  // color: white;
  // background-color: #ffffff;
  .container {
    position: relative;
    @include jcCt-aiCt;
    width: 1400px;
    height: 80px;
  }
}

.burger {
  @include jcCt-aiCt;
  min-height: 80px;
  flex: 1;
  width: 50px;
  border: none;
  background-color: transparent;
}

.colorBand {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 80px;
  background-color: #ffffff;
  box-shadow: 0 0 8px 0 rgba(0, 0, 0, 0.2);
  transition: 300ms ease-in-out;
  width: 0;
  z-index: -1;
}

.colorBandWidth {
  width: 100%;
  box-shadow: none;
}
</style>
