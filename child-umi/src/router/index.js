const MAIN_PATH = 'micro-app/micro/empty/';

const routerAry = [
  { name: 'page1', component: '@/pages/groupDemo/Table/index' },
  // { name: 'page2', component: '@/pages/groupDemo/Table/index' },
];

const microRoutes = routerAry.map((i) => ({
  ...i,
  path: `${MAIN_PATH}${i.name}:query`,
}));

export default microRoutes;
