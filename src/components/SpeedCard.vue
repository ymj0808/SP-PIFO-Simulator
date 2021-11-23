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
      y : [],
      results: [],
    }
  },
  methods: {
    changeData(packetTrans) {     
        //console.log(packetTrans)
        this.x.push(this.x.length)
        
        if(this.y.length == 0){
            for(let i = 0; i < packetTrans.length; i++){
                let tmp = []
                tmp.push(packetTrans[i])
                this.y.push(tmp)
            }
        }
        else{
            for(let i = 0; i < packetTrans.length; i++){
                this.y[i].push(packetTrans[i])
            }
        }

        for(let i =0; i < packetTrans.length; i++){
            this.results.push({
                data: this.y[i],
                type: 'line',
                smooth: true,
            })
        }

        this.option = {
            legend:{
                data:["flow1", "flow2","flow3","flow4"]
            },

            xAxis: {
            type: 'category',
            name: 'time',
            data: this.x,
            },
                
            yAxis: {
            type: 'value',
            name: 'bandwidth',
            },
            series: this.results,
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