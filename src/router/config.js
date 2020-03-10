import { lazy } from 'react';
import BasicLayout from '../layouts/BasicLayout'
import BlankLayout from '../layouts/BlankLayout'

const config = [
	{
		path: '/',
		component: BlankLayout,
		childRoutes: [
			{
				path: '/login',
				name: '登录页',
				icon: 'setting',
				component: lazy(() => import('../pages/Login'))
			},
			{
				path: '/',
				component: BasicLayout,
				childRoutes: [
					{
						path: '/welcome',
						name: 'DashBoard',
						icon: 'smile',
						component: lazy(() => import('../pages/Home')),
					},
					{
            path: '/home',
            name: 'home主页',
            icon: 'home',
            component: lazy(() => import('../pages/Home')),
					},
					{
						path: '/exception',
						childRoutes: [
							{
								path: '/exception/404',
								component: lazy(() => import('../pages/Exception/NotFound')),
							}
						]
					}
				]
			},
			{ path: '/', exact: true, redirect: '/welcome' },
			{ path: '*', exact: true, redirect: '/exception/404' },
		]
	}
]

export default config
