<script>
import { computed } from 'vue';


export default {
    props: {
        project: Object,
    },

    computed: {
        abstract() {
            return this.project.text.slice(0, 180) + "...";
        },
    },
};
</script>

<template>
    <div>
        <div class="card">
            <div class="card-header">
                <h3>{{ project.title }}</h3>
            </div>
            <div class="card-body">
                {{ project.text }}
            </div>
            <div class="card-footer">
                Progetto creato il:
                {{ project.created_at }}
            </div>
        </div>
    </div>
</template>

<style lang="scss" scoped></style>