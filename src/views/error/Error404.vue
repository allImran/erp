<template>
  <!-- Error page-->
  <div class="misc-wrapper">
      <img width="50" src="/app-assets/images/logo.png" alt="" class="d-block mx-auto mt-5">
    <b-link class="brand-logo">
    </b-link>

    <div class="misc-inner p-2 p-sm-3">
      <div class="w-100 text-center">
        <h2 class="mb-1">
          Page Not Found 🕵🏻‍♀️
        </h2>
        <p class="mb-2">
          Oops! 😖 The requested URL was not found on this server.
        </p>

        <b-button
          variant="primary"
          class="mb-2 btn-sm-block"
          :to="{path:'/'}"
        >
          Back to home
        </b-button>

        <!-- image -->
        <b-img
          fluid
          src="imgUrl"
          alt="Error page"
        />
      </div>
    </div>
  </div>
<!-- / Error page-->
</template>