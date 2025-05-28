// import './assets/main.css'

import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'
import Footer from '../src/components/FooterPage.vue'
import Pricing from '../src/components/PricingTag.vue'
import Contact from '../src/components/Contact.vue'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap'
const app = createApp(App)

app.use(createPinia())
app.component('price', Pricing)
app.component('contact', Contact)
app.component('footers', Footer)
app.use(router)

app.mount('#app')
