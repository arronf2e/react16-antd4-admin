import { lazy } from "react";
import BasicLayout from "@/layouts/BasicLayout";
import BlankLayout from "@/layouts/BlankLayout";

const config = [
  {
    path: "/",
    component: BlankLayout,
    childRoutes: [
      {
        path: "/login",
        name: "登录页",
        icon: "setting",
        component: lazy(() => import("@/pages/Login"))
      },
      {
        path: "/",
        component: BasicLayout,
        childRoutes: [
          {
            path: "/welcome",
            name: "DashBoard",
            icon: "smile",
            component: lazy(() => import("@/pages/Home"))
          },
          {
            path: "/home",
            name: "home主页",
            icon: "home",
            component: lazy(() => import("@/pages/Home"))
          },
          {
            path: "/system",
            name: "二级目录",
            icon: "setting",
            childRoutes: [
              {
                path: "/system/groovySet",
                name: "Groovy脚本管理",
                component: lazy(() => import("@/pages/Home"))
              },
              {
                path: "/system/user",
                name: "用户配置",
                icon: "user",
                component: lazy(() => import("@/pages/Home"))
              },
              {
                path: "/system/star",
                name: "个人中心",
                icon: "star",
                component: lazy(() => import("@/pages/Home"))
              },
            ]
          },
          {
            path: "/exception",
            childRoutes: [
              {
                path: "/exception/404",
                component: lazy(() => import("../pages/Exception/NotFound"))
              }
            ]
          }
        ]
      },
      { path: "/", exact: true, redirect: "/welcome" },
      { path: "*", exact: true, redirect: "/exception/404" }
    ]
  }
];

export default config;
