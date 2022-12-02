export const state = () => ({
    items: {
        data: [],
        links: {},
        meta: {}
    },

    category: {}

})

export const getters = {
    items(state) {
        return state.items;
    },

    category(state) {
        return state.category;
    }

}

export const mutations = {
    items(state, data) {
        state.items = data;
    },

    category(state, data) {
        state.category = data;
    }

}

export const actions = {
    async get({ commit }) {
        const res = await this.$axios.get('/api/categories.json');
        commit('items', res.data);
        console.log(res.data, 'RESPONSE DE CATEGORY');
    },

    async find({ commit }, id) {
        const res = await this.$axios.get('/api/category.json');
        commit('category', res.data);
        console.log(res.data, 'FIND DE CATEGORY');
    },

    create({ commit }, form) {
        //return this.$axios.post('/api/post.json/create/', form)
        return this.$axios.get('/api/category.json');
    },

    update({ commit }, form) {
        // return this.$axios.put('/api/post.json/' + form.uid + '/update', form)
        return this.$axios.get('/api/category.json');
    },

    async delete({ commit }, id) {
        await this.$axios.delete('/api/category.json/' + id + '/delete')
        commit('category', {});
        console.log('DELETE DE CATEGORY');
    },

}