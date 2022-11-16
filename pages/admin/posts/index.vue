<template>
    <b-container>
        <h1 class="mt-5 mb-4">Posts Table</h1>
        <Table> </Table>
    </b-container>
</template>

<script>
import Table from '@/components/Table.vue'

export default {
    layout: 'admin',
    components: {
        Table,
    },
}
</script>
