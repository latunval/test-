// import './assets/main.css'

import { createApp } from 'vue'
// import { createPinia } from 'pinia'

import App from './App.vue'
// import router from './router'
import 'bootstrap/dist/css/bootstrap.min.css' 
import 'bootstrap' 
import buttonView from './components/button.vue' 
import testimonial from './components/testimonial.vue' 
// import partnerViews from './views/partnerViews.vue'
const app = createApp(App)

// app.use(createPinia())
// app.use(router)
app.component('button-view', buttonView)
app.component('testimonial-view', testimonial)
// app.component('partener-view', partnerViews)

app.mount('#app')
