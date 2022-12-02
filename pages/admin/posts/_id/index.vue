<template>
    <b-container>
        <b-jumbotron class="pt-4 mt-5">
            <b-row align-h="end">
                <b-col cols="3">
                    <b-button-group>
                        <b-button
                            variant="success"
                            :to="'/admin/posts/' + post.uid + '/update'"
                            >Update</b-button
                        >
                        <div>
                            <b-button
                                id="show-btn"
                                variant="danger"
                                @click="$bvModal.show('bv-modal-example')"
                                >Delete</b-button
                            >

                            <b-modal id="bv-modal-example" hide-footer>
                                <template #modal-title> Delete post </template>
                                <div class="d-block text-center">
                                    <h3>
                                        Are you sure you want to delete the
                                        post?
                                    </h3>
                                </div>
                                <b-button
                                    variant="danger"
                                    class="mt-3"
                                    block
                                    :to="'/admin/posts/' + post.uid + '/delete'"
                                    @click="$bvModal.hide('bv-modal-example')"
                                    >Yes</b-button
                                >
                                <b-button
                                    class="mt-3"
                                    block
                                    @click="$bvModal.hide('bv-modal-example')"
                                    >No</b-button
                                >
                            </b-modal>
                        </div>
                    </b-button-group>
                </b-col>
            </b-row>
            <h1 class="mt-2 mb-4">{{ post.title }}</h1>
            <div>UID: {{ post.uid }}</div>
            <div>
                <b-icon-calendar-3></b-icon-calendar-3> Created At:
                {{ post.created_at }}
            </div>
            <div>
                <b-icon-calendar-3></b-icon-calendar-3> Published At:
                {{ post.published_at }}
            </div>
            <div>
                <b-icon-calendar-3></b-icon-calendar-3> Updated At:
                {{ post.updated_at }}
            </div>
            <div>
                <b-icon-calendar-3></b-icon-calendar-3> Deleted At:
                {{ post.deleted_at }}
            </div>
            <div class="mt-4">{{ post.description }}</div>
            <b-img class="mt-4" :src="post.image" alt="Post image"></b-img>
            <div class="mt-4" v-html="post.content"></div>
            <b-button class="mt-4" variant="info" :to="'/admin/posts'"
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
        await store.dispatch('posts/find', params.id)
    },

    computed: {
        ...mapGetters({
            post: 'posts/post',
        }),
    },

    methods: {
        async deletePost(postId) {
            const res = await this.$store.dispatch('posts/delete', postId)
            this.$router.push('/admin/posts/' + res.data.uid + '/delete')
        },
    },
}
</script>
