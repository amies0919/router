<template>
  <div>
    您没有权限访问此页面,请申请权限后在访问，
    <router-link to='/'>返回首页</router-link>
  </div>
</template>

<script>
import { defineComponent, toRefs, watch } from 'vue'
import { useRoute } from '../../src'
import { RouterLink } from '../../src/RouterLink'

export default defineComponent({
  name: 'NoAuth',
  components: {
    RouterLink
  },
  setup(){
    //请注意，在模板中我们仍然可以访问 $router 和 $route，所以不需要在 setup 中返回 router 或 route。
    const route = useRoute()
    watch(
      () => route.params,
      async newParams => {
        console.log(newParams.pathMatch)
      }
    )
  }
})
</script>