import Vue from 'vue'
import App from './App.vue'
import NavBar from './components/Navbar.vue';
import List from './components/List.vue';
import FootBar from './components/Foot.vue';
import Card from './components/Card.vue';
import Form from './components/Form.vue'

Vue.component('NavBar', NavBar)
Vue.component('List', List)
Vue.component('FootBar', FootBar)
Vue.component('Card', Card)
Vue.component('Form', Form)

new Vue({
  render: h => h(App),
}).$mount('#app')