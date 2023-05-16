<template>
  <section>
    <h2>{{ $t("about.title") }}</h2>
    <p v-for="paragraphe in paragraphes">{{ paragraphe }}</p>
  </section>
</template>

<script setup lang="ts">
import { computed } from "vue";
import { useI18n } from "vue-i18n";
const { t } = useI18n();

const paragraphes = computed(() => {
  const result = [];
  for (let i = 1; i <= 5; i++) {
    result.push(t(`about.introduction.p${i}`));
  }
  return result;
});
</script>

<style scoped lang="scss">
section {
  @include fdCol;
  max-width: 1000px;
  gap: 20px;
  margin: 100px 0 0 0;
  padding: 0 40px;
  h2 {
    font-size: 45px;
    font-weight: 800;
    color: rgb(90, 102, 170);
  }
  p {
    font-size: 14px;
    line-height: 2rem;
  }
}
</style>
