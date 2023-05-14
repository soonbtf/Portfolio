<template>
  <header>
    <div class="container">
      <Logo />
      <HeaderNav />
      <button class="burger" v-if="!showMenu">
        <Burger />
      </button>
    </div>
  </header>
</template>

<script setup lang="ts">
import { ref, computed, watch } from "vue";
import { useWindowSize } from "@vueuse/core";
import { useVariablesStore } from "@/stores/store";
import Logo from "@/components/header/Logo.vue";
import HeaderNav from "@/components/header/HeaderNav.vue";
import Burger from "@/components/header/Burger.vue";

const { width } = useWindowSize();
const variablesStore = useVariablesStore();

const showMenu = computed(() => {
  if (variablesStore.isDesktop) return true;
});

watch(
  () => width.value,
  (newValue) => {
    if (newValue > 900) {
      variablesStore.isDesktop = true;
    } else {
      variablesStore.isDesktop = false;
    }
  }
);
</script>

<style scoped lang="scss">
header {
  @include jcCt-aiCt;
  padding: 0 15px;
  min-height: 80px;
  width: 100%;
  background-color: #ffffff;
}

.container {
  position: relative;
  @include jcCt-aiCt;
  width: 1400px;
  height: 80px;
  & > nav {
    @include jcCt-aiCt;
    width: min-content;
    margin-left: auto;
    gap: 20px;
    & a {
      cursor: pointer;
    }
  }
}

.burger {
  @include jcCt-aiCt;
  min-height: 80px;
  width: 50px;
  border: none;
  background-color: transparent;
  ion-icon {
    font-size: 50px;
  }
}

img {
  width: 80px;
  height: 80px;
  transform: scale(1.1);
}
</style>
