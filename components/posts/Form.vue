<template>
    <b-form class="mt-4">
        <b-form-group
            id="input-group-1"
            label="Post's title"
            label-for="input-1"
        >
            <b-form-input
                id="input-1"
                v-model="form.title"
                type="text"
                placeholder="Enter a title for post"
                required
            ></b-form-input>
        </b-form-group>

        <b-form-group
            id="input-group-2"
            label="Post's description"
            label-for="input-2"
        >
            <b-form-input
                id="input-2"
                v-model="form.description"
                type="text"
                placeholder="Enter a description for post"
                required
            ></b-form-input>
        </b-form-group>
        <b-form-group
            id="input-group-3"
            label="Post's content"
            label-for="input-3"
        >
            <b-form-input
                id="input-3"
                v-model="form.content"
                type="text"
                placeholder="Enter post content"
                required
            ></b-form-input>
        </b-form-group>
        <b-form-group
            id="input-group-4"
            label="Post's image"
            label-for="input-4"
        >
            <b-form-input
                id="input-4"
                v-model="form.image"
                type="text"
                placeholder="Enter a image for post"
                required
            ></b-form-input>
        </b-form-group>
    </b-form>
</template>

<script>
export default {
    props: {
        value: {
            type: Object,
            default: {},
        },
    },

    data() {
        return {
            form: {
                title: null,
                description: null,
                content: null,
                image: null,
                ...this.value,
            },
        }
    },

    watch: {
        form: {
            deep: true,
            handler() {
                this.$emit('input', this.form)
            },
        },
    },
}
</script>
