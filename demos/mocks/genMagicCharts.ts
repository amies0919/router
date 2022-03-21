import { defineComponent, h } from 'vue'

import * as echarts from 'echarts/core'
// 引入柱状图图表，图表后缀都为 Chart
import { BarChart, LineChart, PieChart } from 'echarts/charts'
// 引入提示框，标题，直角坐标系，数据集，内置数据转换器组件，组件后缀都为 Component
import {
  TitleComponent,
  TooltipComponent,
  GridComponent,
  DatasetComponent,
  TransformComponent,
  LegendComponent,
  ToolboxComponent,
} from 'echarts/components'
// 标签自动布局，全局过渡动画等特性
import { LabelLayout, UniversalTransition } from 'echarts/features'
import { CanvasRenderer } from 'echarts/renderers'
echarts.use([
  TitleComponent,
  TooltipComponent,
  GridComponent,
  DatasetComponent,
  TransformComponent,
  LegendComponent,
  ToolboxComponent,
  BarChart,
  LineChart,
  LabelLayout,
  PieChart,
  UniversalTransition,
  CanvasRenderer,
])

import { options as lineOptions } from './utils/line'
import { options as barOptions } from './utils/bar'

export interface MagicCharts {
  name: string //图表的标题
  type: string //图表的类型 支持自定义、线图、柱图
  prefix?: string // 图表容器id 或着 如表组件名称 可以自定义前缀
  containerStyle?: any //图表绘制容器的样式，跟div css样式完全对齐
  customOptions?: any
}
export class ChartsFactory implements MagicCharts {
  //绘制图表的容器 id必须唯一
  public id: string
  public name: string
  public type: string
  public prefix: string
  public containerStyle?: any
  public customOptions?: any

  public instance: any

  constructor(options: MagicCharts) {
    this.name = options.name || '图表'
    this.type = options.type || 'line'
    this.prefix = options.prefix || 'Magic'
    //id 计算规则是 前缀prefix_encodeURI(名称name)_当前时间戳_0,1000的随机数据
    this.id = this.genComponentId()
    this.containerStyle = options.containerStyle || { height: '200px' }
    this.customOptions = options.customOptions
  }

  genComponentName() {
    return `${this.prefix}${this.type}`
  }

  genComponentId() {
    this.id = `${this.prefix}_${encodeURI(
      this.name
    )}_${new Date().getTime()}_${Math.floor(Math.random() * 1000)}`
    return this.id
  }

  genChartsComponent() {
    return defineComponent({
      name: this.genComponentName(),
      render: () => {
        return h('div', { id: this.id, style: this.containerStyle })
      },
    })
  }
  mergeOptions(options) {
    return Object.assign(options, {
      title: {
        text: this.name,
        left: 'center',
        textStyle: {
          fontSize: 12,
          color: '#666',
        },
      },
    })
  }

  genOption() {
    //自定义的options
    if (this.type === 'custom') {
      if (!this.customOptions) console.error('没有传入自定义的options')
      return this.mergeOptions(this.customOptions)
    }
    if (this.type === 'bar') {
      return this.mergeOptions(barOptions)
    }
    return this.mergeOptions(lineOptions)
  }

  init() {
    if (!this.id) console.error('没有找到图表挂载的id')
    const chartContainer = document.getElementById(this.id) as HTMLElement
    const myChart = echarts.init(chartContainer)
    this.instance = myChart
  }

  render() {
    if (!this.instance) this.init()
    this.instance && this.instance.setOption(this.genOption())
  }
}
