<script>
import { router } from '../router';


export default {
    name: "AppHeader",
    props: { title: String, },
    components: { router }
};
</script>

<template>
    <!-- As a link -->
    <nav class="navbar bg-body-tertiary">
        <div class="container">
            <span class="navbar-brand">{{ title }}</span>
            <div>
                <router-link :to="{ name: 'home' }" class="nav-link">
                    Homepage
                </router-link>
                <router-link :to="{ name: 'contacts' }" class="nav-link">
                    Contacts
                </router-link>
            </div>
        </div>
    </nav>
</template>

<style lang="scss" scoped></style>