<template>
  <article v-for="project in projects">
    <h2 class="project__title">{{ project.name }}</h2>
    <p class="project__descp">{{ project.description }}</p>
    <ul class="project__techno">
      <li v-for="techno in project.technos">{{ techno }}</li>
    </ul>
  </article>
</template>

<script setup lang="ts">
import { computed } from "vue";
import { data } from "@/assets/i18n";
import { useI18n } from "vue-i18n";
const { t } = useI18n();

const projects = computed(() => {
  return Object.keys(data.en.projects).map((projectKey) => {
    const project =
      data.en.projects[projectKey as keyof typeof data.en.projects];
    return {
      name: t(`projects.${projectKey}.title`),
      description: t(`projects.${projectKey}.description`),
      technos: Object.keys(project.technos).map((technoKey) =>
        t(`projects.${projectKey}.technos.${technoKey}`)
      ),
    };
  });
});
</script>

<style scoped></style>
