<template>
    <b-container>
        <b-row class="mt-5 mb-4">
            <b-col cols="3">
                <h1>Categories Table</h1>
            </b-col>
            <b-col>
                <b-button variant="info" to="/admin/categories/create"
                    >Create new category</b-button
                >
            </b-col>
        </b-row>
        <div>
            <b-table :items="categories.data" :fields="fields">
                <template #cell(options)="data">
                    <b-button
                        variant="info"
                        size="sm"
                        :to="'/admin/categories/' + data.item.uid"
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
        await store.dispatch('categories/get')
    },

    layout: 'admin',

    data() {
        return {
            fields: ['uid', 'name', 'created_at', 'options'],
        }
    },

    computed: {
        ...mapGetters({
            categories: 'categories/items',
        }),
    },
}
</script>
