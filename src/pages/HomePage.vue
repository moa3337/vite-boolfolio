<script>
import projectList from '../components/ProjectList.vue';
//import AppHeader from './components/AppHeader.vue';

export default {
    name: 'HomePage',
    components: { projectList },
};
</script>

<template>
    <projectList @changePage="fetchProjects" title="My Projects" />
</template>

<style lang="scss" scoped></style>