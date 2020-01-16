<template>
  <div class="container">
    <table class="content">
      <tr>
        <td colspan="12" style="color: #A50001">{{$t('tjbysq.txlwgzybz')}}
        </td>
      </tr>
      <tr>
        <td style="border-right:0px !important;" />
        <td style="border-right:0px !important;">
          <el-input
            v-model="workAndShort"
            class="inputSpan"
            type="textarea"
            placeholder="Please enter the content"
            maxlength="300"
            rows="12"
            show-word-limit
          />
        </td>
        <td />
      </tr>
      <tr>
        <td colspan="12" align="center">
          <el-button class="allBtn" size="mini" @click="thesisShortSubmit">{{$t('route.save')}}</el-button>
          <el-button class="allBtn" size="mini"><a href="/gradms/api/degree/degreeThesisApplyDownload" download="xwsqs.pdf">{{$t('reviewTheDefenseInformation.ApplicationForDegree')}}</a></el-button>
        </td>
      </tr>
    </table>
  </div>
</template>

<script>
import { inputThesisShortInfoInit } from '@/api/inputThesisShort'
import { inputThesisShortInfo } from '@/api/inputThesisShort'
import ElButton from '../../../node_modules/element-ui/packages/button/src/button'
export default {
  components: { ElButton },
  data() {
    return {
      text: '',
      textarea: '',
      workAndShort: ''
    }
  },
  created() {
    this.fetchData()
  },
  methods: {
    fetchData() {
      inputThesisShortInfoInit().then(res => {
        this.workAndShort = res.data.workAndShort
      })
    },
    thesisShortSubmit() {
      inputThesisShortInfo({ 'WorkAndShort': this.workAndShort }).then(res => {
        if (res.msg === 'sucess') {
          this.$message({
            message: '提交成功',
            type: 'success'
          })
        } else {
          this.$message({
            message: '提交失败',
            type: 'error'
          })
          this.fetchData()
        }
      }).catch(e => {

      })
    }
  }
}
</script>

<style scoped>
  .container{
    margin: 60px;
  }
  .content{
    width:100%;
    border-top: 1px solid #EBEEF5;
    border-left: 1px solid #EBEEF5;
    border-spacing: 0;/*去掉单元格间隙*/
    margin-top: 15px;
    margin-bottom: 15px;
  }
  .content td {
    padding: 10px 30px;
    border-bottom: 1px solid #EBEEF5;
    border-right: 1px solid #EBEEF5;
    font-size: 12px;
  }
  .inputSpan{
    color: #606266;
    line-height: 18px;
    letter-spacing:1px;
    text-align: left !important;
    font-size: 12px;
  }
  .allBtn{
    background-color: #A50001;
    border: none;
    color: #ffffff;
  }

</style>
