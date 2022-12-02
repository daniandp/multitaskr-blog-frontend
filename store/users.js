export const state = () => ({
    items: {
        data: [],
        links: {},
        meta: {}
    },
    user: {}
})

export const getters = {
    items(state) {
        return state.items;
    },

    user(state) {
        return state.user;
    }

}

export const mutations = {
    items(state, data) {
        state.items = data;
    },

    user(state, data) {
        state.user = data;
    }

}

export const actions = {
    async get({ commit }) {
        const res = await this.$axios.get('/api/users.json');
        commit('items', res.data);
        console.log(res.data, 'RESPONSE DE USERS');
    },

    async find({ commit }, id) {
        const res = await this.$axios.get('/api/user.json');
        commit('user', res.data);
        console.log(res.data, 'FIND DE USER');
    },

    create({ commit }, form) {
        //return this.$axios.post('/api/post.json/create/', form)
        return this.$axios.get('/api/user.json');
    },

    update({ commit }, form) {
        // return this.$axios.put('/api/post.json/' + form.uid + '/update', form)
        return this.$axios.get('/api/user.json');
    },

    async delete({ commit }, id) {
        await this.$axios.delete('/api/user.json/' + id + '/delete');
        commit('user', {});
        console.log('DELETE DE USER');
    },

}