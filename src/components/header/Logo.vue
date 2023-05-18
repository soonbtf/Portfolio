<template>
  <div class="logo">
    <img src="/public/assets/logo.png" alt="logo" />
  </div>
</template>

<script setup lang="ts"></script>

<style scoped lang="scss">
.logo {
  @include jcCt-aiCt;
  width: 70px;
  & > img {
    max-width: 55px;
    max-height: 55px;
  }
}
</style>
