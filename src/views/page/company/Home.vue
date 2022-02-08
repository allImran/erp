<template>
  <div>
    <Banner 
      :name="company.name"
      :showProfilePhoto="false"
      :coverPhoto="company.cover_photo"
    />
    <transition name="fade">
      <router-view></router-view>
    </transition>
  </div>
</template>

<script>
import {mapMutations} from 'vuex'
import handleCompany from '@/services/modules/company'
import { inject } from 'vue'
import { useStore } from 'vuex'
import { computed } from 'vue'

import Banner from '@/components/atom/Banner'

export default {
  name: 'CompanyHome',

  components: {
    Banner
  },

  methods: {
    ...mapMutations({
        setSidebar: 'company/setSidebar',
        setCompany: 'company/setCompany'
    }),

    async getCompany() {
      try {
        this.loading = 
        console.log(this.fetchCompanyInfo)
        let res = await this.fetchCompanyInfo(this.$route.params.companyId)
        if(!res.status) {
          this.showError(res.message)
        }
        if(res.status) {
          this.setCompany(res.data)
        }
        console.log(res, 'res')
      } catch (err) {
        if(!err.response) {
          this.showError('Something is wrong. Check your connectivity!!')
        }
        if(err.response) {
          this.showError(err.response.message)
        }
      } finally {
         this.loading = false
      }
    },

     async getSidebar() {
      try {
        this.loading = 
        console.log(this.fetchCompanyInfo)
        let res = await this.fetchSidebar()
        if(!res.status) {
          this.showError(res.message)
        }
        if(res.status) {
          this.setSidebar(res.data)
        }
      } catch (err) {
        if(!err.response) {
          this.showError('Something is wrong. Check your connectivity!!')
        }
        if(err.response) {
          this.showError(err.response.message)
        }
      } finally {
         this.loading = false
      }
    },
  },

  setup() {
    const showError =  inject('showError');
    const showSuccess =  inject('showSuccess');
    const store = useStore()  

    const {
      fetchSidebar,
      fetchCompanyInfo,
      loading
    } = handleCompany()

    return {
      company: computed(() => store.state.company.company),
      fetchSidebar,
      fetchCompanyInfo,
      loading,
      showError,
      showSuccess
    }
  },

    mounted() {
        this.getCompany()
        this.getSidebar()
    }

}
</script>
