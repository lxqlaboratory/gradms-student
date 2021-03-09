<template>
  <div class="container">
      <table class="content" width="100%">
        <tbody><tr>
          <td align="center" valign="top">
         <table align="center" class="content" width="100%">
              <tbody>
              <tr>
                <td colspan="7" style="font-size:16px;color:#A50001">
                  <div>
                    {{ $t('baseInformationModal.graduationInformation') }}
                  </div>
                </td>
              </tr>
              <tr>
                <td class="colstyle1">
                  {{ $t('baseInformationModal.name') }}
                </td>
                <td class="colstyle2">
                  {{ list.perName }}
                </td>
                <td class="colstyle1">
                  {{ $t('baseInformationModal.sex') }}
                </td>
                <td class="colstyle2">
                  {{ $t(list.genderCode) }}
                </td>
                <td class="colstyle1">
                  {{ $t('baseInformationModal.date') }}
                </td>
                <td class="colstyle2">
                  {{ list.perBirthday }}
                </td>
                <td width="20%" rowspan="5">
                  <img v-if="show" :src="'/gradms/api/base/getBytesBufferDataByDataKey?dataKey='+dataKey" height="120" align="middle" border="0" alt="photo">
                </td>
              </tr>
              <tr>
                <td class="colstyle1">
                  {{ $t('baseInformationModal.ID') }}
                </td>
                <td colspan="3" class="colstyle2">
                  {{ list.perIdCard }}
                </td>
                <td class="colstyle1">
                  {{ $t('baseInformationModal.nationality') }}
                </td>
                <td class="colstyle2">
                  {{ $t(list.nationName) }}
                </td>
              </tr>
              <tr>
                <td class="colstyle1">
                  {{ $t('cultivationInformationModal.department') }}
                </td>
                <td colspan="3" class="colstyle2">
                  {{ $t(list.collegeName)}}
                </td>
                <td class="colstyle1">
                  {{ $t('cultivationInformationModal.major') }}
                </td>
                <td class="colstyle2">
                  {{ $t(list.majorName) }}
                </td>
              </tr>
              <tr>
                <td class="colstyle1">
                  {{ $t('cultivationInformationModal.studentType') }}
                </td>
                <td class="colstyle2">
                  {{ $t(list.stuTypeCode)}}
                </td>
                <td class="colstyle1">
                  {{ $t('cultivatingScheme.studyYear') }}
                </td>
                <td class="colstyle2">
                  {{ list.classYear }}
                </td>
                <td colspan="2" class="colstyle1">
                  {{  }}
                </td>
              </tr>
              <tr>
                <td class="colstyle1">
                  {{ $t('cultivationInformationModal.entranceDate') }}
                </td>
                <td class="colstyle2">
                  {{ list.entrYearMon }}
                </td>
                <td colspan="4" class="colstyle1">
                  {{ }}
                </td>
              </tr>
              </tbody></table>
          </td>
        </tr>
        </tbody></table>
  </div>
</template>

<script>
  import { getStudentGraduationInfo } from '@/api/studentGraduationInfo'
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
        getStudentGraduationInfo().then(res => {
          console.log(res)
          this.list = res.data
        })
      }
    }
  }
</script>

<style lang="scss" scoped>
  .container{
    margin-left: 20px;
    margin-right: 20px;
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
  td input{
    box-sizing: border-box;
    margin: 0 !important;
    padding: 2px;
    border: none;
    border-bottom: 1px solid black;
    color: #606266;
  }
  td input:focus{
    padding: 2px;
    box-sizing: border-box;
    margin: 0 !important;
    border: none;
    color: #606266;
  }
  .submitbutton{
    width: 12em;
    background-color: #A50001;
    border: 0px;
    color: #ffffff;
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
  .el-upload-dragger{
    width: 220px;
    height: 140px;
  }
  .el-upload-dragger:hover {
    border-color: #A50001;
  }

</style>

