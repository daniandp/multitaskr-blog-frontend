export const state = () => ({
    items: {
        data: [],
        links: {},
        meta: {}
    },

    comment: {}

})

export const getters = {
    items(state) {
        return state.items;
    },

    comment(state) {
        return state.comment;
    }

}

export const mutations = {
    items(state, data) {
        state.items = data;
    },

    comment(state, data) {
        state.comment = data;
    }

}

export const actions = {
    async get({ commit }) {
        const res = await this.$axios.get('/api/comments.json');
        commit('items', res.data);
        console.log(res.data, 'RESPONSE DE COMMENTS');
    },

    async find({ commit }, id) {
        const res = await this.$axios.get('/api/comment.json');
        commit('comment', res.data);
        console.log(res.data, 'FIND DE COMMENT');
    },

    create({ commit }, form) {
        //return this.$axios.post('/api/post.json/create/', form)
        return this.$axios.get('/api/comment.json');
    },

    update({ commit }, form) {
        // return this.$axios.put('/api/post.json/' + form.uid + '/update', form)
        return this.$axios.get('/api/comment.json');
    },

    async delete({ commit }, id) {
        await this.$axios.delete('/api/comment.json/' + id + '/delete');
        commit('comment', {});
        console.log('DELETE DE COMMENT');
    },

}