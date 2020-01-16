<template>
  <div class="container">
    <div>
      <table class="content">
        <tr>
          <td colspan="8" class="noticeSpan">{{$t('DoctorPaperSelfEvaluate.note')}}</td>
        </tr>
        <tr>
          <td colspan="8" style="text-align: center;font-size: 15px;font-weight: bold">{{$t('DoctorPaperSelfEvaluate.title')}}</td>
        </tr>
        <tr>
          <td width="25%" class="colspan1">{{$t('DoctorPaperSelfEvaluate.paperTitle')}}</td>
          <td width="75%" class="colspan2">
            {{ $t(thesisName) }}
          </td>
        </tr>
        <tr>
          <td class="colspan1">{{$t('DoctorPaperSelfEvaluate.subjectMajor')}}</td>
          <td class="colspan2">
            {{ $t(majorName) }}
          </td>
        </tr>
        <tr>
          <td class="colspan1">{{$t('DoctorPaperSelfEvaluate.researchDirection')}}</td>
          <td class="colspan2">
            {{ $t(raseResearch) }}
            <!--<span class="noticeSpan"> 研究方向可以在学生上传学位论文页面维护</span>-->
          </td>
        </tr>
      </table>
      <table class="content">
        <tr>
          <td width="25%" class="colspan1">{{$t('DoctorPaperSelfEvaluate.sequence')}}</td>
          <td width="75%" class="colspan1">{{$t('DoctorPaperSelfEvaluate.note1')}}</td>
        </tr>
        <tr>
          <td width="25%" class="colspan1">{{$t('DoctorPaperSelfEvaluate.innovationPoints1')}}</td>
          <td width="75%" class="colspan2">
            <el-input
              v-model="gradInnovation1"
              class="elinput"
              type="textarea"
              placeholder="请输入内容"
              maxlength="100"
              rows="4"
              show-word-limit
            />
          </td>
        </tr>
        <tr>
          <td class="colspan1">{{$t('DoctorPaperSelfEvaluate.innovationPoints2')}}</td>
          <td class="colspan2">
            <el-input
              v-model="gradInnovation2"
              class="elinput"
              type="textarea"
              placeholder="请输入内容"
              maxlength="100"
              rows="4"
              show-word-limit
            />
          </td>
        </tr>
        <tr>
          <td class="colspan1">{{$t('DoctorPaperSelfEvaluate.innovationPoints3')}}</td>
          <td class="colspan2">
            <el-input
              v-model="gradInnovation3"
              class="elinput"
              type="textarea"
              placeholder="请输入内容"
              maxlength="100"
              rows="4"
              show-word-limit
            />
          </td>
        </tr>
        <tr>
          <td colspan="8" class="colspan1">{{$t('DoctorPaperSelfEvaluate.shortcomings')}}</td>
        </tr>
        <tr>
          <td class="colspan1">{{$t('DoctorPaperSelfEvaluate.shortcomings1')}}</td>
          <td class="colspan2">
            <el-input
              v-model="gradShortage"
              class="elinput"
              type="textarea"
              placeholder="请输入内容"
              maxlength="100"
              rows="4"
              show-word-limit
            />
          </td>
        </tr>
        <tr>
          <td colspan="8" align="center">
            <el-button class="allBtn" size="mini" @click="thesisShortSubmit">{{$t('DoctorPaperSelfEvaluate.submit')}}</el-button>
            <el-button class="allBtn" size="mini"><a href="/gradms/api/degree/downLoadZiPingBiao" download="bszpb.pdf">{{$t('reviewTheDefenseInformation.DownloadDoctorSelfEvaluationForm')}}</a></el-button>
          </td>
        </tr>
      </table>
    </div>
  </div>
</template>

<script>
import { doctorThesisSelfEstimationInit } from '@/api/doctorThesisSelfEstimation'
import { doctorThesisSelfEstimationInsert } from '@/api/doctorThesisSelfEstimation'
export default {
  data() {
    return {
      input:'',
      text: '',
      textarea: '',
      thesisName: '',
      majorName: '',
      raseResearch: '',
      gradInnovation1: '',
      gradInnovation2: '',
      gradInnovation3: '',
      gradShortage: ''
    }
  },
  created() {
    this.fetchData()
  },
  methods: {
    fetchData() {
      doctorThesisSelfEstimationInit().then(res => {
        this.thesisName = res.data.thesisName
        this.majorName = res.data.majorName
        this.raseResearch = res.data.raseResearch
        this.gradInnovation1 = res.data.gradInnovation1
        this.gradInnovation2 = res.data.gradInnovation2
        this.gradInnovation3 = res.data.gradInnovation3
        this.gradShortage = res.data.gradShortage
      })
    },
    thesisShortSubmit() {
      doctorThesisSelfEstimationInsert({ 'gradInnovation1': this.gradInnovation1, 'gradInnovation2': this.gradInnovation2, 'gradInnovation3': this.gradInnovation3, 'gradShortage': this.gradShortage }).then(res => {
        if (res.code == 0) {
          this.$message({
            message: '提交成功',
            type: 'sucess'
          })
        } else {
          this.$message({
            message: '提交失败',
            type: 'sucess'
          })
        }
      }).catch(e => {

      })
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
