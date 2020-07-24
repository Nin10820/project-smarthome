import Vue from 'vue'
import App from './App.vue'
import router from './router'
import 'bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'
import '@fortawesome/fontawesome-free/css/all.css'
import '@fortawesome/fontawesome-free/js/all.js'
import AOS from 'aos';
import 'aos/dist/aos.css'; // You can also use <link> for styles
import "vue-slick-carousel/dist/vue-slick-carousel-theme.css";


AOS.init();

Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')

