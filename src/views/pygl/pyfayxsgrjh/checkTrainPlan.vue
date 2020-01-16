<template>
  <div class="app-container">
    <table class="content" cellspacing="0" width="100%">
      <tbody><tr>
        <td class="head" height="30" colspan="6">
          <div align="center" style="color: #9b0d14">
            {{ $t('cuiltivatingSchemeCheckAndDrawup.selectedCourses') }}    --  {{ $t('cuiltivatingSchemeCheckAndDrawup.note1') }}
          </div>
        </td>
      </tr>
      </tbody></table>

    <el-table
      :data="cultivateFormList"
      element-loading-text="Loading"
      border
      fit="true"
      size="mini"
      style="width: 100%"
      max-height="700"
      class="eltable"
      :header-cell-style="{background:'#eef1f6',color:'#606266',fontSize: '14px'}"
    >
      <el-table-column
        :label="$t('cuiltivatingSchemeCheckAndDrawup.number')"
        fixed="left"
        width="73"
        align="center"
      >
        <template slot-scope="scope">
          {{ scope.$index+1 }}
        </template>
      </el-table-column>
      <el-table-column
        :label="$t('cuiltivatingSchemeCheckAndDrawup.courseNumber')"
        align="center"
      >
        <template slot-scope="scope">
          {{ $t(scope.row.schemeName) }}
        </template>
      </el-table-column>
      <el-table-column
        :label="$t('cuiltivatingSchemeCheckAndDrawup.courseName')"
        align="center"
      >
        <template slot-scope="scope">
          {{ $t(scope.row.majorName) }}
        </template>
      </el-table-column>
      <el-table-column
        :label="$t('cuiltivatingSchemeCheckAndDrawup.courseTerm')"
        width="120"
        align="center"
      >
        <template slot-scope="scope">
          {{ scope.row.startTimeStr }}
        </template>
      </el-table-column>
      <el-table-column
        fixed="right"
        width="120"
        align="center"
        :label="$t('cuiltivatingSchemeCheckAndDrawup.totalClassHours')"
      >
        <!--<template slot-scope="scope">-->
        <!--<el-button class="infoBtn"   type="text" @click="pushInfo(scope.row.schemeId , scope.row.majorName, scope.row.studentType )">详细</el-button>-->
        <!--</template>-->
      </el-table-column>
      <el-table-column
        :label="$t('cuiltivatingSchemeCheckAndDrawup.credit')"
        width="120"
        align="center"
      >
        <template slot-scope="scope">
          {{ scope.row.startTimeStr }}
        </template>
      </el-table-column>
      <el-table-column
        :label="$t('cuiltivatingSchemeCheckAndDrawup.evaluationMode')"
        width="120"
        align="center"
      >
        <template slot-scope="scope">
          {{ scope.row.startTimeStr }}
        </template>
      </el-table-column>
      <el-table-column
        :label="$t('cuiltivatingSchemeCheckAndDrawup.courseNum')"
        width="120"
        align="center"
      >
        <template slot-scope="scope">
          {{ scope.row.startTimeStr }}
        </template>
      </el-table-column>
      <el-table-column
        :label="$t('cuiltivatingSchemeCheckAndDrawup.tutor')"
        width="120"
        align="center"
      >
        <template slot-scope="scope">
          {{ scope.row.startTimeStr }}
        </template>
      </el-table-column>
      <el-table-column
        :label="$t('cuiltivatingSchemeCheckAndDrawup.grade')"
        align="center"
      >
        <template slot-scope="scope">
          {{ scope.row.startTimeStr }}
        </template>
      </el-table-column>
      <el-table-column
        :label="$t('cuiltivatingSchemeCheckAndDrawup.testTime')"
        align="center"
      >
        <template slot-scope="scope">
          {{ scope.row.startTimeStr }}
        </template>
      </el-table-column>
    </el-table>
    <div>
     &nbsp;&nbsp;
    </div>
    <table class="content" cellspacing="0" width="100%">
      <tbody><tr>
        <td class="head" height="30" colspan="6">
          <div align="center" style="color: #9b0d14">
            {{ $t('cuiltivatingSchemeCheckAndDrawup.cultivationStepList') }}
          </div>
        </td>
      </tr>
      </tbody></table>

    <el-table
      :data="cultSessisonList"
      element-loading-text="Loading"
      border
      fit="true"
      size="mini"
      style="width: 100%"
      max-height="700"
      class="eltable"
      :header-cell-style="getRowClass"
    >
      <el-table-column
        :label="$t('projectParticipation.number')"
        fixed="left"
        width="73"
        align="center"
      >
        <template slot-scope="scope">
          {{ scope.$index+1 }}
        </template>
      </el-table-column>
      <el-table-column
        width="120"
        :label="$t('cuiltivatingSchemeCheckAndDrawup.form')"
        align="center"
      >
        <template slot-scope="scope">
          {{ (scope.row.sessionName) }}
        </template>
      </el-table-column>
      <el-table-column
        width="120"
        :label="$t('cuiltivatingSchemeCheckAndDrawup.credit')"
        align="center"
      >
        <template slot-scope="scope">
          {{ (scope.row.setSessionCredit) }}
        </template>
      </el-table-column>
      <el-table-column
        :label="$t('cuiltivatingSchemeCheckAndDrawup.grade')"
        width="120"
        align="center"
      />
      <el-table-column
        fixed="right"
        align="center"
        :label="$t('cuiltivatingSchemeCheckAndDrawup.statement')"
      />
    </el-table>
  </div>
</template>

<script>
import { showCultivatePlan } from '@/api/checkCultivationScheme'
export default {
  name: 'CheckTrainPlan',
  data() {
    return {
      cultSessisonList: []
    }
  },
  created() {
    this.fetchData()
  },
  methods: {
    fetchData() {
      showCultivatePlan().then(res => {
        this.cultSessisonList = res.data.planData.cultSessisonList
        console.log(this.cultSessisonList)
      })
    }
  }
}
</script>

<style scoped>
  td{
    height: 2.3em;
    padding:5px;
    border:1px solid #f4f4f5;
    font-size: small;
  }
  td input{
    box-sizing: border-box;
    margin: 0 !important;
    padding: 2px;
    border: none;
  }
</style>
