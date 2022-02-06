import Network from '@/services/network'
import { ref } from 'vue'

export default function handleRegistration() {
    const network = new Network;
    const loading = ref(false)
    const registerUser = (data) => {
      return network.api('post', '/register', data);
    }
  
    return {
        registerUser,
        loading
    }
  }