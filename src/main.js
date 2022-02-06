import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

import Toast from "vue-toastification";
import "vue-toastification/dist/index.css";

import MasterLayout from './components/layout/MasterLayout';
import AuthLayout from './components/layout/AuthLayout';

const app = createApp(App);

app.component('master-layout', MasterLayout);
app.component('auth-layout', AuthLayout);

app
.use(store)
.use(router)
.use(Toast)
.mount('#app')
