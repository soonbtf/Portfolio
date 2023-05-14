<template>
  <div class="logo">
    <img src="/src/assets/logo.png" alt="logo" />
  </div>
</template>

<script setup lang="ts"></script>

<style scoped lang="scss">
.logo {
  @include jcCt-aiCt;
  width: 70px;
  & > img {
    max-width: 60px;
    max-height: 60px;
  }
}
</style>
