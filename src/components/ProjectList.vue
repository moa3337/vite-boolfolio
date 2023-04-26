<script>
import axios from 'axios';
import ProjectCard from './projectCard.vue';
import AppPagination from './AppPagination.vue';

export default {
    data() {
        return {
            projects: {
                data: [],
                pages: [],
            },
        };
    },

    props: {
        tile: String,
    },

    components: { ProjectCard, AppPagination },

    emits: ['changePage'],

    methods: {
        fetchProjects(endpoint = null) {
            if (!endpoint) endpoint = 'http://127.0.0.1:8000/api/projects'
            axios.get(endpoint)
                .then((response) => {
                    this.projects.data = response.data.data;
                    this.projects.pages = response.data.links;
                })
                .catch((err) => {
                    this.error = err.message;
                });
        },
    },

    created() {
        this.fetchProjects();
    },
};
</script>

<template>
    <div>
        <h1>{{ title }}</h1>
        <div v-if="error" class="alert alert-danger" role="alert">
            {{ erroe }}
        </div>
        <div v-else-if="projects.data.length" class="row g-4">
            <ProjectCard v-for="project in projects.data" :key="project.id" :project="project" :isDetail="false"
                class="col-md-4 d-flex" />
        </div>
        <h2 v-else class="">
            In questo momento non ci sono progetti.
            Verranno aggiunti a breve.
        </h2>

        <AppPagination :pages="projects.pages" @changePage="fetchProjects" />
    </div>
</template>

<style lang="scss" scoped></style>