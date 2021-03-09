<template>
  <div class="app-container">
    <table class="content">
      <tr>
        <td colspan="4" class="titlable">{{ $t('showTutor.baseinfo') }}</td>
      </tr>
      <tr>
        <td colspan="1">{{ $t('showTutor.number') }}</td>
        <td colspan="1">
          {{ $t(form.perNum) }}
        </td>
        <td colspan="1" >{{ $t('showTutor.name') }}</td>
        <td colspan="1">
          {{ $t(form.perName) }}
        </td>
      </tr>
      <tr>
        <td colspan="1" >{{ $t('showTutor.sex') }}</td>
        <td colspan="1">
          {{ $t(form.genderCode) }}
        </td>
        <td colspan="1" >{{ $t('showTutor.school') }}</td>
        <td colspan="1">
          {{ $t(form.collegeName) }}
        </td>
      </tr>
      <tr>
        <td colspan="1" >{{ $t('showTutor.major') }}</td>
        <td colspan="1">
          {{ $t(form.majorName) }}
        </td>
        <td colspan="1" >{{ $t('showTutor.title') }}</td>
        <td colspan="1">
          {{ $t(form.proTechPositionCode) }}
        </td>
      </tr>
      <tr>
        <td colspan="1">{{ $t('showTutor.laststudy') }}</td>
        <td colspan="1">
          {{ $t(form.lastStudyLevel) }}
        </td>
        <td colspan="1" >{{ $t('showTutor.lastdegree') }}</td>
        <td colspan="1">
          {{ $t(form.lastDegree) }}
        </td>
      </tr>
      <tr>
        <td colspan="1" >{{ $t('showTutor.email') }}</td>
        <td colspan="1">
          {{ $t(form.email) }}
        </td>
        <td colspan="1" >{{ $t('showTutor.homepage') }}</td>
        <td colspan="1">
          {{ $t(form.website) }}
        </td>
      </tr>
      <tr>
        <td colspan="1" >{{ $t('showTutor.direction') }}</td>
        <td colspan="3">
          {{ $t(form.researchDirection) }}
        </td>
      </tr>
      <tr>
        <td colspan="4" v-html='form.personIntroduction' />
      </tr>
      <tr>
        <td colspan="4" v-html='form.achievement'/>
      </tr>
    </table>
  </div>
</template>

<script>
  import { tutorDetailInfoShow } from '@/api/tutor'
  export default {
    data() {
      return {
        form:{
          perNum:'',
          perName:'',
          collegeName:'',
          perIdCard:'',
          perTelephone:'',
          email:'',
          qq:'',
          mobilePhone:'',
          wechat:'',
          website:'',
          perAddress:'',
          perPostalCode:'',
          researchDirection:'',
          personIntroduction:'',
          majorName:'',
          perBirthday:'',
          genderCode:'',
          proTechPositionCode:'',
          lastDegree:'',
          lastStudyLevel:''
        }
      }
    },
    created() {
      this.fetchData()
    },
    methods: {
      fetchData() {

        this.personId = this.$route.params.personId
        tutorDetailInfoShow({ 'personId': this.$route.params.personId }).then(res => {
          this.form = res.data
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
