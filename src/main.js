import { createApp } from 'vue'
import App from './App.vue'
import router from './router'


import 'bootstrap-icons/font/bootstrap-icons.css'
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap/dist/js/bootstrap.js";

createApp(App).use(router).mount('#app')
