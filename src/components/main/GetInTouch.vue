<template>
  <button ref="button" :class="type === 'repo' ? 'repo' : null">
    <span> {{ text }}</span>
  </button>
</template>

<script setup lang="ts">
const props = defineProps({
  text: String,
  type: String,
});
</script>

<style scoped lang="scss">
button {
  width: 200px;
  height: 50px;
  padding: 10px 20px;
  font-size: 16px;
  background-color: transparent;
  border: 1px solid #212529;
  cursor: pointer;
}

.repo {
  border-color: rgb(253, 253, 253);
  color: rgb(255, 255, 255);
}

@media screen and (min-width: 768px) {
  button {
    width: 200px;
  }
}
</style>
