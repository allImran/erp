const state = () => ({
	user: {}
})

const getters = {
	getUser: state => state.user,
}

const mutations = {
    setUser: (state) => {
        console.log(JSON.parse(localStorage.getItem('user')), '>>>>>>>>>>>>>>>>>>>>')
        state.user = JSON.parse(localStorage.getItem('user'))
    }
}

export default {
	namespaced: true,
	state,
	getters,
	mutations
}