const state = () => ({
	user: {},
	company: [],
	profile: {}
})

const getters = {
	getUser: state => state.user,
}

const mutations = {
    setUser: (state) => {
        state.user = JSON.parse(localStorage.getItem('user'))
    },

	setProfile: (state, payload) => {
		console.log(payload, 'mutation')
		state.profile = payload},
	setCompany: (state, payload) => state.company = payload,
}

export default {
	namespaced: true,
	state,
	getters,
	mutations
}