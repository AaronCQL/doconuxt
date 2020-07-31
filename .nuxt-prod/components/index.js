export { default as Logo } from '../../components/Logo.vue'
export { default as ThemeSwitcher } from '../../components/ThemeSwitcher.vue'

export const LazyLogo = import('../../components/Logo.vue' /* webpackChunkName: "components/Logo'}" */).then(c => c.default || c)
export const LazyThemeSwitcher = import('../../components/ThemeSwitcher.vue' /* webpackChunkName: "components/ThemeSwitcher'}" */).then(c => c.default || c)
