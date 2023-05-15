<template>
  <section>
    <p>{{ $t("about.title") }}</p>
    <h2>MEHDI BIRLAKHDAR</h2>
    <p>
      {{ $t("about.introduction") }}
    </p>
    <GetInTouch />
  </section>
</template>

<script setup lang="ts">
import GetInTouch from "@/components/main/GetInTouch.vue";
</script>

<style scoped lang="scss">
section {
  @include fdCol;
  padding: 120px 5% 10% 30px;
  background-color: #c1d5fa;
  color: #212529;
  & p {
    font-size: 1.1rem;
    line-height: 1.5rem;
    margin-bottom: 1rem;
  }
  & h2 {
    font-size: 3.5rem;
    line-height: 3.5rem;
    margin-bottom: 1rem;
    margin-top: 0.5rem;
  }
}

@media screen and (min-width: 768px) {
  section {
    padding-right: 5%;
  }
}

@media screen and (min-width: 1000px) {
  section {
    padding-left: 20%;
    padding-right: 15%;
    padding-bottom: 5%;
  }
}
</style>
