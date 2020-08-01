import Vue from 'vue'

const globalComponents = {
  Alert: () => import('../../components/global/Alert.vue' /* webpackChunkName: "components/global/Alert" */).then(c => c.default || c)
}

for (const name in globalComponents) {
  Vue.component(name, globalComponents[name])
}
