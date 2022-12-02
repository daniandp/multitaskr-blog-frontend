<template>
    <b-form class="mt-4">
        <b-form-group
            id="input-group-1"
            label="User's name"
            label-for="input-1"
        >
            <b-form-input
                id="input-1"
                v-model="form.name"
                type="text"
                placeholder="Enter a name for user"
                required
            ></b-form-input>
        </b-form-group>

        <b-form-group
            id="input-group-2"
            label="User's email"
            label-for="input-2"
        >
            <b-form-input
                id="input-2"
                v-model="form.email"
                type="email"
                placeholder="Enter a email for user"
                required
            ></b-form-input>
        </b-form-group>
        <b-form-group
            id="input-group-3"
            label="User's phone"
            label-for="input-3"
        >
            <b-form-input
                id="input-3"
                v-model="form.phone"
                type="text"
                placeholder="Enter a phone for user"
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
                email: null,
                phone: null,
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
