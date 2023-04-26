<script>
import AppHeader from './components/AppHeader.vue';

export default {
  data() {
    return {
      title: 'Vue Boolfoglio',
    };
  },

  components: { AppHeader },
};
</script>

<template>
  <AppHeader :title="title" />
  <main class="container">
    <!-- Router component-->
    <router-view></router-view>
  </main>
</template>

<style lang="scss" scoped></style>