export default [
  {
    path: "/register/",
    component: () => import(/* webpackChunkName: "page--src--pages--register-vue" */ "/Users/pm/Dev/Gridsome-FaunaDB-Todo-master/src/pages/Register.vue")
  },
  {
    path: "/login/",
    component: () => import(/* webpackChunkName: "page--src--pages--login-vue" */ "/Users/pm/Dev/Gridsome-FaunaDB-Todo-master/src/pages/Login.vue")
  },
  {
    name: "404",
    path: "/404/",
    component: () => import(/* webpackChunkName: "page--node-modules--gridsome--app--pages--404-vue" */ "/Users/pm/Dev/Gridsome-FaunaDB-Todo-master/node_modules/gridsome/app/pages/404.vue")
  },
  {
    name: "home",
    path: "/",
    component: () => import(/* webpackChunkName: "page--src--pages--index-vue" */ "/Users/pm/Dev/Gridsome-FaunaDB-Todo-master/src/pages/Index.vue")
  },
  {
    name: "*",
    path: "*",
    component: () => import(/* webpackChunkName: "page--node-modules--gridsome--app--pages--404-vue" */ "/Users/pm/Dev/Gridsome-FaunaDB-Todo-master/node_modules/gridsome/app/pages/404.vue")
  }
]

