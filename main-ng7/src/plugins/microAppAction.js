import { initGlobalState } from 'qiankun';

// 这里可以写初始化数据
const initialState = {
  _router: '',
  test: 'main',
  routeUrl: '',
  queryParams: {},
}

// 初始化需要传递的对象
export const actions = (props) => initGlobalState(Object.assign(initialState, props));
console.log('actions', actions)

actions().onGlobalStateChange((state, prev) => {
  console.log('initialState', initialState)
  const { _router } = initialState;
  // state: 变更后的状态; prev 变更前的状态
  console.log('main：', state, prev);
  const { routeUrl, queryParams } = state;
  if (routeUrl) {
    console.log('routeUrl', routeUrl)
    // _router.navigate([routeUrl], { queryParams: queryParams });
    window.location.href = `${routeUrl}?queryParams=${encodeURIComponent(JSON.stringify(queryParams))}`
  }
});
