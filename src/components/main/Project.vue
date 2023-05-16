<template>
  <article
    v-for="(project, index) in projects"
    :style="{ backgroundColor: colors[index] }"
  >
    <div class="text">
      <h2 class="project__title">{{ project.name }}</h2>
      <p class="project__descp">{{ project.description }}</p>
      <ul class="project__techno">
        <li v-for="techno in project.technos">{{ techno }}</li>
      </ul>
    </div>
    <div class="image">
      <img :src="project.img" alt="" srcset="" />
    </div>
  </article>
</template>

<script setup lang="ts">
import { computed } from "vue";
import { data } from "@/assets/i18n";
import { useI18n } from "vue-i18n";

const { t } = useI18n();
const colors = ["#154392", "#222222"];

const projects = computed(() => {
  return Object.keys(data.en.projects).map((projectKey) => {
    const project =
      data.en.projects[projectKey as keyof typeof data.en.projects];
    return {
      name: t(`projects.${projectKey}.title`),
      description: t(`projects.${projectKey}.description`),
      img: t(`projects.${projectKey}.img`),
      technos: Object.keys(project.technos).map((technoKey) =>
        t(`projects.${projectKey}.technos.${technoKey}`)
      ),
    };
  });
});
</script>

<style scoped lang="scss">
article {
  @include fdCol;
  position: relative;
  width: 100%;
  height: 700px;
  padding: 80px 2%;
  color: white;
  & > text {
    @include fdCol;
    flex-wrap: wrap;
    min-width: 100%;
  }
  & h2 {
    font-size: 3rem;
    margin-bottom: 20px;
  }
  & ul {
    display: flex;
    margin-top: 20px;
    list-style-type: none;
    gap: 20px;
    li {
      color: rgb(32, 32, 32);
      background: linear-gradient(
        90deg,
        rgb(187, 161, 169) 0%,
        rgba(122, 140, 231, 1) 100%
      );
      padding: 10px 20px;
      border-radius: 5px;
      font-size: 0.8rem;
      transition: 300ms;
      font-weight: 700;
      cursor: pointer;
      &:hover {
        transform: scale(1.1);
      }
    }
  }
  & .image {
    @include jcCt;
    width: 100%;
    max-width: 500px;
    margin-top: 100px;
    margin-left: calc(50% - 250px);
    & > img {
      left: calc(50% - 250px);
      object-fit: cover;
      width: 100%;
    }
  }
}

@media screen and (min-width: 768px) {
  article {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    & div {
      max-width: 49%;
      height: 100%;
    }
  }
}
</style>
