<script>
import ProjectCard from './projectCard.vue';

export default {
    props: {
        projects: Array,
        tile: String,
    },

    components: { ProjectCard },
};
</script>

<template>
    <div class="container">
        <h1>{{ title }}</h1>
        <div v-if="projects.length" class="row g-4">
            <ProjectCard v-for="project in projects" :key="project.id" :project="project" class="col-md-4 d-flex" />
        </div>
        <h2 v-else class="">
            In questo momento non ci sono progetti.
            Verranno aggiunti a breve.
        </h2>
    </div>
</template>

<style lang="scss" scoped></style>