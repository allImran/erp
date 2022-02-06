const state = () => ({
	name: 'Dashboard'
})

const getters = {
	getName: state => state.name,
}

const mutations = {
}

export default {
	namespaced: true,
	state,
	getters,
	mutations
}