<template>
    <b-container>
        <b-jumbotron class="pt-4 mt-5">
            <b-row align-h="end">
                <b-col cols="3">
                    <b-button-group>
                        <b-button
                            variant="success"
                            :to="'/admin/comments/' + comment.uid + '/update'"
                            >Update</b-button
                        >
                        <b-button
                            variant="danger"
                            @click="deletePost(comment.uid)"
                            >Delete</b-button
                        >
                    </b-button-group>
                </b-col>
            </b-row>
            <h1 class="mt-2 mb-4">{{ comment.content }}</h1>
            <div>UID: {{ comment.uid }}</div>
            <div>User: {{ comment.user }}</div>
            <div>User ID: {{ comment.user_id }}</div>
            <div>Post: {{ comment.post }}</div>
            <div>Post ID: {{ comment.post_id }}</div>
            <div>
                <b-icon-calendar-3></b-icon-calendar-3> Created At:
                {{ comment.created_at }}
            </div>
            <div>
                <b-icon-calendar-3></b-icon-calendar-3> Published At:
                {{ comment.published_at }}
            </div>
            <div>
                <b-icon-calendar-3></b-icon-calendar-3> Updated At:
                {{ comment.update_at }}
            </div>
            <div>
                <b-icon-calendar-3></b-icon-calendar-3> Deleted At:
                {{ comment.deleted_at }}
            </div>
            <b-button class="mt-4" variant="info" :to="'/admin/comments'"
                >Back</b-button
            >
        </b-jumbotron>
    </b-container>
</template>

<script>
import { BIcon, BIconCalendar3 } from 'bootstrap-vue'
import { mapGetters } from 'vuex'

export default {
    layout: 'admin',

    components: {
        BIcon,
        BIconCalendar3,
    },

    async fetch({ store, params }) {
        await store.dispatch('comments/find', params.id)
    },

    computed: {
        ...mapGetters({
            comment: 'comments/comment',
        }),
    },

    methods: {
        async deletePost(commentId) {
            await this.$store.dispatch('comments/delete', commentId)
            console.log(commentId, 'método delete de comments')
        },
    },
}
</script>
