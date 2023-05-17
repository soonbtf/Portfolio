<template>
  <section>
    <form>
      <input type="text" v-for="input in inputs" />
    </form>
    <textarea name="" id="" cols="30" rows="10"></textarea>
  </section>
</template>

<script setup lang="ts">
import { computed } from "vue";

const inputs = computed(() => {
  return 4;
});
</script>

<style scoped lang="scss">
section {
  min-height: 500px;
  width: 100%;
  background-color: #ffffff;
  padding: 50px 2px;
}

.test {
  width: 300px;
  height: 400px;
  background-color: black;
  color: white;
}

form {
  input {
    width: 50%;
    height: 50px;
    border: 1px solid black;
  }
}
</style>
