<template>
  <div class="container">
    <div>
      <table class="content">
        <tr>
          <td colspan="8" class="noticeSpan">{{ $t('submitOpeningReport.note') }}</td>
        </tr>
        <tr>
          <td colspan="2" class="colspan1">{{ $t('submitOpeningReport.thesisTitle') }}</td>
          <td colspan="6" class="colspan2">
            <el-input v-model="title" size="mini" />
          </td>
        </tr>
        <tr>
          <td class="colspan1" colspan="2">{{ $t('submitOpeningReport.thesisType') }}</td>
          <td class="colspan2" colspan="2">
            <el-select v-model="gradThesisTypeCode" placeholder="pleaseChoose" size="mini" style="width: 70%">
              <el-option
                v-for="item in ptsslwlxlist"
                :key="item.value"
                :label="$t(item.name)"
                :value="item.value"
              />
            </el-select>
          </td>
          <td class="colspan1" colspan="2">{{ $t('submitOpeningReport.thesisTopic') }}</td>
          <td class="colspan2" colspan="2">
            <el-select v-model="gradThesisTopicSourceCode" placeholder="pleaseChoose" size="mini" style="width: 70%">
              <el-option
                v-for="item in ptssxtlylist"
                :key="item.value"
                :label="$t(item.name)"
                :value="item.value"
              />
            </el-select>
          </td>
        </tr>
        <tr>
          <td class="colspan1" colspan="2">{{ $t('submitOpeningReport.opentingReportResult') }}</td>
          <td class="colspan2" colspan="2">
            {{ judgeState }}
          </td>
          <td class="colspan1" colspan="2">{{ $t('submitOpeningReport.opentingReportTime') }}</td>
          <td class="colspan2" colspan="2">
            {{ judgeTimeStr }}
          </td>
        </tr>
        <tr>
          <td colspan="2" class="colspan1">{{ $t('submitOpeningReport.midtermResult') }}</td>
          <td colspan="6" class="colspan2">
            {{ midJudgeState }}
          </td>
        </tr>
        <tr>
          <td colspan="8">{{ $t('submitOpeningReport.subjectReaserch') }}</td>
        </tr>
        <tr>
          <td colspan="8">
            <el-input
              v-model="itemIntroduce"
              style="width: 100%"
              class="elinput"
              type="textarea"
              placeholder="请输入内容"
              maxlength="800"
              rows="8"
              show-word-limit
            />
          </td>
        </tr>
        <tr>
          <td colspan="8" align="center">
            <el-button class="allBtn" size="mini" @click="stuOpenSubmit">{{ $t('route.submit') }}</el-button>
          </td>
        </tr>
      </table>

    </div>
  </div>
</template>
<script>
import { stuOpenTopicReportInit } from '@/api/stuOpenTopicReport'
import { stuOpenTopicReportInsert } from '@/api/stuOpenTopicReport'
export default {
  name: 'Tjktbg',
  data() {
    return {
      gradeList: '',
      title: '',
      judgeState: '',
      gradThesisTypeCode: '',
      gradThesisTopicSourceCode: '',
      topicSelectSort: '',
      ptsslwlxlist: [],
      ptssxtlylist: [],
      judgeTimeStr: '',
      midJudgeState: '',
      midJudgeTimeStr: '',
      textarea: '',
      itemIntroduce: '',
      ptsslwlxlistCode: ''
    }
  },
  created() {
    this.fetchData()
  },
  methods: {
    fetchData() {
      stuOpenTopicReportInit().then(res => {
        this.ptsslwlxlist = res.data.ptsslwlxlist
        this.ptssxtlylist = res.data.ptssxtlylist
        this.gradThesisTypeCode = res.data.gradThesisTypeCode
        this.gradThesisTopicSourceCode = res.data.gradThesisTopicSourceCode
        this.itemIntroduce = res.data.itemIntroduce
        this.judgeTimeStr = res.data.judgeTimeStr
        this.midJudgeState = res.data.midJudgeState
        this.midJudgeTimeStr = res.data.midJudgeTimeStr
        this.title = res.data.title
        this.judgeState = res.data.judgeState
        this.topicSelectSort = res.data.topicSelectSort
      })
    },
    stuOpenSubmit() {
      if(this.title == null){
        this.$message({
          message: '论文题目不能为空',
          type: 'error'
        })
      }else {
        stuOpenTopicReportInsert({ 'itemIntroduce': this.itemIntroduce ,'gradThesisTypeCode': this.gradThesisTypeCode, 'title': this.title ,'gradThesisTopicSourceCode': this.gradThesisTopicSourceCode }).then(res => {
          if (res.code == 0) {
            this.$message({
              message: '提交成功',
              type: 'success'
            })
          } else {
            this.$message({
              message: '提交失败',
              type: 'error'
            })
          }
        }).catch(e => {

        })
      }

    }
  }
}
</script>

<style scoped>
  .container{
    margin:20px;
  }
  .noticeSpan{
    color: #A50001;
    padding: 12px;
    line-height: 18px;
  }
  .content{
    width:100%;
    border-top: 1px solid #EBEEF5;
    border-left: 1px solid #EBEEF5;
    border-spacing: 0;/*去掉单元格间隙*/
    margin-top: 15px;
    margin-bottom: 15px;
  }
  .content tr{
    width: 100%;
  }
  .content td {
    padding: 10px 20px;
    border-bottom: 1px solid #EBEEF5;
    border-right: 1px solid #EBEEF5;
    font-size: 12px;
  }
  .content td .el-input{
    width: 60%;
  }
  .colspan1{
    color: #909399;
    font-weight: bold;
    text-align: center;
  }
  .colspan2{
    color:  #606266;
  }
  .elinput{
    border: 1px solid #EBEEF5;
    border-radius: 4px;
    outline: none;
    width: 60%;
    line-height: 18px;
  }
  .allBtn{
    background-color: #A50001;
    border: none;
    color: #ffffff;
  }

</style>
