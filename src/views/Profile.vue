<template>
  <div>
  <div class="app-content content" style="margin-left: 1px;padding-top: 0;">
      <!-- <div class="content-overlay"></div> -->
      <!-- <div class="header-navbar-shadow"></div> -->
      
  </div>
    <Banner 
      :photo="profile.photo"
      :coverPhoto="profile.cover_photo"
      :name="profile.name"
      :showProfilePhoto="true"
    />
    <!-- end user profile -->
    
    <!-- user company list-->
    <div class="card">
          <div class="card-body mobileConpamy" style="background-color: #f6f6f6; ">
            <div class="row" style="background-color:#f6f6f6 ">
              <div class="col-md-8 m-auto p-2" style="background-color:#fff;">
            <div class="row">
                   <div class="col-md-12 m-auto" style="background-color: #fff; ">
               
                <h2 class="text-center headingTwo py-2 h2">My Companies</h2>
                <div class="input-group input-group-merge">
                  <span class="input-group-text py-2"
                    ><i data-feather="search"></i
                  ></span>
                  <input style= "font-size: 18px;"
                    type="text"
                    id="fname-icon"
                    class="form-control"
                    name="fname-icon"
                    placeholder="Serach..."
                    v-model="searchCompanyString"
                  />
                </div>
                <!-- <input type="text" class="form-control" placeholder="Serach..."> -->
          
              </div>
            <div class="row my-2">
              <div class="col-md-12 m-auto" style="background-color: #fff; ">
                <!-- company list loop -->
                <template 
                  v-for="(company,index) in filterSerchCompany()"
                  :key="index"
                >
                  <CompanyCard :company="company" />
                </template>
                <br />

                <div
                  class="row new-account-button-td"
                  style="border: 1px solid #1a73e8; margin: 0; padding: 0"
                >
                  <button
                    class="wv-button--link fs-exclude new-account-button h2 mobileCompanyButton"
                    data-bs-toggle="modal"
                    data-keyboard="false"
                    data-backdrop="static"
                    data-bs-target="#editUser"
                    style="font-size: 28px; color: #fff; margin-bottom: 0px; padding: 20px;"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="28"
                      height="28"
                      fill="currentColor"
                      class="bi bi-plus-circle"
                      viewBox="0 0 16 16"
                    >
                      <path
                        d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z"
                      />
                      <path
                        d="M8 4a.5.5 0 0 1 .5.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3A.5.5 0 0 1 8 4z"
                      />
                    </svg>
                    &nbsp;Add a new company
                  </button>
                </div>
             
              </div>
            </div>
            </div>
              </div>
            </div>
          </div>
          
    </div>


    
    <!-- user company list -->
    <!-- modal for create company -->
     <div
          class="modal hide fade in"
          id="editUser"
          tabindex="-1"
          aria-hidden="true"
        >
          <div
            class="modal-dialog modal-lg modal-dialog-centered modal-edit-user"
          >
            <div class="modal-content" style="width: 80%; margin: 0 auto;">
              <div class="modal-header bg-transparent">
                <button
                  type="button"
                  class="btn-close"
                  data-bs-dismiss="modal"
                  aria-label="Close"
                ></button>
              </div>
              <div class="modal-body pb-5 px-sm-5 pt-50">
                <div class="text-center mb-2">
                  <h1 class="mb-1">Add Your New Company</h1>
                </div>
                <form
                  id="editUserForm"
                  class="row gy-1 pt-75"
                  onsubmit="return false"
                >
                  <!-- name -->
                  <div class="col-12 col-md-12">
                    <label class="form-label" for="name"
                      >Company Name</label
                    >
                    <input
                      type="text"
                      id="name"
                      name="name"
                      class="form-control"
                      placeholder="company name"
                      v-model="companiesForm.name"
                    />
                  </div>
                  <div class="col-12 col-md-12">
                    <label class="form-label" for="industry">Industry</label>
                    <input
                      type="text"
                      id="industry"
                      class="form-control"
                      placeholder="industry name"
                      v-model="companiesForm.industry"
                    />
                  </div>
                  <!--  <div class="col-12 col-md-12">
                    <label class="form-label" for="address"
                      >Your Company Location</label
                    >
                    <input
                      type="text"
                      id="area"
                      class="form-control"
                      placeholder="your company area"
                      disabled
                      v-model="companiesForm.area"
                    />
                  </div> -->
                  <div class="col-12 col-md-12">
                    <label class="form-label" for="address"
                      >Company Address</label
                    >
                    <textarea 
                      id="address"
                      class="form-control"
                      placeholder="company address"
                      v-model="companiesForm.address"
                      rows="3"
                    />
                  </div>
                  
                 
               <!--    <div class="col-12 col-md-6">
                    <input
                      type="file"
                      id="area"
                      class="form-control"
                      placeholder="your company area"
                      disabled
                      @change="previewFiles"
                    />
                  </div> -->
                  <div class="col-12 text-center mt-2 pt-50">
                    <button
                      type="submit"
                      class="btn btn-primary me-1"
                      @click="createCompanies()"
                      data-bs-dismiss="modal"
                    >
                      Submit
                    </button>
                    <button
                      type="reset"
                      class="btn btn-outline-secondary"
                      data-bs-dismiss="modal"
                      aria-label="Close"
                    >
                      Cancel
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
    <!-- end modal for create company -->
    <!-- <hr> -->
    <!-- {{ company }} -->
  </div>
