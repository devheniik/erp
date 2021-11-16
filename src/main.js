import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import './assets/index.css'
// import 'primeicons/primeicons.css'


// global, utils, pluguins, helpers
import global from "@/global"
import helpers from "@/helpers"
import utils from "@/utils"
import plugins from "@/plugins"
import components from "@/components"
import uniprops from './components/uniprops/index'


const app = createApp(App).use(router).use(store)  


// import 'primevue/resources/themes/tailwind-light/theme.css';
// import 'primevue/resources/primevue.min.css';


global(app)
uniprops(app)
plugins(app)
components(app)
helpers(app)
utils(app)


app.mount('#app')
