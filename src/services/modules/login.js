import Network from '@/services/network'
import { ref } from 'vue'

export default function fetchUser() {
    const network = new Network;
    const loading = ref(false)
    const loginUser = (data) => {
      return network.api('post', '/login', data);
    }

    const setUserInLocalStorage = (data) => {
        localStorage.setItem('user', JSON.stringify(data))
    }
    const setTokenInLocalStorage = (data) => {
        localStorage.setItem('token', data)
    }
  
    return {
        loginUser,
        loading,
        setUserInLocalStorage,
        setTokenInLocalStorage
    }
  }