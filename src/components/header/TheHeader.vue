<template>
  <header>
    <div class="container">
      <Logo />
      <HeaderNav v-if="variablesStore.isDesktop" />
      <button class="burger" v-if="!variablesStore.isDesktop">
        <Burger />
      </button>
    </div>
  </header>
</template>

<script setup lang="ts">
import { computed, watch, onMounted } from "vue";
import { useVariablesStore } from "@/stores/store";
import Logo from "@/components/header/Logo.vue";
import HeaderNav from "@/components/header/HeaderNav.vue";
import Burger from "@/components/header/Burger.vue";
const variablesStore = useVariablesStore();

// const showMenu = computed(() => {
//   return variablesStore.isDesktop;
// });
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

img {
  width: 80px;
  height: 80px;
  transform: scale(1.1);
}
</style>
