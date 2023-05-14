<template>
  <div class="icon">
    <div class="line" v-for="div in 3"></div>
  </div>
</template>

<script setup lang="ts"></script>

<style scoped lang="scss">
.icon {
  display: flex;
  flex-direction: column;
  width: 35px;
  height: 100%;
  gap: 8px;
  cursor: pointer;
}
.line {
  width: 35px;
  height: 3px;
  background-color: black;
}
</style>
