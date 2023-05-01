<script>
import axios from 'axios';

export default {
    name: 'CommetForm',

    data() {
        return {
            comment: {
                name: '',
                email: '',
                message: '',
            },
            errors: [],
            success: false,
        };
    },

    props: {
        project_id: Number,
    },

    methods: {
        sendComment() {
            this.errors = [];
            this.success = false;

            const comment = {
                project_id: this.project_id,
                name: this.comment.name,
                email: this.comment.email,
                message: this.comment.message,
            };

            axios.post('http://127.0.0.1:8000/api/comments', comment).then((res) => {

                this.comment.name = '';
                this.comment.email = '';
                this.comment.message = '';

                this.success = true;

                this.$emit('addedComment');
            })
                .catch((err) => {
                    const response_errors = err.response.data.errors;
                    for (const field in response_errors) {
                        this.errors.push(response_errors[field][0]);
                    }
                })
                .finally(() => { });
        },
    },
};
</script>

<template>
    <h3 class="text-center">Lascia un commento</h3>
    <!-- Allert di errore -->
    <div v-if="errors.length" class="alert alert-danger" role="alert">
        <ul>
            <li v-for="error in errors">{{ erroe }}</li>
        </ul>
    </div>
    <!-- Allert successo -->
    <div v-if="success" class="alert alert-success" role="alert">
        Il commento è stato aggiunto con successo
    </div>

    <form @submit.prevent="sendComment">
        <label for="commet_name">Nome:</label>
        <input type="text" id="commet_name" v-model="comment.name">

        <label for="commet_email">Email:</label>
        <input type="email" id="commet_email" v-model="comment.email">

        <label for="comment_message">Commento:</label>
        <textarea v-model="comment.message" id="comment_message"></textarea>

        <button type="submit" class="btn">Invia</button>

    </form>
</template>

<style lang="scss" scoped></style>