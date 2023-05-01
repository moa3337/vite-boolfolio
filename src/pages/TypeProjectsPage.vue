<script>
import projectList from '../components/ProjectList.vue';
//import AppHeader from './components/AppHeader.vue';

export default {
    name: 'TypeProjectsPage',
    components: { projectList },
};
</script>

<template>
    <projectList @changePage="fetchProjects" title="by Type" />
</template>

<style lang="scss" scoped></style>