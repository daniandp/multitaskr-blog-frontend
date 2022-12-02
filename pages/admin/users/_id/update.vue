<template>
    <b-container>
        <UserForm v-model="form" />
        <b-button variant="info" @click="onSubmit">Accept</b-button>
        <b-button variant="info" :to="'/admin/users/' + user.uid"
            >Back</b-button
        >
    </b-container>
</template>

<script>
import UserForm from '@/components/users/Form.vue'
import { mapGetters } from 'vuex'
export default {
    layout: 'admin',

    components: {
        UserForm,
    },

    async fetch({ store, params }) {
        await store.dispatch('users/find', params.id)
    },

    data() {
        return {
            form: {},
        }
    },

    created() {
        this.form = {
            ...this.user,
        }
    },

    computed: {
        ...mapGetters({
            user: 'users/user',
        }),
    },

    methods: {
        async onSubmit() {
            const res = await this.$store.dispatch('users/update', this.form)
            this.$router.push('/admin/users/' + res.data.uid)
        },
    },
}
</script>
