<template>
  <div class="app-content content" style="margin: 0; padding: 30px;">
    <div class="content-overlay"></div>
    <div class="header-navbar-shadow"></div>
    <div class="content-wrapper" >
      <div class="content-header row">
      </div>
      <div class="content-body">
        <div class="auth-wrapper auth-cover">
          <div class="auth-inner row m-0">
            <!-- Brand logo--><router-link class="brand-logo" to="login">
<!--            <h2 class="brand-text text-primary ms-1">miAccounts</h2>-->
          </router-link>
            <!-- /Brand logo-->
            <!-- Left Text-->
            <div class="d-none d-lg-flex col-md-6 align-items-center">
              <div class="w-100 d-lg-flex align-items-center justify-content-center"><img class="img-fluid"
                                                                                               src="app-assets/images/login-v2.svg"
                                                                                               alt="Login V2"/></div>
            </div>
            <!-- /Left Text-->
            <!-- Login-->

            <div class="d-flex col-md-6 align-items-center auth-bg px-2 p-lg-5">
              <div class="col-md-12 mx-auto px-5 pt-2 mobile-login">
                <div style="margin-left: -15px;">
                  <a class="nav-link" href="/"><img src="app-assets/images/logo.png" style="height: 45px;"></a>
                </div>
                <p class="card-text mb-2">Login to your account</p>
                <!-- <p style="color: #e35858" id="err-message"><b>{{emailVerificationMessage}}</b></p> -->
                <h3 style="color: #e35858"><b>{{errMessage}}</b></h3>
                <form class="auth-login-form mt-2" method="POST" @submit.prevent="login()">
                  <div class="mb-1">
                    <label class="form-label" for="login-email">Email</label>
                    <input class="form-control" id="login-email" v-model="formData.email" type="text" name="login-email"
                           placeholder="Mobile No/Email" aria-describedby="login-email" autofocus="" tabindex="1"/>
                  </div>
                  <div class="mb-1">
                    <div class="d-flex justify-content-between">
                      <label class="form-label" for="login-password">Password</label><router-link to="forget-password"><small>Forgot Password?</small></router-link>
                    </div>
                    <div class="input-group input-group-merge form-password-toggle">
                      <input class="form-control form-control-merge" id="login-password" type="password"
                             v-model="formData.password" name="login-password" placeholder="············"
                             aria-describedby="login-password" tabindex="2"/><span
                        class="input-group-text cursor-pointer"><i data-feather="eye"></i></span>
                    </div>
                  </div>
                  <div class="mb-1">
                    <div class="form-check">
                      <input class="form-check-input" id="remember-me" type="checkbox" tabindex="3"/>
                      <label class="form-check-label" for="remember-me"> Remember Me</label>
                    </div>
                  </div>
                  <button v-if="!loading" class="btn btn-primary w-100" tabindex="4">Sign in</button>
                  <button v-else disabled class="btn btn-primary w-100" tabindex="4">
                    <span class="spinner-border spinner-border-sm text-white" role="status" aria-hidden="true"></span>
                    Sign in
                  </button>
                </form>
                <p class="text-center mt-2"><span>Don't have an account?</span><router-link to="register"><span>&nbsp;Create an account</span></router-link>
                </p>
                <!--<div class="divider my-2">
                    <div class="divider-text">or</div>
                </div>
                <div class="auth-footer-btn d-flex justify-content-center"><a class="btn btn-facebook" href="#"><i data-feather="facebook"></i></a><a class="btn btn-twitter white" href="#"><i data-feather="twitter"></i></a><a class="btn btn-google" href="#"><i data-feather="mail"></i></a><a class="btn btn-github" href="#"><i data-feather="github"></i></a></div>-->
              </div>
            </div>
            <!-- /Login-->
          </div>
        </div>
      </div>
    </div>
  </div>
</template>


<script>
import fetchUser from '@/services/modules/login'
import { inject } from 'vue'
import { useStore } from 'vuex'
import { computed } from 'vue'

export default {
  name: 'Login',

  data: () => ({
    errMessage:'',
      defaultButton:true,
      formData: {
        email: null,
        password: null
      },
      // emailVerificationMessage:this.$route.params.verify,
  }),

  methods: {
    async login() {
      try {
        this.loading = true
        let res = await this.loginUser(this.formData);
        if(!res.status) {
          this.showError(res.message)
        }
        if(res.status) {
          this.showSuccess(res.message)
          this.setUserInLocalStorage(res.data)
          this.setTokenInLocalStorage(res.access_token)
          this.setUser() //set user to state/vue-store
           window.location.href = '/profile';
          // this.$router.push({name: 'Dashboard'})
        }
        console.log(res, 'res')
      } catch (err) {
        // console.log(err, '>>>>>>>>>>>')
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
      loginUser, 
      loading,
      setUserInLocalStorage,
      setTokenInLocalStorage
    } = fetchUser()

    return {
      setUser: () => store.commit('user/setUser'),
      user: computed(() => store.state.user.user),
      loginUser,
      loading,
      showError,
      showSuccess,
      setUserInLocalStorage,
      setTokenInLocalStorage
    }
  }
}
</script>
