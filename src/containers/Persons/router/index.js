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
]