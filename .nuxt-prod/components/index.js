export { default as Alert } from '../../components/global/Alert.vue'
export { default as ThemeSwitcher } from '../../components/ThemeSwitcher.vue'

export const LazyAlert = import('../../components/global/Alert.vue' /* webpackChunkName: "components/global/Alert'}" */).then(c => c.default || c)
export const LazyThemeSwitcher = import('../../components/ThemeSwitcher.vue' /* webpackChunkName: "components/ThemeSwitcher'}" */).then(c => c.default || c)
