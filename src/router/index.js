import { createRouter, createWebHistory } from 'vue-router'
import store from "@/store"
// * modules
import dashboard from '@dashboard/router'
import user from '@user/router'
import person from '@person/router'
import permitions from '@permitions/router'
import sale from '@sale/router'
import product from '@product/router'
import operation from '@operation/router'
import firm from '@firm/router'
import finance from '@finance/router'

// * post
import post from "../api/index"


const routes = [ ...dashboard, ...user, ...person, ...permitions, ...sale, ...product, ...operation, ...firm, ...finance ]
 

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
    console.log('store.state.auth', store.state.user.auth);
    if (!store.state.user.auth && to.meta.requreAuth) {
        try { 
          // store.commit('permitions/updateRole', role)
          // store.commit('permitions/updatePermitions', roles)
          const auth = await post('/auth/check_token') 

          if (auth.data.status == false) {
            next('/login')
          } else {
            store.commit('auth') 
            next()
          }

          
          // store.getters['permitions/permition'](to.meta.permition) ? next() : next('/login')
          // nav()
        } catch {
          next('/login')
        }
      } 
    //   else if (store.state.auth && to.meta.requireAuth) {
    //     store.getters['permitions/permition'](to.meta.permition) ? next() : next('/login')
    //   } 
      else {
        next()
      }
})

export default router