</template>

<script>
import {mapMutations} from 'vuex'
import handleProfile from '@/services/modules/profile'
import { inject } from 'vue'
import { useStore } from 'vuex'
import { computed } from 'vue'

import CompanyCard from '@/components/molecule/profile/CompanyCard'
import Banner from '@/components/atom/Banner'

export default {
  name: 'Profile',

  components: {
    CompanyCard,
    Banner
  }, 

  data(){
    return{
      searchCompanyString:"",
       companiesForm: {
        name: null,
        address: null,
        industry: null,
        area: null,
        logo: null,
        status: "active",
      },
    }
  },

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
    },
     createCompanies() {
      this.axios
        .post("/company", this.companiesForm, {
          headers: {
            Authorization: "Bearer " + this.$store.getters["auth/token"],
          },
        })
        .then((response) => {
          this.companies = response.data.data;
          console.log("====")
          this.getCompanies();
        })
        .catch((error) => {
          console.log("error " + error);
        });
    },
    // company search select 2 js
     filterSerchCompany() {
      return this.company.filter((item) => {
        return item.name.match(this.searchCompanyString);
      });
    }, 
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
  },
}
</script>


<style scoped>

/* profile css */
#user-profile {
  /*-------------profile header section---------*/
  /*-------- profile info section --------*/ }

#user-profile .profile-header {
  overflow: hidden; }

#user-profile .profile-header .profile-img-container {
  position: absolute;
  bottom: -2rem;
  left: 2.14rem;
  z-index: 2; }

#user-profile .profile-header .profile-img-container .profile-img {
  height: 8.92rem;
  width: 8.92rem;
  border: 0.357rem solid #fff;
  background-color: #fff;
  border-radius: 0.428rem;
  box-shadow: 0 4px 24px 0 rgba(34, 41, 47, 0.1); }

#user-profile .profile-header .profile-header-nav .navbar {
  padding: 0.8rem 1rem; }

#user-profile .profile-header .profile-header-nav .navbar .navbar-toggler {
  line-height: 0; }

#user-profile .profile-header .profile-header-nav .navbar .profile-tabs .nav-item i,
#user-profile .profile-header .profile-header-nav .navbar .profile-tabs .nav-item svg {
  margin-right: 0; }

#user-profile #profile-info .profile-star {
  color: #babfc7; }

#user-profile #profile-info .profile-star i.profile-favorite,
#user-profile #profile-info .profile-star svg.profile-favorite {
  fill: #ff9f43;
  stroke: #ff9f43; }

#user-profile #profile-info .profile-likes {
  fill: #ea5455;
  stroke: #ea5455; }

#user-profile #profile-info .profile-polls-info .progress {
  height: 0.42rem; }

#user-profile .profile-latest-img {
  transition: all 0.2s ease-in-out; }

#user-profile .profile-latest-img:hover {
  transform: translateY(-4px) scale(1.2);
  z-index: 10; }

#user-profile .profile-latest-img img {
  margin-top: 1.28rem; }

#user-profile .block-element .spinner-border {
  border-width: 0.14rem; }

@media (max-width: 991.98px) {
  #user-profile .profile-latest-img img {
    width: 100%; } }

@media (min-width: 768px) {
  .profile-header-nav .profile-tabs {
    width: 100%;
    margin-left: 13.2rem; } }

@media (max-width: 575.98px) {
  #user-profile .profile-header .profile-img-container .profile-img {
    height: 100px;
    width: 100px; }
  #user-profile .profile-header .profile-img-container .profile-title h2 {
    font-size: 1.5rem; } }


.header-navbar.fixed-top,
.header-navbar.floating-nav {
  left: 1px !important;
}

.headingTwo {
  background-color: #666666;
  padding: 10px 0;
  color: #fff;
}
.vertical-container {
  position: relative;
}
.vertical-center {
  padding: 25px 0;
}
.new-account-button {
  padding: 10px 50px;
  color: #136acd;
  border: none;
  background: transparent;
  font-size: 22px;
  background-color: #7367F0;
  box-shadow: 0 4px 8px 0 rgba(0,0,0,0.2);
  transition: .5s ease;
}
.new-account-button-td:hover {
   box-shadow: 0 8px 16px 0 rgba(0,0,0,0.2);
}

.cardR{
    box-shadow: 0 4px 8px 0 rgba(0,0,0,0.2);
}
.cardR:hover {
  box-shadow: 0 8px 16px 0 rgba(0,0,0,0.2);
}

@media screen and (max-width: 720px) {
  .mobileCompany{
    font-size: 16px !important;
    text-align: center;
  }
  .mobileCompany .imgDiv{
    /* padding-top: 5px; */
    padding-top: 5px;
  }
  .mobileCompanyButton{
     font-size: 16px !important;
  }
  
}
</style>