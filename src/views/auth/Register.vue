<template>
  <div class="app-content content " style="margin: 0; padding: 30px;">
    <div class="content-overlay"></div>
    <div class="header-navbar-shadow"></div>
    <div class="content-wrapper">
      <div class="content-header row">
      </div>
      <div class="content-body">
        <div class="auth-wrapper auth-cover">
          <div class="auth-inner row m-0">
            <!-- Brand logo--><router-link class="brand-logo" to="register">
          </router-link>
            <!-- /Brand logo-->
            <!-- Left Text-->
            <div class="d-none d-lg-flex col-md-6 align-items-center">
              <div class="w-100 d-lg-flex align-items-center justify-content-center px-5"><img class="img-fluid"
                                                                                               src="app-assets/images/pages/register-v2.svg"
                                                                                               alt="Register V2"/></div>
            </div>
            <!-- /Left Text-->
            <!-- Register-->
            <div class="d-flex col-md-6 align-items-center auth-bg px-2">
              <div class="col-12 col-sm-8 col-md-6 col-lg-12  mx-auto px-5 pt-2 mobile-registration">
                 <div style="margin-left: -15px;">
                  <a class="nav-link" href="/"><img src="app-assets/images/logo.png" style="height: 45px;"></a>
                </div>
                <br>
                <p class="card-text mb-2">Create Your Account</p>
                <span class="alert-success"><b>{{ validationMessage }}</b></span>
                <form class="auth-register-form mt-2" @submit.prevent="register()">
                  <div class="mb-1">
                    <label class="form-label" for="register-username">Full Name</label>
                    <input class="form-control" id="register-username" v-model="formData.name" type="text"
                           name="register-username" placeholder="johndoe" aria-describedby="register-username"
                           autofocus="" tabindex="1"/>
                  </div>
                  <div class="mb-1">
                    <label class="form-label" for="register-email">Email</label>
                    <input class="form-control" id="register-email" type="text" name="register-email"
                           v-model="formData.email" placeholder="Email (as user id)" aria-describedby="register-email"
                           tabindex="2"/>
                  </div>
                  <div class="mb-1">
                    <label class="form-label" for="register-password">Password</label>
                    <div class="input-group input-group-merge form-password-toggle">
                      <input class="form-control form-control-merge" id="register-password" v-model="formData.password"
                             type="password" name="register-password" placeholder="············"
                             aria-describedby="register-password" tabindex="3"/><span
                        class="input-group-text cursor-pointer"><i data-feather="eye"></i></span>
                    </div>
                  </div>

                  <div class="mb-1">
                    <label class="form-label" for="register-password">Confirm Password</label>
                    <div class="input-group input-group-merge form-password-toggle">
                      <input class="form-control form-control-merge" id="register-password" type="password"
                             v-model="confirmPass"
                             name="register-password" placeholder="············" aria-describedby="register-password"
                             tabindex="3"/><span class="input-group-text cursor-pointer"><i
                        data-feather="eye"></i></span>
                    </div>
                  </div>

                  <div class="mb-1">
                    <div class="form-check">
                      <input :disabled="!this.formData.name && !this.formData.email && !this.formData.password && !this.confirmPass" class="form-check-input" id="register-privacy-policy" type="checkbox" tabindex="4" @click="enableRegistration()"/>
                      <label class="form-check-label" for="register-privacy-policy">I agree to<a href="#">&nbsp;privacy
                        policy & terms</a></label>
                    </div>
                  </div>
                  <div v-if="acceptedPrivacyPolicy">
                    <button v-if="!loading" class="btn btn-primary w-100" tabindex="5">Sign up</button>
                    <button v-else disabled class="btn btn-primary w-100" tabindex="5">
                      <span class="spinner-border spinner-border-sm text-white" role="status" aria-hidden="true"></span>
                      Sign up
                    </button>
                  </div>
                  <div v-else>
                    <button v-if="!loading" disabled class="btn btn-primary w-100" tabindex="5">Sign up</button>
                  </div>
                </form>
                <p class="text-center mt-2"><span>Already have an account?</span><router-link to="login"><span>&nbsp;Sign in instead</span></router-link>
                </p>
<!--                <div class="divider my-2">-->
<!--                  <div class="divider-text">or</div>-->
<!--                </div>-->
<!--                <div class="auth-footer-btn d-flex justify-content-center"><a class="btn btn-facebook" href="#"><i-->
<!--                    data-feather="facebook"></i></a><a class="btn btn-twitter white" href="#"><i-->
<!--                    data-feather="twitter"></i></a><a class="btn btn-google" href="#"><i data-feather="mail"></i></a><a-->
<!--                    class="btn btn-github" href="#"><i data-feather="github"></i></a>-->
<!--                </div>-->
              </div>
            </div>
            <!-- /Register-->
          </div>
        </div>
      </div>
    </div>
  </div>
</template>


<script>
import handleRegistration from '@/services/modules/register'
import { inject } from 'vue'

export default {
  name: 'Register',

  data: () => ({
    emailVerificationMessage:'User registered Successfully,please check email for account verification',
    defaultButton:true,
    acceptedPrivacyPolicy:false,
    formData: {
      name: null,
      email: null,
      password: null,
    },
    confirmPass: null,
    validationMessage:'',
  }),

  methods: {
    async register() {
      try {
        this.loading = true
        let res = await this.registerUser(this.formData);
        if(!res.status) {
          this.showError(res.message)
        }
        if(res.status) {
          this.showSuccess(res.message)
          this.$router.push({ path: '/login', query: { verify: this.emailVerificationMessage } })
        }
        console.log(res, 'res')
      } catch (err) {
        console.log(err, '>>>>>>>>>>>')
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

    enableRegistration(){
      // if (this.formData.name && this.formData.email && this.formData.password && this.confirmPass){
        this.acceptedPrivacyPolicy = this.acceptedPrivacyPolicy !== true;
      // }
    }
  },

  setup() {
    const showError =  inject('showError');
    const showSuccess =  inject('showSuccess');

    const { 
      registerUser, 
      loading,
    } = handleRegistration()

    return {
      registerUser,
      loading,
      showError,
      showSuccess
    }
  }
}
</script>