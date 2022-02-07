<template>
    <div>
        <!-- {{ sidebar[0].submenus[0] }} -->
        <div class="container px-2 py-1" style="background-color: #fff;">
          <div class="row">
            <div class="col-md-12 m-auto" v-for="(submenu,index) in sidebar[0].submenus" :key="index">
                   <div>
                        <h3 class="p-1" style="background-color: #E2E7EA; border-bottom: .5px solid #000;">{{submenu.name}}</h3>
                  </div>
                 <div class="row p-2">
                     <div class="col-md-12">
                         <div class="row">
                               <div class="col-md-3 pageCard" v-for="(page,index) in submenu.pages" :key="index">
                          <div class="page-logo-div py-1">
                              <img class="logo"  :src="page.icon" alt="">
                             
                          </div>
                          <div>
                              <h6 class="text-center">{{page.name}}</h6>
                          </div>
                      </div>
                         </div>
                     </div>
                  </div> 
              </div>
          </div>
      </div>
    </div>
</template>

<script>
import {mapMutations} from 'vuex'
import handleSidebar from '@/services/modules/sidebar'
import { inject } from 'vue'
import { useStore } from 'vuex'
import { computed } from 'vue'
export default {
   
   methods:{
        ...mapMutations({
      setSidebar: 'dashboard/setSidebar',
    }),
    async getSidebar() {
      try {
        this.loading = true
        let res = await this.fetchSidebar()
        if(!res.status) {
          this.showError(res.message)
        }
        if(res.status) {
          this.setSidebar(res.data)
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
   },

    setup() {
    const showError =  inject('showError');
    const showSuccess =  inject('showSuccess');
    const store = useStore()  

    const { 
      fetchSidebar,
      loading
    } = handleSidebar()

    return {
      // setProfile: () => store.commit('user/setProfile'),
      // setCompany: () => store.commit('user/setCompany'),
      sidebar: computed(() => store.state.dashboard.sidebar),
      fetchSidebar,
      loading,
      showError,
      showSuccess
    }
  },

  created() {
    this.getSidebar()
  },
}
</script>

<style scoped>
     .pageCard{
          width: 200px;
          height: 200px;
          text-align: center;
    }

    .pageCard .logo{
        width: 120px;
        height: 120px;
        border-radius: 50%;
        display: block;
        margin: 0 auto;
    }
    .pageCard:hover{
      
        background-color: #E2E7EA;
        box-shadow: 0 4px 8px 0 rgba(0,0,0,0.2);
    }
    .page-logo-div{
        background-color: rgba(115, 103, 240, 0.12);
        width: 150px;
        height: 150px;
        border-radius: 50%;
        margin: 5px auto;
        padding: 5px;
    }
    .logo{
        padding: 20px;;
        color: #7367f0 !important;
    }
</style>