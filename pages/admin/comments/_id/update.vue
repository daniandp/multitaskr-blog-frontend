<template>
    <b-container>
        <CommentForm v-model="form" />
        <b-button variant="info" @click="onSubmit">Accept</b-button>
        <b-button variant="info" :to="'/admin/comments/' + comment.uid"
            >Back</b-button
        >
    </b-container>
</template>

<script>
import CommentForm from '@/components/comments/Form.vue'
import { mapGetters } from 'vuex'
export default {
    layout: 'admin',

    components: {
        CommentForm,
    },

    async fetch({ store, params }) {
        await store.dispatch('comments/find', params.id)
    },

    data() {
        return {
            form: {},
        }
    },

    created() {
        this.form = {
            ...this.comment,
        }
    },

    computed: {
        ...mapGetters({
            comment: 'comments/comment',
        }),
    },

    methods: {
        async onSubmit() {
            const res = await this.$store.dispatch('comments/update', this.form)
            this.$router.push('/admin/comments/' + res.data.uid)
        },
    },
}
</script>
