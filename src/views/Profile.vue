<template>
  <div>
    Profile {{ loading ? 'Loading...' : 'Done'}}
    <hr> {{profile }}
    <hr>
    {{ company }}
  </div>
</template>

<script>
import {mapMutations} from 'vuex'
import handleProfile from '@/services/modules/profile'
import { inject } from 'vue'
import { useStore } from 'vuex'
import { computed } from 'vue'

export default {
  name: 'Profile',

  methods: {
    ...mapMutations({
      setProfile: 'user/setProfile',
      setCompany: 'user/setCompany',
    }),
    async getProfile() {
      try {
        this.loading = true
        let res = await this.fetchProfileInfo()
        if(!res.status) {
          this.showError(res.message)
        }
        if(res.status) {
          this.setProfile(res.data)
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

    async getCompany() {
      try {
        this.loading = true
        let res = await this.fetchCompany()
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
    }
  },

  setup() {
    const showError =  inject('showError');
    const showSuccess =  inject('showSuccess');
    const store = useStore()  

    const { 
      fetchProfileInfo,
      fetchCompany,
      loading
    } = handleProfile()

    return {
      // setProfile: () => store.commit('user/setProfile'),
      // setCompany: () => store.commit('user/setCompany'),
      profile: computed(() => store.state.user.profile),
      company: computed(() => store.state.user.company),
      fetchProfileInfo,
      fetchCompany,
      loading,
      showError,
      showSuccess
    }
  },

  created() {
    this.getProfile()
    this.getCompany()
  }
}
</script>
