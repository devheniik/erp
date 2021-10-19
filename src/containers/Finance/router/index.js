export default [
    // {
    //     path: '/finances/expense-report',
    //     name: 'finance-view',
    //     component: () => import('@finance/views/List.vue'),
    //     meta: {
    //         layout: 'SideMenu',
    //         requreAuth: false,
    //         permition: null,
    //         uname: 'finance-view'
    //     }
    // },
    // {
    //     path: '/sales/finances',
    //     name: 'sales-finance-view',
    //     component: () => import('@sale/views/finance/List.vue'),
    //     meta: {
    //         layout: 'SideMenu',
    //         requreAuth: false,
    //         permition: null,
    //         uname: 'sales-finance-view'
    //     }
    // },
    {
        path: '/finance/expense-report/:id',
        name: 'finance-expense-report-update',
        component: () => import('@finance/views/Expense/Update.vue'),
        meta: {
            layout: 'SideMenu',
            requreAuth: false,
            permition: null,
            uname: 'finance-expense-report-update'
        }
    },
]