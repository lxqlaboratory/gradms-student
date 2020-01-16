<template>
  <div class="app-container">
    <el-button size="mini" class="allBtn" >
      <!--<a href="/gradms/api/degree/degreeThesisAttachmentDownload?degreeAttachId=93798" download="xwlwzg.pdf">下载</a>-->
      <a :href="'/gradms/api/degree/degreeThesisAttachmentDownload?degreeAttachId='+this.degreeAttachId" download="xwlwzg.pdf">下载</a>
    </el-button>
  </div>
</template>

<script>
  export default {
    data() {
      return {
      }
    },
    created() {
      this.fetchData()
    },
    methods: {
      fetchData(){
        this.degreeAttachId =  93798
        alert(this.degreeAttachId)
      }
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
    font-weight: bold;
    letter-spacing:2px;
  }
  .rightsidespan{
    align:center;
    font-size: 12px;
    color: #606266;
    letter-spacing:2px;
    text-indent:30px;
    line-height: 18px;
  }
  .part_bottom_1{
    font-size: 12px;
    text-align: center;
    color: #909399;
    font-weight: bold;
  }
  .part_bottom_2{
    font-size: 12px;
    text-align: center;
    color: #606266;
  }

</style>
