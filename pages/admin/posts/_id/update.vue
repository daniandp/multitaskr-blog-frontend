<template>
    <b-container>
        <PostForm v-model="form" />
        <b-button variant="info" @click="onSubmit">Accept</b-button>
        <b-button variant="info" :to="'/admin/posts/' + post.uid"
            >Back</b-button
        >
    </b-container>
</template>

<script>
import PostForm from '@/components/posts/Form.vue'
import { mapGetters } from 'vuex'
export default {
    layout: 'admin',
    components: {
        PostForm,
    },

    async fetch({ store, params }) {
        await store.dispatch('posts/find', params.id)
    },

    data() {
        return {
            form: {},
        }
    },

    created() {
        this.form = {
            ...this.post,
        }
    },

    computed: {
        ...mapGetters({
            post: 'posts/post',
        }),
    },

    methods: {
        async onSubmit() {
            const res = await this.$store.dispatch('posts/update', this.form)
            this.$router.push('/admin/posts/' + res.data.uid)
        },
    },
}
</script>
