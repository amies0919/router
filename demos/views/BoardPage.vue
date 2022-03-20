<template>
  <div>
    <!-- <top-navbar></top-navbar> -->
    <!-- <router-view class="view left-sidebar" name="LeftSidebar"></router-view> -->
    <!-- <router-view class="view main-content"> -->
            我现在在首页，
      当前首页展示的是ID为{{id || '--'}}的看板
      <router-link to='/biGeneric'>查看通用分析页面</router-link>
    <!-- </router-view> -->

  </div>
</template>

<script>
import { defineComponent, getCurrentInstance, toRefs, watch } from 'vue'
import { useRoute } from '../../src'
import { RouterLink } from '../../src/RouterLink'

export default defineComponent({
  name: 'BoardPage',
  components: {
    RouterLink
  },
  props:{
    id: String
  },
  mounted(){
    console.log(this.$router)
    console.log(this.$route)
  },
  setup(props){
    const { proxy } = getCurrentInstance()
    console.log('getCurrentInstance...start')
    console.log(proxy.$router)
    console.log(proxy.$route)
    console.log('getCurrentInstance...end')
    //请注意，在模板中我们仍然可以访问 $router 和 $route，所以不需要在 setup 中返回 router 或 route。
    const route = useRoute()
    watch(
      () => props.id,
      async newId => {
        console.log(newId)
      }
    )
  }
})
</script>