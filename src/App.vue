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
import { provide } from 'vue'
import { useToast } from "vue-toastification"
const default_layout = "master";

export default {
  name: 'App',
  computed: {
    layout() {
      return (this.$route.meta.layout || default_layout) + "-layout";
    },
  },
  setup() {
      const toast = useToast();
      const showError = (message, position='bottom-center') => {
        toast.error(message, {position: position})
      };
      const showSuccess = (message, timeout=5000) => {
        toast.success(message, {timeout: timeout})
      };
      provide('showError', showError);
      provide('showSuccess', showSuccess);
    }
}
</script>

<style>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>


