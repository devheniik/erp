export default [
    {
        path: '/firms',
        name: 'firm-view',
        component: () => import('@firm/views/List.vue'),
        meta: {
            layout: 'SideMenu',
            requreAuth: true,
            permition: null,
            uname: 'firm-view'
        }
    },
    // {
    //     path: '/sales/firms',
    //     name: 'sales-firm-view',
    //     component: () => import('@sale/views/firm/List.vue'),
    //     meta: {
    //         layout: 'SideMenu',
    //         requreAuth: true,
    //         permition: null,
    //         uname: 'sales-firm-view'
    //     }
    // },
    {
        path: '/firm/:id',
        name: 'firm-update',
        component: () => import('../../../components/UCard.vue'),
        props: () => {
            api: 'firms/show' 
        },
        meta: {
            layout: 'SideMenu',
            requreAuth: true,
            permition: null,
            uname: 'firm-update'
        }
    },
]