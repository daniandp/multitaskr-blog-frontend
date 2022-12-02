<template>
    <b-container class="pt-4 mt-5">
        <h1>Create a new post</h1>
        <PostForm v-model="form" />
        <b-button variant="info" @click="onSubmit">Accept</b-button>
        <b-button variant="info" to="/admin/posts">Back</b-button>
    </b-container>
</template>

<script>
import PostForm from '@/components/posts/Form.vue'
export default {
    layout: 'admin',

    components: {
        PostForm,
    },

    data() {
        return {
            form: {},
        }
    },

    methods: {
        async onSubmit() {
            const res = await this.$store.dispatch('posts/create', this.form)
            this.$router.push('/admin/posts/' + res.data.uid)
        },
    },
}
</script>
