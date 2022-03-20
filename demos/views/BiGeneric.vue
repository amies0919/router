<template>
   <div>
      我现在在通用分析页面，
      <ul>
        <li><router-link to='/boards/1'>查看看板</router-link></li>
      </ul>
   </div>
  
</template>
<script>
import { defineComponent, onBeforeMount, onMounted, onBeforeUpdate } from 'vue'
import { onBeforeRouteLeave, onBeforeRouteUpdate } from '../../src'
import { RouterLink } from '../../src/RouterLink'

export default defineComponent({
  name: 'BiGeneric',
  components: {
    RouterLink
  },
  //beforeRouteEnter 守卫 不能 访问 this，因为守卫在导航确认前被调用，因此即将登场的新组件还没被创建。
  //可以通过传一个回调给 next 来访问组件实例。在导航被确认的时候执行回调，并且把组件实例作为回调方法的参数： next(vm => { // 通过 `vm` 访问组件实例 })
  //beforeRouteEnter 是支持给 next 传递回调的唯一守卫
  //
  beforeRouteEnter: () => {
    console.log('我在组件内部beforeRouteEnter....')
  },
  //对于 beforeRouteUpdate 和 beforeRouteLeave 来说，this 已经可用了，所以不支持 传递回调
  beforeRouteUpdate: () => {
    console.log('我在组件内部beforeRouteUpdate....') 
  },
  beforeRouteLeave: () => {
     console.log('我在组件内部beforeRouteLeave....') 
     const answer = window.confirm('Do you really want to leave? you have unsaved changes!')
    if (!answer) return false
   
  },
  setup(){
    //组合式 API 守卫也可以用在任何由 <router-view> 渲染的组件中，它们不必像组件内守卫那样直接用在路由组件上。
    onBeforeRouteLeave(() => {
      console.log('setup...onBeforeRouteLeave...')
    })
    onBeforeRouteUpdate(() => {
      console.log('setup...onBeforeRouteUpdate...')
    })
    onBeforeMount(() => {
      console.log('onBeforeMount...')
    })
    onMounted(() => {
      console.log('onMounted...')
    })
    onBeforeUpdate(() => {
      console.log('onBeforeUpdate...')
    })
  }
})
</script>