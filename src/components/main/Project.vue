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
        <div class="button">
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
section {
  @include jcCt;
  width: 100%;
  height: 650px;
  max-height: 650px;
  padding: 2%;
}
article {
  @include fdCol-aiCt;
  position: relative;
  max-width: 1400px;
  height: 100%;
  gap: 50px;
  padding: 0 2%;
  & > .text {
    @include fdCol;
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
        width: max-content;
        width: 100px;
        text-align: center;
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
        cursor: pointer;
        &:hover {
          transform: scale(1.1);
        }
      }
    }
  }
  & > img {
    @include jcCt;
    width: 100%;
    max-width: 500px;
    width: 100%;
  }
  .button {
    width: 275px;
    align-self: center;
  }
}

@media screen and (min-width: 900px) {
  article {
    display: flex;
    flex-direction: row;
    align-items: center;
    gap: 2%;
    & ul {
      @include fdCol;
    }
    & .text {
      max-width: 35%;
    }
    & img {
      margin: 0;
      // height: 150%;
    }
  }
}

@media screen and (min-width: 1300px) {
  article {
    gap: 200px;
    // padding: 80px 20%;
    & ul {
      @include fdCol;
    }

    & img {
      flex: 1;
      margin: 0;
      object-fit: contain;
    }
  }
}
</style>
