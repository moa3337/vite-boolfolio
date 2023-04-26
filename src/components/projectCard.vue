<script>
import { computed } from 'vue';


export default {
    props: {
        project: Object,
        isDetail: Boolean,
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
                <div v-if="isDetail">
                    Tipologia:
                    <span v-if="project.type" class="badge" :style="{ backgroundColor: project.type.color }">
                        {{ project.type.label }}
                    </span>
                </div>
            </div>
            <div class="card-body">
                <div v-if="isDetail">
                    Tecnologia
                    <span v-for=" technology  in  project.technologies " class="badge rounded-pill me-2"
                        :style="{ backgroundColor: technology.color }">
                        {{ technology.label }}
                    </span>
                    <hr>
                </div>
                {{ project.text }}
            </div>
            <div class="card-footer">
                Progetto creato il:
                {{ project.created_at }}
                <router-link v-if="!isDetail" :to="{
                        name: 'project-detail',
                        params: { slug: project.slug, },
                    }
                    " class="btn btn-primary btn-sm">
                    Dettaglio
                </router-link>
            </div>
        </div>
    </div>
</template>

<style lang="scss" scoped></style>