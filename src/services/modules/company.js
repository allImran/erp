import Network from '@/services/network'
import { ref } from 'vue'

export default function handleCompany() {
    const network = new Network;
    const loading = ref(false)

    const fetchSidebar = () => {
      return network.api('get', '/get/sidebar');
    }

    const fetchCompanyInfo = (id) => {
      return network.api('get', '/company/'+id);
    }

    return {
        fetchSidebar,
        fetchCompanyInfo,
        loading
    }
}