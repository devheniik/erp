export default [
    {
        path: '/persons',
        name: 'PersonsView',
        component: () => import('@user/views/Login.vue'),
        meta: {
            layout: 'SideMenu',
            requreAuth: false,
            permition: null,
            uname: 'persons-view'
        }
    },
]