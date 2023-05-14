<template>
  <section>
    <p>Hi, my name is</p>
    <h2>MEHDI BIRLAKHDAR</h2>
    <p>A web developer from France</p>
  </section>
</template>

<script setup lang="ts"></script>

<style scoped lang="scss">
section {
  @include fdCol;
  padding: 100px 40px 0;
  background-color: #ef402f;
  height: 700px;
  gap: 30px;
  color: #212529;
  & p {
    font-size: 1.2rem;
    line-height: 1.5rem;
    margin-bottom: 1rem;
  }
  & h2 {
    font-size: 4rem;
    line-height: 4rem;
    margin-bottom: 1rem;
    margin-top: 0.5rem;
  }
}
</style>
