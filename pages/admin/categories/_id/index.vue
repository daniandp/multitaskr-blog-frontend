<template>
    <b-container>
        <b-jumbotron class="pt-4 mt-5">
            <b-row align-h="end">
                <b-col cols="3">
                    <b-button-group>
                        <b-button
                            variant="success"
                            :to="
                                '/admin/categories/' + category.uid + '/update'
                            "
                            >Update</b-button
                        >
                        <b-button
                            variant="danger"
                            @click="deletePost(category.uid)"
                            >Delete</b-button
                        >
                    </b-button-group>
                </b-col>
            </b-row>
            <h1 class="mt-2 mb-4">{{ category.name }}</h1>
            <div>UID: {{ category.uid }}</div>
            <b-img
                class="mt-4 mb-4"
                :src="category.image"
                alt="Category image"
            ></b-img>
            <div>
                <b-icon-calendar-3></b-icon-calendar-3> Created At:
                {{ category.created_at }}
            </div>
            <div>
                <b-icon-calendar-3></b-icon-calendar-3> Updated At:
                {{ category.updated_at }}
            </div>
            <b-button class="mt-4" variant="info" :to="'/admin/categories'"
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
        await store.dispatch('categories/find', params.id)
    },

    computed: {
        ...mapGetters({
            category: 'categories/category',
        }),
    },

    methods: {
        async deletePost(categoryID) {
            await this.$store.dispatch('categories/delete', categoryID)
            console.log(categoryID, 'método delete de categories')
        },
    },
}
</script>
