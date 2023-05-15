<template>
  <button>
    <span>GET IN TOUCH</span>
  </button>
</template>

<script setup lang="ts"></script>

<style scoped lang="scss">
button {
  width: 100%;
  height: 50px;
  padding: 10px 20px;
  margin-top: 20px;
  background-color: transparent;
  border: 1px solid #212529;
  cursor: pointer;
}

@media screen and (min-width: 768px) {
  button {
    width: 200px;
  }
}
</style>
