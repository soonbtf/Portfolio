<template>
  <section
    v-for="(project, index) in projects"
    :style="{ backgroundColor: colors[index] }"
  >
    <article>
      <div class="text">
        <h2 class="project__title">{{ project.name }}</h2>
        <p class="project__descp">{{ project.description }}</p>
        <ul class="project__techno">
          <li v-for="techno in project.technos">{{ techno }}</li>
        </ul>
        <div
          class="button"
          @click="openNewTab(project.link)"
          :title="project.link"
        >
          <GetInTouch :text="'View project'" :type="'repo'" />
        </div>
      </div>
      <img :src="project.img" alt="" srcset="" />
    </article>
  </section>
</template>

<script setup lang="ts">
import { computed } from "vue";
import { data } from "@/assets/i18n";
import { useI18n } from "vue-i18n";
import GetInTouch from "@/components/main/GetInTouch.vue";

const { t } = useI18n();
const colors = ["#001F37", "#222222"];

const openNewTab = (link: string): void => {
  window.open(link, "_blank");
};

const projects = computed(() => {
  return Object.keys(data.en.projects).map((projectKey) => {
    const project =
      data.en.projects[projectKey as keyof typeof data.en.projects];
    return {
      name: t(`projects.${projectKey}.title`),
      description: t(`projects.${projectKey}.description`),
      img: t(`projects.${projectKey}.img`),
      link: t(`projects.${projectKey}.link`),
      technos: Object.keys(project.technos).map((technoKey) =>
        t(`projects.${projectKey}.technos.${technoKey}`)
      ),
    };
  });
});
</script>

<style scoped lang="scss">
section {
  @include jcCt;
  width: 100%;
  height: 750px;
  max-height: 750px;
  padding: 2%;
}
article {
  @include fdCol-aiCt;
  position: relative;
  width: 1400px;
  height: 100%;
  gap: 50px;
  padding: 0 2%;
  & > .text {
    @include fdCol-aiCt;
    width: 100%;
    flex-wrap: wrap;
    color: white;
    gap: 10px;
    & h2 {
      font-size: 3rem;
      margin-bottom: 20px;
    }
    & ul {
      @include jcCt;
      flex-wrap: wrap;
      margin-top: 20px;
      list-style-type: none;
      gap: 20px;
      li {
        @include jcCt;
        width: max-content;
        width: 100px;
        color: rgb(32, 32, 32);
        background: linear-gradient(
          90deg,
          rgb(240, 220, 226) 0%,
          rgb(112, 131, 230) 100%
        );
        padding: 10px 20px;
        border-radius: 5px;
        font-size: 0.8rem;
        transition: 300ms;
        font-weight: 700;
      }
    }
  }
  & > img {
    @include jcCt;
    width: 100%;
    max-width: 700px;
    width: 100%;
  }
  .button {
    width: 200px;
    align-self: center;
  }
}

@media screen and (min-width: 1180px) {
  article {
    display: flex;
    flex-direction: row;
    & .text {
      display: flex;
      width: 50%;
      min-width: 350px;
      & h2 {
        font-size: 3rem;
      }
    }
    & img {
      flex: 1;
      margin: 0;
      object-fit: contain;
    }
  }
}
</style>
