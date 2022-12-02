<template>
    <b-container>
        <b-jumbotron class="pt-4 mt-5">
            <b-row align-h="end">
                <b-col cols="3">
                    <b-button-group>
                        <b-button
                            variant="success"
                            :to="'/admin/users/' + user.uid + '/update'"
                            >Update</b-button
                        >
                        <b-button variant="danger" @click="deletePost(user.uid)"
                            >Delete</b-button
                        >
                    </b-button-group>
                </b-col>
            </b-row>
            <h1 class="mt-2 mb-4">{{ user.name }}</h1>
            <div>UID: {{ user.uid }}</div>
            <div>User email: {{ user.email }}</div>
            <div>User phone: {{ user.phone }}</div>
            <div>
                <b-icon-calendar-3></b-icon-calendar-3> Email Verified At:
                {{ user.email_verified_at }}
            </div>
            <div>
                <b-icon-calendar-3></b-icon-calendar-3> Created At:
                {{ user.created_at }}
            </div>
            <div>
                <b-icon-calendar-3></b-icon-calendar-3> Updated At:
                {{ user.updated_at }}
            </div>
            <b-button class="mt-4" variant="info" :to="'/admin/users'"
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
        await store.dispatch('users/find', params.id)
    },

    computed: {
        ...mapGetters({
            user: 'users/user',
        }),
    },

    methods: {
        async deletePost(userId) {
            await this.$store.dispatch('users/delete', userId)
            console.log(userId, 'método delete de users')
        },
    },
}
</script>
