export default [
  {
    path: '/user',
    layout: false,
    routes: [
      {
        path: '/user',
        routes: [
          {
            name: 'login',
            path: '/user/login',
            component: './user/Login',
          },
        ],
      },
    ],
  },
  {
    path: '/',
    redirect: '/welcome',
  },
  {
    path: '/welcome',
    name: 'welcome',
    icon: 'smile',
    component: './Welcome',
  },
  {
    name: 'sub-app-umi',
    icon: 'smile',
    path: '/sub-app-umi',
    microApp: 'sub-app-umi',
  },
  // {
  //   name: 'sub-app-vue',
  //   icon: 'smile',
  //   path: '/sub-app-vue',
  //   microApp: 'sub-app-vue',
  // },
  {
    component: './404',
  },
];
