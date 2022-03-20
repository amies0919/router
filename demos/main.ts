// necessary for webpack
///<reference path="../src/global.d.ts"/>
import { createApp, ComponentPublicInstance } from 'vue'
import { router } from './router'
import App from './App.vue'

declare global {
  interface Window {
    vm: ComponentPublicInstance
    r: typeof router
  }
}
const app = createApp(App)
app.use(router)
window.vm = app.mount('#app')
