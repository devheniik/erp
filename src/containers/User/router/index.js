export default [
    {
        path: '/login',
        name: 'Login',
        component: () => import('@user/views/Login.vue'),
        meta: {
            layout: 'Empty',
            requreAuth: false,
            permition: null,
            group: null
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
      }
]