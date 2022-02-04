<template>
  <component :is="layout">
    <router-view v-slot="{ Component }">
      <transition name="fade">
        <component :is="Component" />
      </transition>
    </router-view>
  </component>
</template>

<script>
const default_layout = "master";

export default {
  name: 'App',
  computed: {
    layout() {
      return (this.$route.meta.layout || default_layout) + "-layout";
    },
  },
}
</script>


