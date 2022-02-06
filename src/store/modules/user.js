const state = () => ({
	user: {},
	company: [],
	profile: {},
	sidebar:[]
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
	setSidebar: (state, payload) => state.sidebar = payload,
}

export default {
	namespaced: true,
	state,
	getters,
	mutations
}