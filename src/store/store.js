import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)


const fetchBar = function () {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve('bar 组件返回 ajax 数据');
    }, 1000);
  });
};

function createStore() {
  const store = new Vuex.Store({
    state: {
      bar: ' '
    },
    mutations: {
      'SET_BAR'(state, data) {
        state.bar = data
      }
    },
    actions: {
      // 可以看成是一个异步请求，在成功回调中commit相应的mutations进行状态修改
      fetchBar({ commit }) {
        return fetchBar().then((data) => {
          commit('SET_BAR', data)
        }).catch((err) => {
          console.error(err);
        })
      }
    }
  })

  // store.js同样也会被打包到服务器运行的server.bundle.js中，所以运行环境不一定是浏览器，所以需要对于window做判断，防止报错，如果有window.__INITIAL_STATE__
  if (typeof window !== 'undefined' && window.__INITIAL_STATE__) {
    const storeState = window.__INITIAL_STATE__
    console.log(storeState);
    store.replaceState(storeState)
  }

  return store
}

export default createStore

