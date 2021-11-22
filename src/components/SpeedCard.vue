<template>
  <v-chart class="chart" :option="option"></v-chart>
</template>

<script>
import ECharts from 'vue-echarts'
import {use} from "echarts/core";

import {
  CanvasRenderer
} from 'echarts/renderers'
import {
  LineChart
} from 'echarts/charts'
import {
  GridComponent,
  TooltipComponent
} from 'echarts/components'

use([
  CanvasRenderer,
  LineChart,
  GridComponent,
  TooltipComponent
]);

export default {
  name: "SpeedCard",
  components: {'v-chart': ECharts},
  data() {
    return {
      option: null, 
      x : [],
      y1: [], 
      y2: [],
      y3: [], 
      y4: [],   
    }
  },
  methods: {
    changeData(packetTrans) {
        console.log(packetTrans)        
        this.x.push(this.x.length)
        this.y1.push(packetTrans[0])
        this.y2.push(packetTrans[1])
        this.y3.push(packetTrans[2])
        this.y4.push(packetTrans[3])
        
        console.log("1111", this.x, this.y1)

        this.option = {
            legend:{
                data:["flow1", "flow2","flow3","flow4"]
            },

            xAxis: {
            type: 'category',
            name: 'magnitude',
            data: this.x,
            },
                
            yAxis: {
            type: 'value'
            },
            series: [
                {
                    data: this.y1,
                    type: 'line',
                    smooth: true,
                },
                {
                    data: this.y2,
                    type: 'line',
                    smooth: true,
                },
                {
                    data: this.y3,
                    type: 'line',
                    smooth: true,
                },
                {
                    data: this.y4,
                    type: 'line',
                    smooth: true,
                },
                
            ]
        }
    }
  }
}
</script>

<style scoped>
.chart {
  width: calc(100% - 150px);
  height: 500px;
}
</style>