<template>
  <div class="content-body">
        <div id="user-profile">
          <div class="row">
            <div class="col-12">
              <div class="card profile-header mb-2">
                <img
                  class="card-img-top"
                  :src="coverPhoto"
                  alt="User Profile Image"
                />
                <div class="position-relative">
                  <div
                    class="profile-img-container d-flex align-items-center"
                  >
                    <div v-if="showProfilePhoto" class="profile-img">
                      <img
                        :src="photo"
                        class="rounded img-fluid"
                        alt="Card image"
                      />
                    </div>
                    <div class="profile-title ms-3">
                      <h2 class="text-white">{{ name }}</h2>
                      <p class="text-white">.</p>
                    </div>
                  </div>
                </div>

                <div class="profile-header-nav">
                  <nav
                    class="
                      navbar navbar-expand-md navbar-light
                      justify-content-end justify-content-md-between
                      w-100
                    "
                  >
                    <button
                      class="btn btn-icon navbar-toggler"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#navbarSupportedContent"
                      aria-controls="navbarSupportedContent"
                      aria-expanded="false"
                      aria-label="Toggle navigation"
                    >
                      <i
                        data-feather="align-justify"
                        class="font-medium-5"
                      ></i>
                    </button>

                    <!-- collapse  -->
                    <div
                      class="collapse navbar-collapse"
                      id="navbarSupportedContent"
                    >
                      <div
                        class="
                          profile-tabs
                          d-flex
                          justify-content-between
                          flex-wrap
                          mt-1 mt-md-0
                        "
                      >
                        <ul class="nav nav-pills mb-0">
                        </ul>
                        <button class="btn btn-primary">
                          <i
                            data-feather="edit"
                            class="d-block d-md-none"
                          ></i>
                          <span class="fw-bold d-none d-md-block">Edit</span>
                        </button>
                      </div>
                    </div>
                  </nav>
                </div>
              </div>
            </div>
          </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'Banner',
    props: ['name', 'photo', 'coverPhoto', 'showProfilePhoto']
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
</style>