import Network from '@/services/network'
import { ref } from 'vue'

export default function handleSidebar() {
    const network = new Network;
    const loading = ref(false)

    const fetchSidebar = () => {
      return network.api('get', '/get/sidebar');
    }
    return {
        fetchSidebar,
        loading
    }
}