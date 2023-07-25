import { defineConfig } from '@umijs/max';
import microRoutes from './src/router';

export default defineConfig({
  antd: {},
  access: {},
  model: {},
  initialState: {},
  request: {},
  // layout: {
  //   title: '@umijs/max',
  // },
  qiankun: {
    slave: {},
  },
  publicPath: '/nimp-wfa-micro/',
  base: '/nimp-wfa-micro/',
  routes: [
    // { path: '/login', component: '@/pages/Table' },
    {
      path: 'main',
      component: '@/layouts/index',
      routes: [
        ...microRoutes,
        { path: 'table', component: '@/pages/groupDemo/Table' },
      ],
    },
  ],
  // routes: [
  //   {
  //     path: '/',
  //     redirect: '/home',
  //   },
  //   {
  //     name: '首页',
  //     path: '/home',
  //     component: './Home',
  //   },
  //   {
  //     name: '权限演示',
  //     path: '/access',
  //     component: './Access',
  //   },
  //   {
  //     name: ' CRUD 示例',
  //     path: '/table',
  //     component: './Table',
  //     // children: [
  //     //   {
  //     //     name: "测试",
  //     //     path: '/home',
  //     //     comments: './Home'
  //     //   }
  //     // ]
  //   },
  // ],
  npmClient: 'yarn',
});
