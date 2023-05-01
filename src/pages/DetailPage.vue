<script>
import projectCard from '../components/projectCard.vue';
import CommentList from '../components/CommentList.vue';
import axios from 'axios';

export default {
    name: 'DetailPage',

    data() {
        return {
            project: null,
        };
    },

    components: { projectCard, CommentList },

    created() {
        axios
            .get(`http://127.0.0.1:8000/api/projects/${this.$route.params.slug}`)
            .then((response) => {
                // Se la chiamata va a buon fine:
                this.project = response.data;
            })
            .catch((err) => {
                // Se la chiamata non va a buon fine:
                this.$router.push({ name: 'not-found' });
            })
            .finally(() => {
                // Comunque vada:
            });
    },
};
</script>

<template>
    <h2 class="my-3">Dettaglio del progetto {{ project?.title }}</h2>
    <projectCard v-if="project" :project="project" :isDetail="true" />
    <CommentList :project_id="project.id" />
</template>

<style lang="scss" scoped></style>