import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import './assets/index.css' 

// global, utils, pluguins, helpers
import global from "@/global"
import helpers from "@/helpers"
import utils from "@/utils"
import components from "@/components"
import uniprops from './components/uniprops/index'


const app = createApp(App).use(router).use(store)  

global(app)
uniprops(app)
components(app)
helpers(app)
utils(app)


app.mount('#app')
