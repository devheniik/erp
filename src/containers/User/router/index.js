export default [
    {
        path: '/login',
        name: 'Login',
        component: () => import('@user/views/Login.vue'),
        meta: {
            layout: 'Empty',
            requreAuth: false,
            permition: null
        }
    },
    {
        path: '/umodal/:api',
        name: 'umodal',
        props: (route) => ({
            api: route.params.api,
            params: route.query
         }), 
        component: () => import('../../../components/UModal.vue'),
        meta: {
            layout: 'Empty',
            requreAuth: false,
            permition: null
        }
    },
    {
        path: '/finder',
        name: 'finder',
        props: (route) => ({ 
            params: route.query
         }), 
        component: () => import('../../../components/Finder.vue'),
        meta: {
            layout: 'Empty',
            requreAuth: false,
            permition: null
        }
    },
    {
        path: '/filial',
        name: 'filial',
        component: () => import('@user/views/Filial.vue'),
        meta: {
            layout: 'SideMenu',
            requreAuth: false,
            permition: null, 
            uname: 'filial'
        }
    },
    {
        path: '/:pathMatch(.*)*',
        name: 'Not Found',
        component: () => import('@user/views/404.vue'), 
        meta: {
            layout: 'Empty',
            requreAuth: false,
            permition: null,
            group: null
        }
      }, 
]