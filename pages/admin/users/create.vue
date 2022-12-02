<template>
    <b-container class="pt-4 mt-5">
        <h1>Create a new user</h1>
        <UserForm v-model="form" />
        <b-button variant="info" @click="onSubmit">Accept</b-button>
        <b-button variant="info" to="/admin/users/">Back</b-button>
    </b-container>
</template>

<script>
import UserForm from '@/components/users/Form.vue'
export default {
    layout: 'admin',

    components: {
        UserForm,
    },

    data() {
        return {
            form: {},
        }
    },

    methods: {
        async onSubmit() {
            const res = await this.$store.dispatch('users/create', this.form)
            this.$router.push('/admin/users/' + res.data.uid)
        },
    },
}
</script>
