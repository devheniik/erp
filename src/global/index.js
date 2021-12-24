import * as  heroicons from "@heroicons/vue/outline"
import * as headlessui from "@headlessui/vue"

// datepicker
import VueFlatPickr from 'vue-flatpickr-component'
import flatpickr from "flatpickr"
import { Russian } from "flatpickr/dist/l10n/ru.js"

import LitepieDatepicker from 'jonya-datepicker'

import Maska from 'maska'
 

flatpickr.setDefaults(
  {
    locale: Russian,
    dateFormat: 'd.m.Y',
    time_24hr: true,
    static : true
  }
) 
 
 

import PrimeVue from 'primevue/config'
// import InputSwitch from 'primevue/InputSwitch'

export default app => { 

  app.use(LitepieDatepicker)
  app.use(PrimeVue)  
  app.use(Maska)
 

 


  Object.entries(heroicons).forEach(([componentName, component]) => {
    if (componentName !== 'default') {
      app.component(String(componentName), component)
    }
  })

  Object.entries(headlessui).forEach(([componentName, component]) => {
    if (componentName !== 'default') {
      app.component(String(componentName), component)
    }
  })

  app.use(VueFlatPickr);
}