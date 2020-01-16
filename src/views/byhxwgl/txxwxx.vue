<template>
  <div class="app-container">
    <table width="100%" class="content">
      <tbody>
        <tr>
          <td style="text-align:left; color: #9b0d14;font-size: 12px;line-height: 18px">
            {{ $t('fillInTheDegreeInfo.note1') }}<br>
            {{ $t('fillInTheDegreeInfo.note2') }}
          </td>
        </tr>
      </tbody>
    </table>
    <table class="content" width="100%">
      <tbody>
        <tr>
          <td class="head" height="25" colspan="6">
            <div class="titlable">{{ $t('fillInTheDegreeInfo.degreeThesisInfo') }}</div>
          </td>
        </tr>
        <tr>
          <td colspan="2" class="colstyle1">{{ $t('fillInTheDegreeInfo.thesisDissertation') }}</td>
          <td colspan="4" class="colstyle2"> <el-input v-model="thesisEngName" size="mini" />  </td>
        </tr>
        <tr>
          <td colspan="2" class="colstyle1">{{ $t('fillInTheDegreeInfo.thesisKeyWords') }}</td>
          <td colspan="4" class="colstyle2"> <el-input v-model="englishTheme" size="mini" />  </td>
        </tr>
        <tr>
          <td colspan="1" class="colstyle1">{{ $t('fillInTheDegreeInfo.thesisType') }}</td>
          <td width="20%" class="colstyle2">
            <el-select v-model="gradThesisTypeCode" placeholder="pleaseChoose" size="mini">
              <el-option
                v-for="item in gradThesisTypeCodeList"
                :key="item.value"
                :label="$t(item.name)"
                :value="item.value"
              />
            </el-select>
          </td>
          <td colspan="1" class="colstyle1">{{ $t('fillInTheDegreeInfo.thesisTopicSource') }}</td>
          <td width="30%" class="colstyle2">
            <el-select v-model="gradThesisTopicSourceCode" placeholder="pleaseChoose" size="mini">
              <el-option
                v-for="item in gradThesisTopicSourceCodeList"
                :key="item.value"
                :label="$t(item.name)"
                :value="item.value"
              />
            </el-select>
          </td>
          <td colspan="1" class="colstyle1">{{ $t('fillInTheDegreeInfo.thesisWords') }} </td>
          <td width="10%" class="colstyle2"> <el-input v-model="gradWordCount" size="mini" />  </td>
        </tr>
        <tr>
          <td colspan="1" class="colstyle1">{{ $t('fillInTheDegreeInfo.thesisStartDate') }}</td>
          <td width="20%" class="colstyle2">
            <el-input v-model="gradThesisStartDate" size="mini" />
          </td>
          <td colspan="1" class="colstyle1">{{ $t('fillInTheDegreeInfo.thesisEndDate') }}</td>
          <td class="colstyle2">
            <el-input v-model="gradThesisEndDate" size="mini" style="width: 70%" />
          </td>
          <td colspan="1" class="colstyle1">{{ $t('fillInTheDegreeInfo.feesPaidByTutor') }}</td>
          <td class="colstyle2">
            <el-input v-model="thesisFee" size="mini" />
          </td>
        </tr>
      </tbody></table>
    <table class="content" cellspacing="0" width="100%">
      <tbody><tr>
        <td width="20%" align="left" style="color: #909399;font-weight:bold;font-size: 12px;line-height: 18px">&nbsp;&nbsp;{{$t('tjbysq.txxwxx1')}}<br>&nbsp;&nbsp;{{$t('tjbysq.txxwxx2')}}、<br>&nbsp;&nbsp;{{$t('tjbysq.txxwxx3')}}；<br>&nbsp;&nbsp;{{$t('tjbysq.txxwxx4')}}；<br>&nbsp;&nbsp;{{$t('tjbysq.txxwxx5')}})<br>&nbsp;&nbsp;{{$t('tjbysq.txxwxx6')}}
        </td>
        <td><el-input
          v-model="gradThesisIntroduction"
          type="textarea"
          placeholder="请输入内容"
          maxlength="800"
          rows="5"
          show-word-limit
        /></td>
      </tr>
      </tbody></table>
    <div>
      &nbsp;&nbsp;&nbsp;&nbsp;
    </div>
    <table width="100%">
      <tbody>
        <tr>
          <td style="text-align:center">
            <el-button size="mini" class="allBtn" @click="degreeInfoSubmit">{{$t('route.save')}}</el-button>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
import { degreeInfoSubmitInit } from '@/api/degreeInfoSubmit'
import { degreeInfoSubmit } from '@/api/degreeInfoSubmit'
export default {
  name: 'Txxwxx',
  data() {
    return {
      textarea: '',
      gradThesisIntroduction: '',
      gradThesisTopicSourceCode: '',
      gradThesisTopicSourceCodeList: [],
      gradThesisTypeCode: '',
      gradThesisTypeCodeList: [],
      thesisEngName: '',
      gradWordCount: '',
      gradThesisStartDate: '',
      gradThesisEndDate: '',
      thesisFee: '',
      englishTheme: ''
    }
  },
  created() {
    this.fetchData()
  },
  methods: {
    fetchData() {
      degreeInfoSubmitInit().then(res => {
        this.gradThesisTopicSourceCodeList = res.data.gradThesisTopicSourceCodeList
        this.gradThesisIntroduction = res.data.gradThesisIntroduction
        this.gradThesisTopicSourceCode = res.data.gradThesisTopicSourceCode
        this.gradThesisTypeCode = res.data.gradThesisTypeCode
        this.gradThesisTypeCodeList = res.data.gradThesisTypeCodeList
        this.thesisEngName = res.data.thesisEngName
        this.englishTheme = res.data.englishTheme
        this.gradThesisEndDate = res.data.gradThesisEndDate
        this.gradThesisStartDate = res.data.gradThesisStartDate
        this.gradWordCount = res.data.gradWordCount
        this.thesisFee = res.data.thesisFee
      })
    },
    degreeInfoSubmit() {
      if (this.thesisEngName == null) {
        this.$message({
          message: '论文题目不能为空',
          type: 'error'
        })
      } else if (this.englishTheme == null) {
        this.$message({
          message: '论文主题词不能为空',
          type: 'error'
        })
      } else if (this.gradWordCount == null) {
        this.$message({
          message: '论文字数不能为空',
          type: 'error'
        })
      } else if (this.thesisFee == null) {
        this.$message({
          message: '完成本论文导师支付的费用不能为空',
          type: 'error'
        })
      } else {
        degreeInfoSubmit({ 'thesisEngName': this.thesisEngName, 'englishTheme': this.englishTheme, 'gradThesisTypeCode': this.gradThesisTypeCode, 'gradThesisTopicSourceCode': this.gradThesisTopicSourceCode, 'gradThesisStartDate': this.gradThesisStartDate,
          'gradThesisEndDate': this.gradThesisEndDate, 'thesisFee': this.thesisFee, 'gradWordCount': this.gradWordCount, 'gradThesisIntroduction': this.gradThesisIntroduction }).then(res => {
          if (res.msg === '论文主题词三到五个，且每个主题词之间需要用\',\'隔开！') {
            this.$message({
              message: '论文主题词三到五个，且每个主题词之间需要用\',\'隔开！',
              type: 'error'
            })
          } else {
            this.$message({
              message: '论文信息填写完成!',
              type: 'success'
            })
            this.fetchData()
          }
        }).catch(e => {

        })
      }
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
