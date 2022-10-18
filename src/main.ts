import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

const app = createApp(App)
app.use(router)
    .use(store)
    .mount('#root')

app.directive("disable-scroll", {
    mounted() { document.body.style.overflowY = 'hidden' },
    unmounted() { document.body.style.overflowY = 'auto' }
})
