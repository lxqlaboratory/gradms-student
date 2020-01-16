<template>
  <div class="app-container">
    <a  style="position: fixed;z-index:-1;top: 0;left: 0;" ref="temp1" :href="'/gradms/api/base/getBytesBufferDataByDataKey?dataKey='+this.dataKey" download="xwsqs.pdf"></a>
    <a  style="position: fixed;z-index:-1;top: 0;left: 0;" ref="temp2" :href="'/gradms/api/base/getBytesBufferDataByDataKey?dataKey='+this.dataKey" download="xwsps.pdf"></a>
    <a  style="position: fixed;z-index:-1;top: 0;left: 0;" ref="temp3" :href="'/gradms/api/base/getBytesBufferDataByDataKey?dataKey='+this.dataKey" download="dbjlz.pdf"></a>
    <a  style="position: fixed;z-index:-1;top: 0;left: 0;" ref="temp4" :href="'/gradms/api/base/getBytesBufferDataByDataKey?dataKey='+this.dataKey" download="byspb.pdf"></a>
    <a  style="position: fixed;z-index:-1;top: 0;left: 0;" ref="temp5" :href="'/gradms/api/base/getBytesBufferDataByDataKey?dataKey='+this.dataKey" download="bssqdjb.pdf"></a>
    <a  style="position: fixed;z-index:-1;top: 0;left: 0;" ref="temp6" :href="'/gradms/api/base/getBytesBufferDataByDataKey?dataKey='+this.dataKey" download="kyhjlqkb.pdf"></a>
    <a  style="position: fixed;z-index:-1;top: 0;left: 0;" ref="temp7" :href="'/gradms/api/base/getBytesBufferDataByDataKey?dataKey='+this.dataKey" download="bszpb.pdf"></a>
    <a  style="position: fixed;z-index:-1;top: 0;left: 0;" ref="temp8" :href="'/gradms/api/base/getBytesBufferDataByDataKey?dataKey='+this.dataKey" download="xwlwzg.pdf"></a>
    <table width="100%">
      <tbody>
        <tr>
          <td style="text-align:center">
            <el-button size="mini" class="allBtn" @click="xwsqs()">{{$t('reviewTheDefenseInformation.ApplicationForDegree')}}</el-button>
            <el-button size="mini" class="allBtn" @click="xwsps()">{{$t('reviewTheDefenseInformation.DegreeApproval')}}</el-button>
            <el-button size="mini" class="allBtn" @click="dbjlz()">{{$t('reviewTheDefenseInformation.DefenseRecord')}}</el-button>
            <el-button size="mini" class="allBtn" @click="byspb()">{{$t('reviewTheDefenseInformation.GraduationApprovalForm')}}</el-button>
          </td>
        </tr>
        <tr>
          <td style="text-align:center">
            <el-button size="mini" class="allBtn" @click="bssqdjb()">{{$t('reviewTheDefenseInformation.DoctorApplicationRegistrationForm')}}</el-button>
            <el-button size="mini" class="allBtn" @click="kyhjlqkb()">{{$t('reviewTheDefenseInformation.TableOfResearcAndAwards')}}</el-button>
            <el-button size="mini" class="allBtn" @click="bszpb()">{{$t('reviewTheDefenseInformation.DownloadDoctorSelfEvaluationForm')}}</el-button>
            <el-button size="mini" class="allBtn" @click="xwlwzg()">{{$t('reviewTheDefenseInformation.FinalDissertation')}}</el-button>
          </td>
        </tr>
      </tbody>
    </table>

    <table class="content" width="100%">
      <tbody><tr>
               <td class="head" height="25" colspan="6">
                 <div class="titlable">{{$t('reviewTheDefenseInformation.studentBasicInfomation')}}</div>
               </td>
             </tr>
        <tr>
          <td width="10%" class="colstyle1">{{$t('reviewTheDefenseInformation.name')}} </td>
          <td width="25%" class="colstyle2"> {{ list.perName }}</td>
          <td width="10%" class="colstyle1">{{$t('reviewTheDefenseInformation.studentNum')}}</td>
          <td width="20%" class="colstyle2">{{ list.perNum }}</td>
          <td width="10%" class="colstyle1">{{$t('reviewTheDefenseInformation.studentType')}}</td>
          <td width="25%" class="colstyle2">{{ $t(list.stuTypeCode) }}</td>
        </tr>
        <tr>
          <td class="colstyle1">{{$t('reviewTheDefenseInformation.belongingCollege')}}</td>
          <td class="colstyle2">{{ $t(list.college) }}</td>
          <td class="colstyle1">{{$t('reviewTheDefenseInformation.major')}}</td>
          <td class="colstyle2">{{ $t(list.major) }}</td>
          <td class="colstyle1">{{$t('reviewTheDefenseInformation.tutur')}}</td>
          <td class="colstyle2">{{ $t(list.tutor) }}</td>
        </tr>
        <tr>
          <td class="colstyle1">{{$t('reviewTheDefenseInformation.title')}}</td>
          <td class="colstyle2">{{ $t(list.thesisTopic) }}</td>
          <td class="colstyle1">{{$t('reviewTheDefenseInformation.defenceTime')}}</td>
          <td class="colstyle2">{{ list.answerTime }}</td>
          <td class="colstyle1"> {{$t('reviewTheDefenseInformation.defencePlace')}}</td>
          <td class="colstyle2">{{ list.answerPlace }}</td>
        </tr>
      </tbody></table>

    <table class="content" width="100%">
      <tbody><tr>
        <td class="head" style="border-bottom: 0px">
          <div class="titlable">{{$t('reviewTheDefenseInformation.DissertationEvaluationInformation')}}</div>
        </td>
      </tr>
      </tbody>
    </table>

    <el-table
      :data="cList"
      border
      size="mini"
      style="width: 100%"
    >
      <el-table-column
        prop="date"
        :label="$t('reviewTheDefenseInformation.process')"
        width="70"
        align="center"
      >
        <template slot-scope="scope">
          {{ scope.row.proId }}
        </template>
      </el-table-column>
      <el-table-column
        prop="name"
        :label="$t('reviewTheDefenseInformation.name1')"
        align="center"
      >
        <template slot-scope="scope">
          {{ $t(scope.row.auditName) }}
        </template>
      </el-table-column>
      <el-table-column
        prop="address"
        width="120"
        :label="$t('reviewTheDefenseInformation.ProfessionalAndTechnicalPosts')"
        align="center"
      >
        <template slot-scope="scope">
          {{ $t(scope.row.duty) }}
        </template>
      </el-table-column>
      <el-table-column
        prop="address"
        width="120"
        :label="$t('reviewTheDefenseInformation.mastersupervisor2')"
        align="center"
      >
        <template slot-scope="scope">
          {{ $t(scope.row.isphDTutor) }}
        </template>
      </el-table-column>
      <el-table-column
        prop="address"
        :label="$t('reviewTheDefenseInformation.workUnit')"
        align="center"
      >
        <template slot-scope="scope">
          {{ $t(scope.row.workUnit) }}
        </template>
      </el-table-column>
      <el-table-column
        prop="address"
        width="120"
        :label="$t('reviewTheDefenseInformation.OverallRating')"
        align="center"
      >
        <template slot-scope="scope">
          {{ $t(scope.row.level) }}
        </template>
      </el-table-column>
      <el-table-column
        prop="address"
        :label="$t('reviewTheDefenseInformation.OverallConclusion')"
        align="center"
        width="120"
      >
        <template slot-scope="scope">
          {{ $t(scope.row.rank) }}
        </template>
      </el-table-column>
    </el-table>

    <table class="content">
      <tbody><tr>
        <td class="head" style="border-bottom: 0px">
          <div class="titlable">{{$t('reviewTheDefenseInformation.MemberofDefenseCommittee')}}</div>
        </td>
      </tr>
      </tbody></table>

    <el-table
      :data="mList"
      border
      size="mini"
      style="width: 100%"
    >
      <el-table-column
        prop="date"
        :label="$t('reviewTheDefenseInformation.Membership')"
        align="center"
      >
        <template slot-scope="scope">
          {{ $t(scope.row.commitMemberIdentity) }}
        </template>
      </el-table-column>
      <el-table-column
        prop="name"
        :label="$t('reviewTheDefenseInformation.MemberName')"
        align="center"
      >
        <template slot-scope="scope">
          {{ $t(scope.row.commitMember) }}
        </template>
      </el-table-column>
      <el-table-column
        prop="address"
        :label="$t('reviewTheDefenseInformation.ProfessionalAndTechnicalPosts')"
        align="center"
      >
        <template slot-scope="scope">
          {{ $t(scope.row.commitMemberTitle) }}
        </template>
      </el-table-column>
      <el-table-column
        prop="address"
        :label="$t('reviewTheDefenseInformation.unit')"
        align="center"
      >
        <template slot-scope="scope">
          {{ $t(scope.row.belongUnit) }}
        </template>
      </el-table-column>
      <el-table-column
        prop="address"
        :label="$t('reviewTheDefenseInformation.mastersupervisor2')"
        align="center"
      >
        <template slot-scope="scope">
          {{ $t(scope.row.isphDTutor) }}
        </template>
      </el-table-column>
    </el-table>

    <table class="content">
      <tbody>
        <tr>
          <td class="leftsidespan">{{$t('reviewTheDefenseInformation.NOTE1')}}
          </td>
          <td class="rightsidespan">{{ list.gradCommitIdea }} </td>
        </tr>
        <tr><td class="leftsidespan">{{$t('reviewTheDefenseInformation.NOTE2')}}</td>
          <td class="rightsidespan">{{ list.gradSceneRecord }}</td>
        </tr><tr>
          <td align="center" colspan="2" style="font-size: 12px;color:  #606266">{{$t('reviewTheDefenseInformation.NOTE3')}}{{ $t(list.wholeEvaluate) }}
          </td>
        </tr>
        <tr>
          <td align="center" colspan="2">
            <table class="content" width="100%">
              <tbody><tr>
                       <td class="titlable" colspan="6">{{$t('reviewTheDefenseInformation.NOTE4')}}</td>
                     </tr>
                <tr>
                  <td colspan="1">
                    <div class="part_bottom_1">{{$t('reviewTheDefenseInformation.NumberOfMembers')}}</div>
                  </td>
                  <td colspan="2" class="part_bottom_2">{{ list.gradAttendanceNum }}</td>
                  <td colspan="1">
                    <div class="part_bottom_1">{{$t('reviewTheDefenseInformation.NumberOfAb')}}</div>
                  </td>
                  <td colspan="2" class="part_bottom_2">{{ list.gradAbsenceNum }}</td>
                </tr>
                <tr>
                  <td colspan="1" width="16%">
                    <div class="part_bottom_1">{{$t('reviewTheDefenseInformation.DegreeVotes')}}</div>
                  </td>
                  <td colspan="1" width="16%" class="part_bottom_2">{{ list.gradAgreeNum }}</td>
                  <td colspan="1" width="16%">
                    <div class="part_bottom_1">{{$t('reviewTheDefenseInformation.DegreeVotesNot')}}</div>
                  </td>
                  <td colspan="1" width="16%" class="part_bottom_2">{{ list.gradDisagreeNum }}</td>
                  <td colspan="1" width="16%">
                    <div class="part_bottom_1">{{$t('reviewTheDefenseInformation.ReviseAndRedefend')}}</div>
                  </td>
                  <td colspan="1" width="16%" class="part_bottom_2">{{ list.gradSuggestModifyNum }}</td>
                </tr>
              </tbody></table>
          </td>
        </tr>
      </tbody></table>
  </div>
