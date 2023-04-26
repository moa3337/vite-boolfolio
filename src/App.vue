<script>
import axios from 'axios';
import AppHeader from './components/AppHeader.vue';
import projectList from './components/ProjectList.vue';

export default {
  data() {
    return {
      title: 'Vue Boolfoglio',
      projects: [],
    };
  },

  components: { AppHeader, projectList },

  methods: {
    fetchProjects() {
      axios.get('http://127.0.0.1:8000/api/projects')
        .then((response) => {
          this.projects = response.data;
        })
    },
  },

  created() {
    this.fetchProjects();
  },
};
</script>

<template>
  <AppHeader :title="title" />
  <h1>
    {{ title }}
  </h1>
  <projectList :projects="projects" title="My Projects" />
</template>

<style lang="scss" scoped></style>