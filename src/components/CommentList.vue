<script>
import axios from 'axios';
import CommetForm from './CommentForm.vue';

export default {
    name: 'CommetList',

    data() {
        return {
            Comments: {
                list: [],
                links: [],
            },
        };
    },

    props: {
        project_id: Number,
    },

    emits: ['addedComment'],

    components: { CommetForm },

    methods: {
        fetchComments() {
            axios.get(`http://127.0.0.1:8000/api/project/${this.project_id}/comments`)
                .then(res => {
                    this.comments.list = res.data.data;
                });
        },
    },

    created() {
        this.fetchComments();
    },
};
</script>

<template>
    <ul>
        <li v-for="comment in comments.list">
            {{ comment.name }} <br> {{ comment.message }}
        </li>
    </ul>
    <CommetForm :project_id="project_id" @addedComment="fetchComments" />
</template>

<style lang="scss" scoped></style>