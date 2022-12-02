<template>
    <b-card
        :title="post.title"
        :img-src="post.image"
        img-alt="post image"
        img-top
        tag="article"
        style="max-width: 20rem"
        class="mb-2 mt-4"
    >
        <b-card-text>{{ post.description }}</b-card-text>

        <b-button :to="post.uid" variant="primary">Read More</b-button>
        <template #footer>
            <b-row>
                <b-col>
                    <small class="text-muted">
                        <b-icon-person></b-icon-person>
                        User
                    </small>
                </b-col>
                <b-col>
                    <small class="text-muted">
                        <b-icon-calendar-3></b-icon-calendar-3>
                        {{ post.updated_at }}
                    </small>
                </b-col>
            </b-row>
        </template>
    </b-card>
</template>

<script>
import { BIcon, BIconCalendar3, BIconPerson } from 'bootstrap-vue'

export default {
    props: ['post'],

    components: {
        BIcon,
        BIconCalendar3,
        BIconPerson,
    },
}
</script>
