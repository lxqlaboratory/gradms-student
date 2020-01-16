<template>
  <div class="app-container">
    <table class="content" cellspacing="0" width="100%">
      <tbody><tr>
        <td height="300" colspan="8" align="center" valign="top">
          <table class="content" width="100%">
            <tbody><tr>
                     <td colspan="4">
                       <div align="center" style="font-size:16px;color:#A50001">
                         {{ $t('cultivationInformationModal.studentCultivationInfo') }}
                       </div>
                     </td>
                   </tr>
              <tr>
                <td width="25%" class="colstyle1">
                  {{ $t('cultivationInformationModal.studentType') }}
                </td>
                <td width="25%" class="colstyle2">
                  {{ $t(list2.stuTypeCode) }}
                </td>
                <td width="25%" class="colstyle1">
                  {{ $t('cultivationInformationModal.department') }}
                </td>
                <td width="25%" class="colstyle2">
                  {{ $t(list2.collegeName) }}
                </td>
              </tr>
              <tr>
                <td class="colstyle1">
                  {{ $t('cultivationInformationModal.sedCultivation') }}
                </td>
                <td class="colstyle2">
                  {{ list2.collegeName1?$t(list2.collegeName1):'' }}
                </td>
                <td class="colstyle1">
                  {{ $t('cultivationInformationModal.thirdCultivation') }}
                </td>
                <td class="colstyle2">
                  {{ list2.collegeName2?$t(list2.collegeName2):'' }}
                </td>
              </tr>
              <tr>
                <td class="colstyle1">
                  {{ $t('cultivationInformationModal.major') }}
                </td>
                <td class="colstyle2">
                  {{ $t(list2.majorName) }}
                </td>
                <td class="colstyle1">
                  {{ $t('cultivationInformationModal.direction') }}
                </td>
                <td class="colstyle2">
                  {{ list2.researchName }}
                </td>
              </tr>
              <tr>
                <td class="colstyle1">
                  {{ $t('cultivationInformationModal.tutor') }}
                </td>
                <td class="colstyle2">
                  {{ $t(list2.tutor) }}
                </td>
                <td class="colstyle1">
                  {{ $t('cultivationInformationModal.grade') }}
                </td>
                <td class="colstyle2">
                  {{ list2.grade }}
                </td>
              </tr>
              <tr>
                <td class="colstyle1">
                  {{ $t('cultivationInformationModal.entranceDate') }}
                </td>
                <td class="colstyle2">
                  {{ list2.entrYearMon }}
                </td>
                <td class="colstyle1">
                  {{ $t('cultivationInformationModal.dapartTime') }}
                </td>
                <td class="colstyle2">
                  {{ list2.leaveYearMon }}
                </td>
              </tr>
              <tr>
                <td class="colstyle1">
                  {{ $t('cultivationInformationModal.system') }}
                </td>
                <td class="colstyle2">
                  {{ list2.classYear }}
                </td>
                <td class="colstyle1">
                  {{ $t('cultivationInformationModal.studyStatus') }}
                </td>
                <td class="colstyle2">
                  {{ $t(list2.studyStateName) }}
                </td>
              </tr>
              <tr>
                <td class="colstyle1">
                  {{ $t('cultivationInformationModal.campus') }}
                </td>
                <td colspan="3" class="colstyle2">
                  {{ $t(list2.campusName) }}
                </td>
              </tr>
            </tbody></table>
        </td>
      </tr>
      </tbody></table>
  </div>
</template>

<script>
import { getStudentTrainInfo } from '@/api/studentTrainInfo'
export default {
  data() {
    return {
      list2: []
    }
  },
  created() {
    this.fetchData()
  },
  methods: {
    fetchData() {
      getStudentTrainInfo().then(res => {
        console.log(res)
        this.list2 = res.data
      })
    }
  }
}
</script>

<style lang="scss" scoped>
  .container{
    margin-left: 20px;
    margin-rigt: 20px;
    margin-bottom: 30px;
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
    text-align: center;
    font-size: 12px;
  }
  .colstyle1{
    height: 25px;
    color: #909399;
    font-weight: bold;
  }
  .colstyle2{
    height: 25px;
    color: #606266;
  }

  .form-label{
    color: #9b0d14;
  }

</style>
