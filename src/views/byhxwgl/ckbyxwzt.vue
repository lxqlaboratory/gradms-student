<template>
  <div class="app-container">
    <table width="100%" class="content">
      <tbody>
      <tr>
        <td style="text-align:left; color: #9b0d14;font-size: 13px;line-height: 18px">
          {{ $t('checkGraduationDegreeStatus.note1') }}<br>
          {{ $t('checkGraduationDegreeStatus.note2') }}<br>
          {{ $t('checkGraduationDegreeStatus.note3') }}<br>
          {{ $t('checkGraduationDegreeStatus.note4') }}
        </td>
      </tr>
      </tbody>
    </table>
    <div  id="mountNode" v-show="showEn">
    </div>
    <div  id="mountNode2" v-show="showZn">
    </div>
<!--        <div>-->
<!--          <img :src="dataURL">-->
<!--        </div>-->
<!--    <el-button  @click="file">-->

<!--    </el-button>-->
  </div>
</template>

<script>
  import { studentGraduateDegreeStateView } from '@/api/graduate'
  import { studentGraduateDegreeStateView2 } from '@/api/graduate'
  import { uploadStateGraphImageData } from '@/api/graduate'
  import insertCss from 'insert-css';
  import G6 from '@antv/g6'
  export default {
    // name: 'StudentGraduateDegreeStateView',
    data() {
      return {
        data: {},
        data2:{},
        list: [],
        showEn: true,
        showZn: false,
        color: '',
        dataURL: '',
        nodeList: []
      }
    },
    created() { // 不能在created方法中初始化
      this.fetchData()
    },
    mounted() {

    },
    watch: {
      '$i18n.locale'(val, olfval) {
        if(val === 'en'){
          this.showZn = false
          this.showEn = true
        }else {
          this.showEn = false
          this.showZn = true
        }
      }
    },
    methods: {
      fetchData() {
        studentGraduateDegreeStateView({ 'session': document.cookie }).then(res => {
          console.log(res)
          this.data = res.data
          this.initG6()
            })
        studentGraduateDegreeStateView2({ 'session': document.cookie }).then(res => {
          console.log(res)
          this.data2 = res.data
          this.initG7()
        })
      },
      initG6() {
        var data = this.data
        var graph = new G6.Graph({
          container: 'mountNode',
          width: 2000,
          height: 1000,
          defaultNode: {
            shape: 'rect',
            size: [230, 50],
            labelCfg: {
              style: {
                fill: '#333',
                fontSize: 11,
                textAlign: 'center',
                textBaseline: 'middle',
              }
            }
          },
          defaultEdge: {
            type: 'polyline',
            style: {
              radius: 10,
              offset: 30,
              endArrow: true,
              stroke: '#333',
            },
          },
          modes: {
            default: ['zoom-canvas', 'drag-canvas',
              {
                type: 'tooltip',
                formatText: function formatText(model) {
                  var text =  model.description;
                  return text;
                },
              }
            ],
          },
        })
        insertCss(`
     .g6-tooltip {
       border: 1px solid #336699;
       border-radius: 6px;
      font-size: 15px;
      color: #545454;
      background-color: rgba(255, 255, 255, 0.9);
      padding: 12px 8px;
       box-shadow: rgb(174, 174, 174) 0px 0px 10px;
     }
      `);
        graph.read(data)
        //获取点击节点
        graph.on('node:click', ev => {
          var shape = ev.target;
          var node = ev.item;
          console.log(node)
          console.log(node.defaultCfg.model.id)
          this.nodeClick(node.defaultCfg.model.id)
        });
        //graph.downloadImage();
        this.dataURL   = graph.toDataURL();
        console.log(this.dataURL );
        //鼠标移入
        // graph.on('node:mouseenter', ev => {
        //   var shape = ev.target;
        //   var node = ev.item;
        //   console.log(node.defaultCfg.model.description)
        // });
      },
      initG7() {
        var data = this.data2
        var graph = new G6.Graph({
          container: 'mountNode2',
          width: 2000,
          height: 1000,
          defaultNode: {
            shape: 'rect',
            size: [230, 50],
            labelCfg: {
              style: {
                fill: '#333',
                fontSize: 11,
                textAlign: 'center',
                textBaseline: 'middle',
              }
            }
          },
          defaultEdge: {
            type: 'polyline',
            style: {
              radius: 10,
              offset: 30,
              endArrow: true,
              stroke: '#333',
            },
          },
          modes: {
            default: ['zoom-canvas', 'drag-canvas',
              {
                type: 'tooltip',
                formatText: function formatText(model) {
                  var text =  model.description;
                  return text;
                },
              }
            ],
          },
        })
        insertCss(`
     .g6-tooltip {
       border: 1px solid #336699;
       border-radius: 6px;
      font-size: 15px;
      color: #545454;
      background-color: rgba(255, 255, 255, 0.9);
      padding: 12px 8px;
       box-shadow: rgb(174, 174, 174) 0px 0px 10px;
     }
      `);
        graph.read(data)
        //获取点击节点
        graph.on('node:click', ev => {
          var shape = ev.target;
          var node = ev.item;
          console.log(node)
          console.log(node.defaultCfg.model.id)
          this.nodeClick(node.defaultCfg.model.id)
        });
        //graph.downloadImage();
        this.dataURL   = graph.toDataURL();
        console.log(this.dataURL );
        //鼠标移入
        // graph.on('node:mouseenter', ev => {
        //   var shape = ev.target;
        //   var node = ev.item;
        //   console.log(node.defaultCfg.model.description)
        // });
      },
      nodeClick(id){
      },
      // file(){
      //   uploadStateGraphImageData({ 'session': document.cookie,'fileData': this.dataURL }).then(res => {
      //
      //   })
      // }
    }
  }
</script>

<style scoped>
  .allBtn{
    background-color: #A50001;
    color: #ffffff;
    border: 0px;
  }
  .colstyle1,.colstyle2{
    font-size: 12px;
    text-align: center;
    height: 30px;
  }
  .colstyle1{
    color: #909399;
    max-height: 60px;
    font-weight: bold;

  }
  .colstyle2{
    color: #606266;
  }
  .content{
    width:100%;
    border-top: 1px solid #EBEEF5;
    border-left: 1px solid #EBEEF5;
    border-spacing: 0;/*去掉单元格间隙*/
    margin-top: 15px;
  }
  .content td {
    padding: 10px 25px;
    border-bottom: 1px solid #EBEEF5;
    border-right: 1px solid #EBEEF5;
  }
  .titlable{
    text-align: center;
    color: #A50001;
    font-size: 16px;
  }
  .leftsidespan{
    align:center;
    width:13%;
    font-size: 12px;
    color: #909399;
    letter-spacing:2px;
  }
  .rightsidespan{
    align:center;
    font-size: 12px;
    color: #606266;
    letter-spacing:3px;
    text-indent:30px;
    line-height: 18px;
  }
  .part_bottom_1{
    font-size: 12px;
    text-align: center;
    color: #909399;
  }
  .part_bottom_2{
    font-size: 12px;
    text-align: center;
    color: #606266;
  }

</style>


