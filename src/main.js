import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

import MasterLayout from './components/layout/MasterLayout';

const app = createApp(App);

app.component('master-layout', MasterLayout);

app
.use(store)
.use(router)
.mount('#app')
