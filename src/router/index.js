import { createRouter, createWebHistory } from 'vue-router'
import store from "@/store"

// * modules
import dashboard from '@dashboard/router'
import user from '@user/router'
import person from '@person/router'
import permitions from '@permitions/router'
import sale from '@sale/router'
import product from '@product/router'

const routes = [ ...dashboard, ...user, ...person, ...permitions, ...sale, ...product ]

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes,
    scrollBehavior(to, from, savedPosition) {
        return savedPosition || {
          left: 0,
          top: 0
        };
      }
})


router.beforeEach(async (to, from, next) => {
    if (!store.state.auth && to.meta.requireAuth) {
        try { 
            store.dispatch('auth')
        } catch {
            next('/login')
        }
    } else if (store.state.auth && to.meta.requireAuth) {
       // store.getters['permitions/permition'](to.meta.permition) ? next() : next('/login')
    } else { 
        next()
    }
})

export default router
