<template>
  <div>
    <!-- <top-navbar></top-navbar> -->
    <!-- <router-view class="view left-sidebar" name="LeftSidebar"></router-view> -->
    <!-- <router-view class="view main-content"> -->
            我现在在首页，
      当前首页展示的是ID为{{id || '--'}}的看板
    <router-link to='/biGeneric'>查看通用分析页面</router-link>
    <div :key="id" style="margin-top: 20px">
      <MagicChart />
    </div>
    <div :key="id" style="margin-top: 20px">
      <MagicChart2 />
    </div>
    <div :key="id" style="margin-top: 20px">
      <MagicChart3 />
    </div>
    <!-- </router-view> -->

  </div>
</template>

<script>
import { defineComponent, getCurrentInstance, toRefs, watch, onMounted } from 'vue'
import { useRoute } from '../../src'
import { RouterLink } from '../../src/RouterLink'
import { ChartsFactory } from '../mocks/genMagicCharts'

const magicEChat = new ChartsFactory({name:'图表1', type: 'line'})
const MagicChart = magicEChat.genChartsComponent()

const magicEChat2 = new ChartsFactory({name:'图表2', type: 'bar'})
const MagicChart2 = magicEChat2.genChartsComponent()

const magicEChat3 = new ChartsFactory({
  name:'图表3',
  type: 'custom',
  customOptions:  {
      title: {
        text: 'Referer of a Website',
        subtext: 'Fake Data',
        left: 'center'
      },
      tooltip: {
        trigger: 'item'
      },
      legend: {
        orient: 'vertical',
        left: 'left'
      },
      series: [
        {
          name: 'Access From',
          type: 'pie',
          radius: '50%',
          data: [
            { value: 1048, name: 'Search Engine' },
            { value: 735, name: 'Direct' },
            { value: 580, name: 'Email' },
            { value: 484, name: 'Union Ads' },
            { value: 300, name: 'Video Ads' }
          ],
          emphasis: {
            itemStyle: {
              shadowBlur: 10,
              shadowOffsetX: 0,
              shadowColor: 'rgba(0, 0, 0, 0.5)'
            }
          }
        }
      ]
    }
  })
const MagicChart3 = magicEChat3.genChartsComponent()

export default defineComponent({
  name: 'BoardPage',
  components: {
    RouterLink,
    MagicChart,
    MagicChart2,
    MagicChart3
  },
  props:{
    id: String
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
        newId == 1  && magicEChat.render()
        newId == 2 && magicEChat2.render()
        newId == 3  && magicEChat3.render()
      }
    )
    onMounted(()=>{
      props.id == 1 && magicEChat.render()
      props.id == 2 && magicEChat2.render()
      props.id == 3 && magicEChat3.render()
      console.log('mounted...')
    })
  }
})
</script>