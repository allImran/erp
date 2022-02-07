const state = () => ({
	name: 'Dashboard',
	sidebar:[]
})

const getters = {
	getName: state => state.name,
}

const mutations = {
	setSidebar: (state, payload) => state.sidebar = payload,
}

export default {
	namespaced: true,
	state,
	getters,
	mutations
}