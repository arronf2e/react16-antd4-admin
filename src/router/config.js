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
						name: '欢迎页',
						icon: 'smile',
						component: lazy(() => import('../pages/Home')),
					},
					{
            path: '/home',
            name: 'home主页',
            icon: 'home',
            component: lazy(() => import('../pages/Home')),
          },
				]
			}
		]
	}
]

export default config
