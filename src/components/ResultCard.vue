<template>
  <div>
    <a-row style="min-height: 100px" type="flex" justify="space-between">
      <a-col :span="24" style="border-right: 1px dashed #ddd">
        <a-list
          :grid="{ gutter: 16, xs: 1, sm: 2, lg: 24 }"
          :locale="{ emptyText: 'No more packages' }"
          :data-source="remainedPackages"
        >
          <template #renderItem="{item}">
            <a-list-item>
              <a-card
                class="package-small"
                :body-style="{ padding: '10px' }"
                :style="`background: ${$packageColor(item.id * 60)};`"
              >
                <p>{{item.size}}</p>
              </a-card>
            </a-list-item>
          </template>
        </a-list>
      </a-col>
    </a-row>


    

    <a-row style="min-height: 400px" type="flex" justify="space-between">
      <a-col :span="24" style="padding-left: 10px">
        <a-button type="primary" @click="finishNow">Speedup</a-button>

        <a-list item-layout="horizontal" :data-source="queueList">
          <template #renderItem="{ item, index }">
            <a-list-item>
              <div type="flex" style="width: 100%">
                <div>
                  <a-tag :color="$packageColor(item.bound)"> Bound: {{ item.bound }}</a-tag>
                  <a-tag :color="$packageColor(item.minRank)"> Min Rank: {{ item.minRank }}</a-tag>
                </div>
                <div style="width: 100%">
                  <p
                    style="
                      font-weight: bold;
                      font-size: 16px;
                      line-height: 30px;
                      text-align: center;
                    "
                  >
                    {{ `Queue #${index + 1}` }}
                  </p>
                  <a-list
                    :locale="{ emptyText: 'Empty list' }"
                    :grid="{ gutter: 4, xs: 1, sm: 2, lg: 24 }"
                    :data-source="item.list"
                    class="queue"
                  >
                    <template #renderItem="{ item }">
                      <a-list-item>
                        <a-card
                          class="package-small"
                          :body-style="{ padding: '2px' }"
                          :style="`background: ${$packageColor(item.id * 60)};`"
                        >
                          <!-- <p :style="`font-weight: bold;`">
                            <codepen-circle-filled />
                          </p> -->
                          <p>{{ item.size }}</p>
                        </a-card>
                      </a-list-item>
                    </template>
                  </a-list>
                </div>
              </div>
            </a-list-item>
          </template>
        </a-list>
      </a-col>
    
      <a-col :span="24" style="border-right: 1px dashed #ddd">
        <a-button type="primary" @click="clear">Clear</a-button>
        <a-list item-layout="horizontal" :data-source="outputQueueList">
          <template #renderItem="{item}">
            <a-list-item>
              <div type="flex" style="width: 100%">                
                <div style="width: 100%">
                  <p
                    style="
                      font-weight: bold;
                      font-size: 16px;
                      line-height: 30px;
                      text-align: center;
                    "
                  >
                    {{ `Output`}}
                  </p>                  
                  <a-list
                    :locale="{ emptyText: 'Empty list' }"
                    :grid="{ gutter: 4, xs: 1, sm: 2, lg: 24 }"
                    :data-source="item.list"
                    class="queue"
                  >
                    <template #renderItem="{ item }">
                      <a-list-item>
                        <a-card
                          class="package-small"
                          :body-style="{ padding: '2px' }"
                          :style="`background: ${$packageColor(item.id * 60)};`"
                        >
                          <!-- <p :style="`font-weight: bold;`">
                            <codepen-circle-filled />
                          </p> -->
                          <p>{{ item.size }}</p>
                        </a-card>
                      </a-list-item>
                    </template>
                  </a-list>
                </div>
              </div>
            </a-list-item>
          </template>
        </a-list>
      </a-col>
    </a-row>
<!--
    <a-popover v-for="(item, i) in outputQueueList" :key="i">
      <li>outputQueue</li>
      <a-popover v-for="(pkt, j) in item.list" :key="j">
        R{{pkt.size}}:{{pkt.inversion}} {{pkt.preemption}}&#12288;;
      </a-popover>
      <li class="divider" role="presentation"></li>
    </a-popover>

-->
  </div>
</template>



