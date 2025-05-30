// import './assets/main.css'

import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
// import router from './router/index.js'
import Partner from '../src/components/partnerViews.vue'
import Header from '../src/components/Header.vue'
import NavBar from '../src/components/NavBar.vue'
import Features from '../src/components/Features.vue'
import Footer from '../src/components/FooterPage.vue'
import Pricing from '../src/components/PricingTag.vue'
import Contact from '../src/components/Contact.vue'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap'
import buttonView from './components/button.vue' 
import testimonial from './components/testimonial.vue' 

const app = createApp(App)

app.use(createPinia())
app.component('button-view', buttonView)
app.component('testimonial-view', testimonial)
app.component('headers', Header)
app.component('partner', Partner)
app.component('features', Features)
app.component('nav-bar', NavBar)
app.component('price', Pricing)
app.component('contact', Contact)
app.component('footers', Footer)
// app.use(router)

app.mount('#app')
