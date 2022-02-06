const axios = require('axios');
const config = {
	onUploadProgress: function(progressEvent) {
	  var percentCompleted = Math.round((progressEvent.loaded * 100) / progressEvent.total);
	//   store.commit('updateProgress', percentCompleted);
	}
}

export default class Network{
	constructor() {
        this.baseURL = process.env.VUE_APP_BASE_URL;
		axios.defaults.baseURL = `${this.baseURL}/api`;
        axios.defaults.headers.common['Authorization'] = `Bearer ${localStorage.getItem('token')}`;
        //axios.defaults.withCredentials = true;
	}

	
	async api(method, url, data = null) {
		return new Promise((resolve, reject) => {
			axios[method.toLowerCase()](url, data, config)
			.then(res => {
				resolve(res.data);
		    })
			.catch(err => {
				// if(err.response.status == 401) {
				// 	this.unauthenticated()
				// }
		        reject(err);
				console.log(err, '>>>>>>>>>')
		      })
		});
	}

}