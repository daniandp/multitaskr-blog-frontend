<template>
    <b-container>
        <b-jumbotron class="pt-4 mt-5">
            <h1 class="mt-2 mb-4">{{ post.title }}</h1>
            <div>UID: {{ post.uid }}</div>
            <div>
                <b-icon-calendar-3></b-icon-calendar-3> Fecha:
                {{ post.created_at }}
            </div>
            <div class="mt-4">{{ post.description }}</div>
            <b-img class="mt-4" :src="post.image" alt="Post image"></b-img>
            <div class="mt-4" v-html="post.content"></div>
        </b-jumbotron>
    </b-container>
</template>

<script>
import { BIcon, BIconCalendar3 } from 'bootstrap-vue'
import { mapGetters } from 'vuex'

export default {
    async fetch({ store, params }) {
        await store.dispatch('posts/find', params.id)
    },

    computed: {
        ...mapGetters({
            post: 'posts/post',
        }),
    },

    components: {
        BIcon,
        BIconCalendar3,
    },
}
</script>
