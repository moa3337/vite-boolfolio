<script>

export default {
    name: "AppHeader",

    props: { title: String, },
};
</script>

<template>
    <!-- As a link -->
    <nav class="navbar bg-body-tertiary">
        <div class="container">
            <span class="navbar-brand">{{ title }}</span>
        </div>
    </nav>
</template>

<style lang="scss" scoped></style>