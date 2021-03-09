<template>
  <div class="app-container">
    <table width="100%" class="content">
      <tbody>
      <tr>
        <td style="text-align:left; color: #9b0d14;font-size: 12px;line-height: 18px">
          {{ $t('checkDegreeInformation.note1') }}<br>
          {{ $t('checkDegreeInformation.note2') }}<br>
          {{ $t('checkDegreeInformation.note3') }}<br>
        </td>
      </tr>
      </tbody>
    </table>
    <table class="content" cellspacing="0" width="100%">
      <tbody><tr>
        <td>
          <div v-if="list.KexueMaster">
            <div class="titlable2">{{ $t(list.MasterTitle) }}</div><br>
            <div class="style2">
              &nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp{{ $t(list.kexuemaster)}}
            </div>
          </div>
          <div v-else-if="list.ZhuanyeMaster">
            <div class="titlable2">{{ $t(list.MasterTitle) }}</div><br>
            <div clbsp&nbsass="style2">
              &nbsp&np&nbsp&nbsp&nbsp&nbsp{{ $t(list.zhuanyemaster)}}
            </div>
          </div>
          <div v-else-if="list.KexueDoctor">
            <div class="titlable2">{{ $t(list.DoctorTitle) }}</div><br>
            <div class="style2">
              &nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp{{ $t(list.kexuedoctor)}}
            </div>
          </div>
          <div v-else="list.ZhuanyeDoctor">
            <div class="titlable2">{{ $t(list.DoctorTitle) }}</div><br>
            <div class="style2">
              &nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp{{ $t(list.zhuanyedoctor)}}
            </div>
          </div>
        </td>
      </tr>
      </tbody></table>
    <div>&nbsp;&nbsp;&nbsp;&nbsp;
    </div>
  </div>
</template>

<script>
  import { getStudentDegreeInfo } from '@/api/studentDegreeInfo'
  export default {
    data() {
      return {
        list: []
      }
    },
    created() {
      this.fetchData()
    },
    methods: {
      fetchData() {
        getStudentDegreeInfo().then(res => {
          console.log(res)
          this.list = res.data
        })
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
  .titlable2{
    text-align: center;
    color: black;
    font-size: 22px;
    font-weight: bold;
  }
  .style2{
    color: black;
    font-size: 22px;
    font-weight: bold;
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
  .news{
    float:left;
  }

</style>
