<template>
    <b-form class="mt-4">
        <b-form-group id="input-group-1" label="Comment" label-for="input-1">
            <b-form-input
                id="input-1"
                v-model="form.content"
                type="text"
                placeholder="Enter the comment for the post"
                required
            ></b-form-input>
        </b-form-group>

        <b-form-group id="input-group-2" label="Post" label-for="input-2">
            <b-form-input
                id="input-2"
                v-model="form.post"
                type="text"
                placeholder="Post's content"
                readonly="readonly"
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
                content: null,
                post: null,
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
