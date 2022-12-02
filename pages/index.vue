<template>
    <b-container>
        <h1 class="mt-5 mb-4">Post</h1>
        <b-row>
            <b-col cols="4" v-for="post in posts.data" :key="post.uid">
                <Card :post="post" />
            </b-col>
        </b-row>
    </b-container>
</template>

<script>
import Card from '@/components/posts/Card.vue'
import { mapGetters } from 'vuex'

export default {
    async fetch({ store }) {
        await store.dispatch('posts/get')
    },

    components: {
        Card,
    },

    computed: {
        ...mapGetters({
            posts: 'posts/items',
        }),
    },
}
</script>
