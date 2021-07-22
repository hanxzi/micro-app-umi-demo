import { defineConfig } from 'umi';

export default defineConfig({
  nodeModulesTransform: {
    type: 'none',
  },
  routes: [
    { path: '/', component: '@/pages/index' },
    { path: '/edit', component: '@/pages/edit' },
  ],
  qiankun: {
    slave: {},
  },
  fastRefresh: {},
});