<script>
export default {
  name: "ResultCard",
  props: {
    packages: {
      type: Array,
      required: true,
    },
    queueAmount: {
      type: Number,
      default: 4,
    },
    timeInterval: {
      type: Number,
      default: 1,
    },
    bufferSize:{
      type: Number,
      default: 1024,
    },
    flowAmount:{
      type: Number,
      default:4,
    },
    observeWin:{
      type: Number,
      default:10,
    },
    incast:{
      type: Number,
      default: 100,
    }
  },
  computed: {
    remainedPackages() {
      let tmpList = this.packages.slice(this.finishAmount).concat()
      return tmpList.reverse();
    },
  },
  data() {
    return {
      finishAmount: 0,
      outputAmount: 0,
      queueList: [],
      outputQueueList: [{
        list: [],
      }],      
      timer: null,
      packetsTrans: [],
    };
  },
  methods: {
    clear(){      
      this.outputQueueList = [{
        list: []
      }]
    },
    
    apply() {
      if (this.timer) {
        clearInterval(this.timer);
      }
      this.queueList = []
      this.finishAmount = 0
      this.outputAmount = 0
      for (let i = 0; i < this.queueAmount; i++) {
        this.queueList.push({bound: 0, list: [], minRank: 10000});
      }
      //for(let i = 0; i < this.bufferSize; i++){
      // this.popPackage()
      //}
      this.timer = setInterval(this.transmit, this.timeInterval * 1000)
      
    },

    transmit(){
      if(this.finishAmount < this.packages.length){
        this.popPackage()
      }      
      //if(this.finishAmount == this.packages.length || (this.finishAmount > this.bufferSize && this.outputAmount < this.packages.length)){
      //  this.output()
      //}

      if(this.finishAmount == this.packages.length || this.finishAmount % 100 < this.incast){
        this.output()
      }

      let tmpList = this.outputQueueList[0].list.concat()
      this.$emit('showInversionCharts', tmpList)
    },

    finishNow() {
      clearInterval(this.timer)
      while (this.outputAmount < this.packages.length) {
        this.transmit()
      }
    },

    popPackage() {
      if (this.finishAmount >= this.packages.length)
        return;
      const item = this.packages[this.finishAmount];
      this.finishAmount++;
      // push up
      for (let i = this.queueList.length - 1; i >= 0; i--) {
        if (item.size >= this.queueList[i].bound) {
          this.queueList[i].list.push(item);
          this.queueList[i].bound = item.size;
          // update the queue's minRank
          if (item.size < this.queueList[i].minRank) {
            this.queueList[i].minRank = item.size;
          }
          return;
        }
      }
      // push down
      // when pkt's rank < 1st queue bound
      this.queueList[0].list.push(item);
      // update the queue's minRank
      if (item.size < this.queueList[0].minRank) {
        this.queueList[0].minRank = item.size;
      }
      // decrease all queue bounds by cost = q1-rank
      for (let i = this.queueList.length - 1; i >= 0; i--) {
        this.queueList[i].bound -= this.queueList[0].bound - item.size;
      }
            
    },

    output() {
      if(this.packetsTrans.length == 0){
        for(let i = 0 ; i < this.flowAmount; ++i){
          this.packetsTrans.push(0)
        }
      }
      
      for (let i = 0; i < this.queueAmount; i++) {
        if(this.queueList[i].list.length <= 0){
          continue
        }
        let currentPkt = this.queueList[i].list.shift()
        this.outputQueueList[0].list.push(currentPkt)
        this.packetsTrans[currentPkt.id]++; 
        //console.log(currentPkt.id, this.outputAmount)

        for (let n = i; n < this.queueAmount; n++) {
          // inversion occurs
          if (this.queueList[n].minRank < currentPkt.size) {
            // travers to update the inversion array of the queue
            for (let k = 0; k < this.queueList[n].list.length; k++) {
              if (currentPkt.size > this.queueList[n].list[k].size) {
                this.queueList[n].list[k].inversion.push(currentPkt.size - this.queueList[n].list[k].size);
                this.queueList[n].list[k].preemption.push(currentPkt.size);                
              }
            }
          }
        }    
        
        this.outputAmount++
        if(this.outputAmount >= this.packages.length){
          clearInterval(this.timer)
        }
        if((this.outputAmount >= this.observeWin && this.outputAmount % this.observeWin == 0) || this.outputAmount == this.packages.length){
          let tmpList2 = this.packetsTrans.concat()          
          //this.packetsTrans = []          
          this.$emit('showSpeedCharts', tmpList2)
        }
        break
      }
      
    },

    transmit_orig() {
      let totalPackages = []
      // queue from up to down
      for (let i = 0; i < this.queueAmount; i++) {
        // transmit pkts in a queue
        for (let j = 0; j < this.queueList[i].list.length; j++) {
          const currentPkt = this.queueList[i].list[j];
          // record inversions in the current queue
          for (let m = j + 1; m < this.queueList[i].list.length; m++) {
            // inversion occurs
            if (currentPkt.size > this.queueList[i].list[m].size) {
              // update the inversion array of the queue
              this.queueList[i].list[m].inversion.push(currentPkt.size - this.queueList[i].list[m].size);
              this.queueList[i].list[m].preemption.push(currentPkt.size);
            }
          }
          // record inversions in lower queues
          for (let n = i + 1; n < this.queueAmount; n++) {
            // inversion occurs
            if (this.queueList[n].minRank < currentPkt.size) {
              // travers to update the inversion array of the queue
              for (let k = 0; k < this.queueList[n].list.length; k++) {
                if (currentPkt.size > this.queueList[n].list[k].size) {
                  this.queueList[n].list[k].inversion.push(currentPkt.size - this.queueList[n].list[k].size);
                  this.queueList[n].list[k].preemption.push(currentPkt.size);
                }
              }
            }
          }
        }
        totalPackages = totalPackages.concat(this.queueList[i].list)
      }
      this.$emit('showInversionCharts', totalPackages)
    },
  },
  beforeUnmount() {
    clearInterval(this.timer);
  },
};
</script>

<style scoped>
.package {
  color: #fff;
  border-radius: 10px;
}

.package >>> p {
  font-size: 16px;
  font-weight: 500;
  margin: 4px 0;
}

.package >>> .anticon {
  font-size: 22px;
}

.package-small {
  color: #fff;
  border-radius: 5px;
}

.package-small >>> p {
  font-size: 12px;
  font-weight: 500;
  margin: 4px 0;
  text-align: center;
}

.bound-text {
  width: 30px;
  height: 30px;
  border-radius: 15px;
  text-align: center;
  line-height: 30px;
  font-size: 18px;
  color: #fff;
}

.queue >>> .ant-row {
  flex-direction: row-reverse;
}
</style>
