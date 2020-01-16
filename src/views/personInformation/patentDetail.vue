<template>
  <div class="container">
    <table class="content">
      <tr>
        <td colspan="8" class="titleSpan">{{ $t('patent.infoadd') }}</td>
      </tr>
      <tr>
        <td class="colspan1">{{ $t('patent.patentInfo') }}</td>
        <td class="colspan2"><el-input v-model="patentName" type="text" size="mini" class="elinput" /></td>
      </tr>

      <tr>
        <td class="colspan1">{{ $t('patent.patentTypeq') }}</td>
        <td class="colspan2"> <el-select v-model="patentType" placeholder="pleaseChoose" size="mini" style="width: 70%;">
          <el-option
            v-for="item in patentTypeList"
            :key="item.value"
            :label="$t(item.name)"
            :value="item.value"
          />
        </el-select></td>
      </tr>

      <tr>
        <td class="colspan1">{{ $t('patent.patentNo') }}</td>
        <td class="colspan2"><el-input v-model="applyNum" type="text" size="mini" class="elinput" /></td>
      </tr>
      <tr>
        <td class="colspan1">{{ $t('patent.typeNo') }}</td>
        <td class="colspan2"><el-input v-model="typeNum" type="text" size="mini" class="elinput" /></td>
      </tr>
      <tr>
        <td class="colspan1">{{ $t('patent.patentDate1') }} </td>
        <td class="colspan2">
          <el-date-picker
            v-model="applyTime"
            class="elinput"
            size="mini"
            type="date"
            value-format="yyyy-MM-dd"
          >
          </el-date-picker>
        </td>
      </tr>

      <tr>
        <td class="colspan1">{{ $t('achievement.authorRanking') }}</td>
        <td class="colspan2"> <el-select v-model="personNum" placeholder="pleaseChoose" size="mini" style="width: 70%;">
          <el-option
            v-for="item in options"
            :key="item.value"
            :label="item.label"
            :value="item.value"
          /></el-select></td>
      </tr>

      <tr>
        <td class="colspan1">{{ $t('baseInformationModal.remark') }}</td>
        <td class="colspan2"> <el-input
          v-model="remark"
          class="elinput"
          type="textarea"
          maxlength="300"
          rows="5"
          show-word-limit
        /></td>
      </tr>

      <tr >
        <td colspan="8" ><el-button  class="submitBtn" size="mini" @click="submitPatent">{{$t('route.submit')}}</el-button>
        </td>
      </tr>
    </table>
  </div>
</template>

<script>
import { saveAchievementPatentInfoInit } from '@/api/getAchievementPatent'
import { saveAchievementPatentInfo } from '@/api/getAchievementPatent'
import { saveAchievementPatentInfoInitById } from '@/api/getAchievementPatent'
export default {
  name: 'PatentDetail',
  data() {
    return {
      loading: false,
      post: null,
      error: null,
      bzw: '',
      textarea: '',
      patentName: '',
      achPanId: '',
      patentType: '',
      typeNum: '',
      applyTime: '',
      patentTypeName: '',
      applyNum: '',
      isCheck: '',
      personNum: '',
      remark: '',
      patentTypeList: [],
      options: [{
        value: 1,
        label: '第一位'
      }, {
        value: 2,
        label: '第二位'
      }]
    }
  },
  watch: {
    '$route': 'fetchData'
  },
  created() {
    this.fetchData()
  },
  methods: {
    fetchData() {
      saveAchievementPatentInfoInit().then(res => {
        this.patentTypeList = res.data.patentTypeList
        this.bzw = false
      })
      saveAchievementPatentInfoInitById({ 'achPanId': this.$route.params.achPanId }, (err, post) => {
        this.loading = false
        if (err) {
          this.error = err.toString()
        } else {
          this.post = post
        }
      }).then(res => {
        this.achPanId =res.data.form.achPanId
        this.applyNum = res.data.form.applyNum
        this.patentName = res.data.form.patentName
        this.patentType = res.data.form.patentType
        this.remark = res.data.form.remark
        this.applyTime = res.data.form.applyTime
        this.typeNum = res.data.form.typeNum
        this.personNum = res.data.form.personNum
      }
      )
    },
    submitPatent() {
      saveAchievementPatentInfo({ 'patentName': this.patentName, 'patentType': this.patentType, 'achPanId': this.achPanId, 'remark': this.remark, 'applyTime': this.applyTime, 'applyNum': this.applyNum, 'typeNum': this.typeNum, 'personNum': this.personNum }).then(res => {
        this.$router.push({ path: './patent' })
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
  .titleSpan{
    font-size: 16px;
    color: #A50001;
    font-weight: bold;
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
    width:100%;
  }
  .content td {
    padding: 10px 20px;
    border-bottom: 1px solid #EBEEF5;
    border-right: 1px solid #EBEEF5;
    text-align: center;
    font-size: 12px;
  }
  .colspan1{
    color: #909399;
    font-weight: bold;
    width : 30%;
  }
  .colspan2{
    color:  #606266;
    width: 70%;
    text-align:left !important;
  }
  .elinput{
    border: 1px solid #EBEEF5;
    border-radius: 4px;
    outline: none;
    width: 70%;
    line-height: 18px;
    color:  #606266;
    font-size: 12px;
  }
  .submitBtn{
    background-color: #A50001;
    border: none;
    color: #ffffff;
  }
  .noticeSpan{
    font-size: 12px;
    color: #A50001;
  }
</style>
