import Network from '@/services/network'
import { ref } from 'vue'

export default function handleProfile() {
    const network = new Network;
    const loading = ref(false)

    const fetchProfileInfo = () => {
      return network.api('get', '/profile');
    }

    const fetchCompany = () => {
      return network.api('get', '/company');
    }
    
  
    return {
        fetchProfileInfo,
        fetchCompany,
        loading
    }
}