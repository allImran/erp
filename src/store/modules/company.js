const state = () => ({
	sidebar:[],
    company: {}
})

const getters = {
	getSidebar: state => state.sidebar,
	getCompany: state => state.company,
	getCompanyLogo: state => state.company.logo,
}

const mutations = {
	setSidebar: (state, payload) => state.sidebar = payload,
	setCompany: (state, payload) => state.company = payload,
}

export default {
	namespaced: true,
	state,
	getters,
	mutations
}