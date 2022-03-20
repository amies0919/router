<template>
   <div>
      <ul>
        <li><router-link to='/boards/1'>查看看板1</router-link></li>
        <li><router-link to='/boards/2'>查看看板2</router-link></li>
        <li><router-link to='/boards/3'>查看看板3</router-link></li>
      </ul>
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