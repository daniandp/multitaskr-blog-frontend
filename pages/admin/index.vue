<template>
    <div>
        <b-container>
            <h1 class="mt-5 mb-4">Admin</h1>
            <b-row>
                <b-col>
                    <nuxt-link :to="'/admin/posts'"> Posts </nuxt-link></b-col
                >
            </b-row>
            <b-row>
                <b-col>
                    <nuxt-link :to="'/admin/users'"> Users </nuxt-link></b-col
                >
            </b-row>
            <b-row>
                <b-col>
                    <nuxt-link :to="'/admin/comments'">
                        Comments
                    </nuxt-link></b-col
                >
            </b-row>
            <b-row>
                <b-col>
                    <nuxt-link :to="'/admin/categories'">
                        Categories
                    </nuxt-link></b-col
                >
            </b-row>
        </b-container>
    </div>
</template>

<script>
export default {
    layout: 'admin',

    data() {
        return {}
    },
}
</script>
