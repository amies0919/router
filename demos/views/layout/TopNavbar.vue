<template>
   <div class="top-nav">
      <div>LOGO</div>
      <ul>
        <li><router-link to='/index.html'>首页</router-link></li>
        <li><router-link to='/biGeneric'>通用分析</router-link></li>
      </ul>
      <div>用户信息</div>
   </div>
  
</template>
<script>
import { defineComponent, onBeforeMount, onMounted, onBeforeUpdate } from 'vue'
import { onBeforeRouteLeave, onBeforeRouteUpdate } from '../../../src'
import { RouterLink } from '../../../src/RouterLink'

export default defineComponent({
  name: 'TopNavbar',
  components: {
    RouterLink
  },
  setup(){
  }
})
</script>