<template>
    <b-container>
        <b-row class="mt-5 mb-4">
            <b-col cols="3">
                <h1>Comments Table</h1>
            </b-col>
            <b-col>
                <b-button variant="info" to="/admin/comments/create"
                    >Create new comment</b-button
                >
            </b-col>
        </b-row>
        <div>
            <b-table :items="comments.data" :fields="fields">
                <template #cell(options)="data">
                    <b-button
                        variant="info"
                        size="sm"
                        :to="'/admin/comments/' + data.item.uid"
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
        await store.dispatch('comments/get')
    },

    layout: 'admin',

    data() {
        return {
            fields: [
                'uid',
                'user_id',
                'post_id',
                'content',
                'created_at',
                'options',
            ],
        }
    },

    computed: {
        ...mapGetters({
            comments: 'comments/items',
        }),
    },
}
</script>