</template>

<script>
import { thesisReviewAndReplyInfoShow } from '@/api/thesisReviewAndReplyInfoShow'
import { degreeThesisApplyDownload } from '@/api/thesisReviewAndReplyInfoShow'
import { degreeThesisApprovalDownload } from '@/api/thesisReviewAndReplyInfoShow'
import { degreethesisAnswerRecordDownload } from '@/api/thesisReviewAndReplyInfoShow'
import { degreeGraduationAuditFormDownload } from '@/api/thesisReviewAndReplyInfoShow'
import { degreePrintApplyTable } from '@/api/thesisReviewAndReplyInfoShow'
import { degreeResearchRewardFormDownload } from '@/api/thesisReviewAndReplyInfoShow'
import { downLoadZiPingBiao } from '@/api/thesisReviewAndReplyInfoShow'
import { degreeThesisAttachmentDownload } from '@/api/thesisReviewAndReplyInfoShow'
export default {
  data() {
    return {
      list: [],
      mList: [],
      cList: [],
      tableData: [],
      dataKey:'',
    }
  },
  created() {
    this.fetchData()
  },
  methods: {
    fetchData() {
      thesisReviewAndReplyInfoShow().then(res => {
        this.list = res.data.form
        this.mList = res.data.mList
        this.cList = res.data.cList
      })
    },
    //学位申请书
    xwsqs(){
      degreeThesisApplyDownload().then(res => {
        this.dataKey = res.data
        if(this.dataKey != null){
          this.$refs.temp1.click();
        }else if(res.msg!=null||res.msg!="") {
          this.$message({
            message: res.msg,
            type: 'error'
          })
        }else  (
          this.$message({
            message: '下载失败',
            type: 'error'
          })
        )
      })
    },
    //学位审批书
    xwsps(){
      degreeThesisApprovalDownload().then(res => {
        this.dataKey = res.data
        if(this.dataKey != null){
          this.$refs.temp2.click();
        }else if(res.msg!=null||res.msg!="") {
          this.$message({
            message: res.msg,
            type: 'error'
          })
        }else  (
          this.$message({
            message: '下载失败',
            type: 'error'
          })
        )
      })
    },
    //答辩记录纸
    dbjlz(){
      degreethesisAnswerRecordDownload().then(res => {
        this.dataKey = res.data
        if(this.dataKey != null){
          this.$refs.temp3.click();
        }else if(res.msg!=null||res.msg!="") {
          this.$message({
            message: res.msg,
            type: 'error'
          })
        }else  (
          this.$message({
            message: '下载失败',
            type: 'error'
          })
        )
      })
    },
    //毕业审批表
    byspb(){
      degreeGraduationAuditFormDownload().then(res => {
        this.dataKey = res.data
        if(this.dataKey != null){
          this.$refs.temp4.click();
        }else if(res.msg!=null||res.msg!="") {
          this.$message({
            message: res.msg,
            type: 'error'
          })
        }else  (
          this.$message({
            message: '下载失败',
            type: 'error'
          })
        )
      })
    },
    //博士申请登记表
    bssqdjb(){
      degreePrintApplyTable().then(res => {
        this.dataKey = res.data
        if(this.dataKey != null){
          this.$refs.temp5.click();
        }else if(res.msg!=null||res.msg!="") {
          this.$message({
            message: res.msg,
            type: 'error'
          })
        }else  (
          this.$message({
            message: '下载失败',
            type: 'error'
          })
        )
      })
    },
    //科研和奖励情况表
    kyhjlqkb(){
      degreeResearchRewardFormDownload().then(res => {
        this.dataKey = res.data
        if(this.dataKey != null){
          this.$refs.temp6.click();
        }else if(res.msg!=null||res.msg!="") {
          this.$message({
            message: res.msg,
            type: 'error'
          })
        }else  (
          this.$message({
            message: '下载失败',
            type: 'error'
          })
        )
      })
    },
    //博士自评表
    bszpb(){
      downLoadZiPingBiao().then(res => {
        this.dataKey = res.data
        if(this.dataKey != null){
          this.$refs.temp7.click();
        }else if(res.msg!=null||res.msg!="") {
          this.$message({
            message: res.msg,
            type: 'error'
          })
        }else  (
          this.$message({
            message: '下载失败',
            type: 'error'
          })
        )
      })
    },
    //学位论文终稿
    xwlwzg(){
      degreeThesisAttachmentDownload().then(res => {
        this.dataKey = res.data
        if(this.dataKey != null){
//          console.log(this.dataKey)
//          /*let a = document.createElement('a')
//          a.href = "/gradms/api/base/getBytesBufferDataByDataKey?dataKey="+this.dataKey
//          a.download="xwlwzg.pdf"
//          window.open(a.href)*/
//          window.open("../../Statics/download/带电作业电动工具单页资料.pdf");
          this.$refs.temp8.click();
        }else if(res.msg!=null||res.msg!="") {
          this.$message({
            message: res.msg,
            type: 'error'
          })
        }else  (
          this.$message({
            message: '下载失败',
            type: 'error'
          })
        )
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
