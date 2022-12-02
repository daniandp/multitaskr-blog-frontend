export const state = () => ({
    items: {
        data: [],
        links: {},
        meta: {}
    },

    post: {}
})

export const getters = {
    items(state) {
        return state.items;
    },

    post(state) {
        return state.post;
    }
}

export const mutations = {
    items(state, data) {
        state.items = data;
    },

    post(state, data) {
        state.post = data;
    }
}

export const actions = {
    async get({ commit }) {
        const res = await this.$axios.get('/api/posts.json');
        commit('items', res.data);
        console.log(res.data, 'RESPONSE DE POST');
    },

    async find({ commit }, id) {
        const res = await this.$axios.get('/api/post.json');
        commit('post', res.data);
        console.log(res.data, 'FIND DE POST');
    },

    create({ commit }, form) {
        //return this.$axios.post('/api/post.json/create/', form)
        return this.$axios.get('/api/post.json');
    },

    update({ commit }, form) {
        // return this.$axios.put('/api/post.json/' + form.uid + '/update', form)
        return this.$axios.get('/api/post.json');
    },

    async delete({ commit }, id) {
        await this.$axios.delete('/api/post.json/' + id + '/delete');
        commit('post', {});
        console.log('DELETE DE POST');
    },
}