<template>
    <b-container>
        <b-row class="mt-5 mb-4">
            <b-col cols="3">
                <h1>Users Table</h1>
            </b-col>
            <b-col>
                <b-button variant="info" to="/admin/users/create"
                    >Create new user</b-button
                >
            </b-col>
        </b-row>
        <div>
            <b-table :items="users.data" :fields="fields">
                <template #cell(options)="data">
                    <b-button
                        variant="info"
                        size="sm"
                        :to="'/admin/users/' + data.item.uid"
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
        await store.dispatch('users/get')
    },

    layout: 'admin',

    data() {
        return {
            fields: ['uid', 'name', 'email', 'created_at', 'options'],
        }
    },

    computed: {
        ...mapGetters({
            users: 'users/items',
        }),
    },
}
</script>
