<template>
  <div>
    <router-view class="view top-navbar" name="TopNavbar"></router-view>
    <router-view class="view left-sidebar" name="LeftSidebar"></router-view>
    <router-view class="view main-content"></router-view>
  </div>
</template>

<script>
import { defineComponent} from 'vue'
import { RouterView } from '../src/RouterView'

export default defineComponent({
  name: 'App',
  components: { RouterView },
  setup() {

  },
})
</script>
