<template>
    <b-container>
        <CategoryForm v-model="form" />
        <b-button variant="info" @click="onSubmit">Accept</b-button>
        <b-button variant="info" :to="'/admin/categories/' + category.uid"
            >Back</b-button
        >
    </b-container>
</template>

<script>
import CategoryForm from '@/components/categories/Form.vue'
import { mapGetters } from 'vuex'
export default {
    layout: 'admin',

    components: {
        CategoryForm,
    },

    async fetch({ store, params }) {
        await store.dispatch('categories/find', params.id)
    },

    data() {
        return {
            form: {},
        }
    },

    created() {
        this.form = {
            ...this.category,
        }
    },

    computed: {
        ...mapGetters({
            category: 'categories/category',
        }),
    },

    methods: {
        async onSubmit() {
            const res = await this.$store.dispatch(
                'categories/update',
                this.form
            )
            this.$router.push('/admin/categories/' + res.data.uid)
        },
    },
}
</script>
