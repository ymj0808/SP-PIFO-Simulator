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
  TooltipComponent,  
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
        this.x.push(this.x.length * 10)
        
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
        var colorList = ['#5470c6', '#91cc75','#fac858','#ee6666','#73c0de','#3ba272','#fc8452','#9a60b4','#ea7ccc',]
        var nameList = []

        for(let i = 0; i < packetTrans.length; i++){
          nameList.push("flow" + i)
          this.results.push({
              name: nameList[i],
              data: this.y[i],
              type: 'line',
              smooth: true,
              itemStyle: {
                      normal: {
                          color: colorList[i % colorList.length]
                      }
                  },
          })
        }

        this.option = {
            legend:{
                data:nameList
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