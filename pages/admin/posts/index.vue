<template>
    <b-container>
        <b-row class="mt-5 mb-4">
            <b-col cols="3">
                <h1>Posts Table</h1>
            </b-col>
            <b-col>
                <b-button variant="info" to="/admin/posts/create"
                    >Create new post</b-button
                >
            </b-col>
        </b-row>
        <div>
            <b-table :items="posts.data" :fields="fields">
                <template #cell(options)="data">
                    <b-button
                        variant="info"
                        size="sm"
                        :to="'/admin/posts/' + data.item.uid"
                        >View More</b-button
                    >
                </template>
            </b-table>
        </div>
    </b-container>
</template>

<script>
import { mapGetters } from 'vuex'
export default {
    async fetch({ store }) {
        await store.dispatch('posts/get')
    },

    layout: 'admin',

    data() {
        return {
            fields: [
                'uid',
                'title',
                'slug',
                'description',
                'created_at',
                'options',
            ],
        }
    },

    computed: {
        ...mapGetters({
            posts: 'posts/items',
            post: 'posts/post',
        }),
    },
}
</script>
