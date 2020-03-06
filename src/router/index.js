import { lazy } from 'react';
export const routes = [
    {
        path: '/home',
        exact: true,
        component: lazy(() => import('../pages/Home/index'))
    },
    {
        path: '/login',
        exact: true,
        component: lazy(() => import('../pages/Login/index'))
    },
    {
        path: '/404',
        exact: true,
        component: lazy(() => import('../pages/404/index'))
    }
];