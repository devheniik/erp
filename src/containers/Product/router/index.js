import create_get_card from '../api/create_card'
export default [
    {
        path: '/products',
        name: 'product-view',
        component: () => import('@product/views/List.vue'),
        meta: {
            layout: 'SideMenu',
            requreAuth: true,
            permition: null,
            uname: 'product-view'
        }
    }, 
    {
        path: '/products/new',
        name: 'product-create',
        component: () => import('../../../components/UModal.vue'),
        props: {
            api: create_get_card,
            params: {
                POSTER: 'Adding'
            }
        },
        meta: {
            layout: 'Empty',
            requreAuth: true,
            permition: null,
            uname: 'product-create'
        }
    },
    {
        path: '/product/:id',
        name: 'product-update',
        props: {
            api: 'products/show'
        },
        component: () => import('../../../components/UCard.vue'),
        meta: {
            layout: 'SideMenu',
            requreAuth: true,
            permition: null,
            uname: 'product-update'
        }
    },
]