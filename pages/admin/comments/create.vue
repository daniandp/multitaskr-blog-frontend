<template>
    <b-container class="pt-4 mt-5">
        <h1>Create a new comment</h1>
        <CommentForm v-model="form" />
        <b-button variant="info" @click="onSubmit">Accept</b-button>
        <b-button variant="info" to="/admin/comments">Back</b-button>
    </b-container>
</template>

<script>
import CommentForm from '@/components/comments/Form.vue'
export default {
    layout: 'admin',

    components: {
        CommentForm,
    },

    data() {
        return {
            form: {},
        }
    },

    methods: {
        async onSubmit() {
            const res = await this.$store.dispatch('comments/create', this.form)
            this.$router.push('/admin/comments/' + res.data.uid)
        },
    },
}
</script>
