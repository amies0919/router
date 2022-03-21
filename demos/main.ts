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

// console.log('应该可以打印执行')
// import { MockArray, Mama, applyToPPPPP } from './mocks/utils'
// const nana = MockArray<any>()
// nana.add({
//   name: '菜单1',
//   path: '/',
// })
// nana.add({
//   name: '菜单2',
//   path: '/index',
// })

// console.log(nana.list())
// // console.log(consumeItem())
// // console.log(nana.list())

// const mama = new Mama()
// console.log(mama.yangyang)

// const normalizedParamssss = applyToPPPPP.bind(null, v => '' + v)
// console.log(normalizedParamssss)
// console.log(
//   normalizedParamssss({
//     nanan: '9999',
//     num: 53333,
//   })
// )
