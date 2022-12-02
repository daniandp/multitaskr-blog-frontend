<template>
    <b-form class="mt-4">
        <b-form-group
            id="input-group-1"
            label="Category's name"
            label-for="input-1"
        >
            <b-form-input
                id="input-1"
                v-model="form.name"
                type="text"
                placeholder="Enter a name category"
                required
            ></b-form-input>
        </b-form-group>

        <b-form-group
            id="input-group-2"
            label="Category's description"
            label-for="input-2"
        >
            <b-form-input
                id="input-2"
                v-model="form.description"
                type="text"
                placeholder="Enter a description for category"
                required
            ></b-form-input>
        </b-form-group>

        <b-form-group
            id="input-group-3"
            label="Category's image"
            label-for="input-3"
        >
            <b-form-input
                id="input-3"
                v-model="form.image"
                type="text"
                placeholder="Enter a image category"
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
                name: null,
                description: null,
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
