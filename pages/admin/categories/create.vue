<template>
    <b-container class="pt-4 mt-5">
        <h1>Create a new category</h1>
        <CategoryForm v-model="form" />
        <b-button variant="info" @click="onSubmit">Accept</b-button>
        <b-button variant="info" to="/admin/categories">Back</b-button>
    </b-container>
</template>

<script>
import CategoryForm from '@/components/categories/Form.vue'
export default {
    layout: 'admin',

    components: {
        CategoryForm,
    },

    data() {
        return {
            form: {},
        }
    },

    methods: {
        async onSubmit() {
            const res = await this.$store.dispatch(
                'categories/create',
                this.form
            )
            this.$router.push('/admin/categories/' + res.data.uid)
        },
    },
}
</script>
