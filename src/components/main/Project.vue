<template>
  <article v-for="project in projects">
    <h2 class="project__title">{{ project.name }}</h2>
    <p class="project__descp">{{ project.description }}</p>
    <ul class="project__techno">
      <li></li>
    </ul>
  </article>
</template>

<script setup lang="ts">
import { ref, computed, onMounted } from "vue";
import { useI18n } from "vue-i18n";
const { t } = useI18n();

const projects = computed(() => {
  const result = [];
  for (let i = 1; i <= 2; i++) {
    result.push({
      name: t(`projects.project${i}.title`),
      description: t(`projects.project${i}.description`),
    });
  }
  return result;
});

function test() {
  console.log(t(`projects.project1.technos.t1`));
}

test();
// const technosProject = computed(() => {
//   const result = [];
//   for (let i = 1; i <= 2; i++) {
//     result.push({
//       name: t(`projects.project${i}.techno`),
//     });
//   }
//   return result;
// });
</script>

<style scoped></style>
