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
      :data="planDataRequiredList"
      element-loading-text="Loading"
      border
      size="mini"
      style="width: 100%"
      :span-method="rowPlanSpanMethodRequire"
      :header-cell-style="{background:'#eef1f6',color:'#606266',fontSize: '14px'}"
    >
      <el-table-column
        :label="$t('cuiltivatingSchemeCheckAndDrawup.type')"
        width="70"
        align="center"
      >
        <template >
          {{$t('cuiltivatingSchemeCheckAndDrawup.compulsoryCourse')}}
        </template>
      </el-table-column>
      <el-table-column
        :label="$t('cuiltivatingSchemeCheckAndDrawup.number')"
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
          {{ (scope.row.courseNum) }}
        </template>
      </el-table-column>
      <el-table-column
        :label="$t('cuiltivatingSchemeCheckAndDrawup.courseName')"
        align="center"
      >
        <template slot-scope="scope">
          {{ $t(scope.row.courseName) }}
        </template>
      </el-table-column>
      <el-table-column
        :label="$t('cuiltivatingSchemeCheckAndDrawup.courseTerm')"
        width="100"
        align="center"
      >
        <template slot-scope="scope">
          {{ $t(scope.row.termName) }}
        </template>
      </el-table-column>
      <el-table-column
        width="100"
        align="center"
        :label="$t('cuiltivatingSchemeCheckAndDrawup.totalClassHours')"
      >
        <template slot-scope="scope">
          {{ scope.row.setClassHour }}
        </template>
      </el-table-column>
      <el-table-column
        :label="$t('cuiltivatingSchemeCheckAndDrawup.credit')"
        width="50"
        align="center"
      >
        <template slot-scope="scope">
          {{ scope.row.credit }}
        </template>
      </el-table-column>
      <el-table-column
        :label="$t('cuiltivatingSchemeCheckAndDrawup.evaluationMode')"
        width="100"
        align="center"
      >
        <template slot-scope="scope">
          {{ $t(scope.row.examTypeName) }}
        </template>
      </el-table-column>
      <el-table-column
        :label="$t('cuiltivatingSchemeCheckAndDrawup.courseNum')"
        width="100"
        align="center"
      >
        <template slot-scope="scope">
          {{ scope.row.courseIndex }}
        </template>
      </el-table-column>
      <el-table-column
        :label="$t('cuiltivatingSchemeCheckAndDrawup.tutor')"
        width="100"
        align="center"
      >
        <template slot-scope="scope">
          {{ $t(scope.row.teachers) }}
        </template>
      </el-table-column>
      <el-table-column
        :label="$t('cuiltivatingSchemeCheckAndDrawup.grade')"
        width="50"
        align="center"
      >
        <template slot-scope="scope">
          {{ scope.row.score }}
        </template>
      </el-table-column>
      <el-table-column
        :label="$t('cuiltivatingSchemeCheckAndDrawup.testTime')"
        align="center"
      >
        <template slot-scope="scope">
          {{ scope.row.examStartTime }}
        </template>
      </el-table-column>
      <el-table-column
        v-if="currentRole"
        :label="$t('publishThesis.operation')"
        align="center"
      >
        <template slot-scope="scope">
          <el-button size="mini" round class="allBtn" @click="deleteCourse(scope.row.planCourseId)">{{ $t('cuiltivatingSchemeCheckAndDrawup.delete') }}</el-button>
        </template>
      </el-table-column>
    </el-table>

    <el-table
      :data="planDataOptionalList"
      element-loading-text="Loading"
      border
      size="mini"
      style="width: 100%"
      :show-header="false"
      :span-method="rowPlanSpanMethodOption"
      :header-cell-style="{background:'#eef1f6',color:'#606266',fontSize: '14px'}"
    >
      <el-table-column
        :label="$t('cuiltivatingSchemeCheckAndDrawup.type')"
        width="70"
        align="center"
      >
        <template slot-scope="scope">
          选修课
        </template>
      </el-table-column>
      <el-table-column
        :label="$t('cuiltivatingSchemeCheckAndDrawup.number')"
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
          {{ (scope.row.courseNum) }}
        </template>
      </el-table-column>
      <el-table-column
        :label="$t('cuiltivatingSchemeCheckAndDrawup.courseName')"
        align="center"
      >
        <template slot-scope="scope">
          {{ $t(scope.row.courseName) }}
        </template>
      </el-table-column>
      <el-table-column
        :label="$t('cuiltivatingSchemeCheckAndDrawup.courseTerm')"
        width="100"
        align="center"
      >
        <template slot-scope="scope">
          {{ $t(scope.row.termName) }}
        </template>
      </el-table-column>
      <el-table-column
        width="100"
        align="center"
        :label="$t('cuiltivatingSchemeCheckAndDrawup.totalClassHours')"
      >
        <template slot-scope="scope">
          {{ scope.row.setClassHour }}
        </template>
      </el-table-column>
      <el-table-column
        :label="$t('cuiltivatingSchemeCheckAndDrawup.credit')"
        width="50"
        align="center"
      >
        <template slot-scope="scope">
          {{ scope.row.credit }}
        </template>
      </el-table-column>
      <el-table-column
        :label="$t('cuiltivatingSchemeCheckAndDrawup.evaluationMode')"
        width="100"
        align="center"
      >
        <template slot-scope="scope">
          {{ $t(scope.row.examTypeName) }}
        </template>
      </el-table-column>
      <el-table-column
        :label="$t('cuiltivatingSchemeCheckAndDrawup.courseNum')"
        width="100"
        align="center"
      >
        <template slot-scope="scope">
          {{ scope.row.courseIndex }}
        </template>
      </el-table-column>
      <el-table-column
        :label="$t('cuiltivatingSchemeCheckAndDrawup.tutor')"
        width="100"
        align="center"
      >
        <template slot-scope="scope">
          {{ $t(scope.row.teachers) }}
        </template>
      </el-table-column>
      <el-table-column
        :label="$t('cuiltivatingSchemeCheckAndDrawup.grade')"
        width="50"
        align="center"
      >
        <template slot-scope="scope">
          {{ scope.row.score }}
        </template>
      </el-table-column>
      <el-table-column
        :label="$t('cuiltivatingSchemeCheckAndDrawup.testTime')"
        align="center"
      >
        <template slot-scope="scope">
          {{ scope.row.examStartTime }}
        </template>
      </el-table-column>
      <el-table-column
        v-if="currentRole"
        :label="$t('publishThesis.operation')"
        align="center"
      >
        <template slot-scope="scope">
          <el-button size="mini" round class="allBtn" @click="deleteCourse(scope.row.planCourseId)">{{ $t('cuiltivatingSchemeCheckAndDrawup.delete') }}</el-button>
        </template>
      </el-table-column>
    </el-table>

    <el-table
      :data="planDataBuxiuList"
      element-loading-text="Loading"
      border
      size="mini"
      style="width: 100%"
      :show-header="false"
      :span-method="rowPlanSpanMethodBuxiu"
      :header-cell-style="{background:'#eef1f6',color:'#606266',fontSize: '14px'}"
    >
      <el-table-column
        :label="$t('cuiltivatingSchemeCheckAndDrawup.type')"
        width="70"
        align="center"
      >
        <template slot-scope="scope">
          补休课
        </template>
      </el-table-column>
      <el-table-column
        :label="$t('cuiltivatingSchemeCheckAndDrawup.number')"
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
          {{ (scope.row.courseNum) }}
        </template>
      </el-table-column>
      <el-table-column
        :label="$t('cuiltivatingSchemeCheckAndDrawup.courseName')"
        align="center"
      >
        <template slot-scope="scope">
          {{ $t(scope.row.courseName) }}
        </template>
      </el-table-column>
      <el-table-column
        :label="$t('cuiltivatingSchemeCheckAndDrawup.courseTerm')"
        width="100"
        align="center"
      >
        <template slot-scope="scope">
          {{ $t(scope.row.termName) }}
        </template>
      </el-table-column>
      <el-table-column
        width="100"
        align="center"
        :label="$t('cuiltivatingSchemeCheckAndDrawup.totalClassHours')"
      >
        <template slot-scope="scope">
          {{ scope.row.setClassHour }}
        </template>
      </el-table-column>
      <el-table-column
        :label="$t('cuiltivatingSchemeCheckAndDrawup.credit')"
        width="50"
        align="center"
      >
        <template slot-scope="scope">
          {{ scope.row.credit }}
        </template>
      </el-table-column>
      <el-table-column
        :label="$t('cuiltivatingSchemeCheckAndDrawup.evaluationMode')"
        width="100"
        align="center"
      >
        <template slot-scope="scope">
          {{  $t(scope.row.examTypeName) }}
        </template>
      </el-table-column>
      <el-table-column
        :label="$t('cuiltivatingSchemeCheckAndDrawup.courseNum')"
        width="100"
        align="center"
      >
        <template slot-scope="scope">
          {{ scope.row.courseIndex }}
        </template>
      </el-table-column>
      <el-table-column
        :label="$t('cuiltivatingSchemeCheckAndDrawup.tutor')"
        width="100"
        align="center"
      >
        <template slot-scope="scope">
          {{ $t(scope.row.teachers) }}
        </template>
      </el-table-column>
      <el-table-column
        :label="$t('cuiltivatingSchemeCheckAndDrawup.grade')"
        width="50"
        align="center"
      >
        <template slot-scope="scope">
          {{ scope.row.score }}
        </template>
      </el-table-column>
      <el-table-column
        :label="$t('cuiltivatingSchemeCheckAndDrawup.testTime')"
        align="center"
      >
        <template slot-scope="scope">
          {{ scope.row.examStartTime }}
        </template>
      </el-table-column>
      <el-table-column
        v-if="currentRole"
        :label="$t('publishThesis.operation')"
        align="center"
      >
        <template slot-scope="scope">
          <el-button size="mini" round class="allBtn" @click="deleteCourse(scope.row.planCourseId)">{{ $t('cuiltivatingSchemeCheckAndDrawup.delete') }}</el-button>
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
      size="mini"
      style="width: 100%"
      max-height="700"
      class="eltable"
      :header-cell-style="{background:'#eef1f6',color:'#606266',fontSize: '14px'}"
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

    <div>
      &nbsp;&nbsp;
    </div>

    <table v-if="currentRole" class="content" cellspacing="0" width="100%">
      <tbody><tr>
        <td class="head" height="30" colspan="6">
          <div align="center" style="color: #9b0d14">
          {{$t('cuiltivatingSchemeCheckAndDrawup.trainProgram')}}
          </div>
        </td>
      </tr>
      </tbody></table>
    <table v-else class="content" cellspacing="0" width="100%">
      <tbody><tr>
        <td class="head" height="30" colspan="6">
          <div align="center" >
            <el-button size="mini" class="allBtn"><a href="/gradms/api/cultivate/newCultivatePlanPrint" download="course.pdf" >{{ $t('cuiltivatingSchemeCheckAndDrawup.print') }}</a></el-button>
          </div>
        </td>
      </tr>
      </tbody></table>

    <div>
      <el-table
        v-if="currentRole"
        :data="schemeRequiredList"
        element-loading-text="Loading"
        border
        size="mini"
        style="width: 100%"
        :span-method="rowSpanMethodRequired"
        :header-cell-style="getRowClass"
      >
        <el-table-column
          :label="$t('cuiltivatingSchemeCheckAndDrawup.type')"
          width="70"
          align="center"
        >
          <template slot-scope="scope">
            {{ $t(scope.row.category) }}
          </template>
        </el-table-column>
        <el-table-column
          :label="$t('cuiltivatingSchemeCheckAndDrawup.number')"
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
            {{ (scope.row.courseNum) }}
          </template>
        </el-table-column>
        <el-table-column
          :label="$t('cuiltivatingSchemeCheckAndDrawup.courseName')"
          align="center"
        >
          <template slot-scope="scope">
            {{ $t(scope.row.courseName) }}
          </template>
        </el-table-column>
        <el-table-column
          :label="$t('cuiltivatingSchemeCheckAndDrawup.credit')"
          align="center"
        >
          <template slot-scope="scope">
            {{ scope.row.credit }}
          </template>
        </el-table-column>
        <el-table-column
          :label="$t('cuiltivatingSchemeCheckAndDrawup.courseTerm')"
          width="180"
          align="center"
        >
          <template slot-scope="scope">
            {{ $t(scope.row.courseTerm) }}
          </template>
        </el-table-column>
        <el-table-column
          :label="$t('courseQuery.school')"
          align="center"
        >
          <template slot-scope="scope">
            {{ $t(scope.row.collegeNameOfCourse) }}
          </template>
        </el-table-column>
        <el-table-column
          :label="$t('cuiltivatingSchemeCheckAndDrawup.isPubSelectCourse')"
          align="center"
          width="200"
        >
          <template slot-scope="scope">
            {{ $t(scope.row.isPubSelectCourse) }}
          </template>
        </el-table-column>
        <el-table-column
          :label="$t('publishThesis.operation')"
          align="center"
        >
          <template slot-scope="scope">
            <el-button size="mini" round class="allBtn" @click="insertCourse(scope.row.courseNum)">{{ $t('publishThesis.add') }}</el-button>
          </template>
        </el-table-column>
      </el-table>
    </div>

    <div>
      <el-table
        v-if="currentRole"
        :data="schemeOptionalList"
        element-loading-text="Loading"
        border
        size="mini"
        style="width: 100%"
        :span-method="rowSpanMethodOptional"
        :header-cell-style="getRowClass"
        :show-header="false"
      >
        <el-table-column
          :label="$t('cuiltivatingSchemeCheckAndDrawup.type')"
          width="70"
          align="center"
        >
          <template slot-scope="scope">
            {{ $t(scope.row.category) }}
          </template>
        </el-table-column>
        <el-table-column
          :label="$t('cuiltivatingSchemeCheckAndDrawup.number')"
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
            {{ (scope.row.courseNum) }}
          </template>
        </el-table-column>
        <el-table-column
          :label="$t('cuiltivatingSchemeCheckAndDrawup.courseName')"
          align="center"
        >
          <template slot-scope="scope">
            {{ $t(scope.row.courseName) }}
          </template>
        </el-table-column>
        <el-table-column
          :label="$t('cuiltivatingSchemeCheckAndDrawup.credit')"
          align="center"
        >
          <template slot-scope="scope">
            {{ scope.row.credit }}
          </template>
        </el-table-column>
        <el-table-column
          :label="$t('cuiltivatingSchemeCheckAndDrawup.courseTerm')"
          width="180"
          align="center"
        >
          <template slot-scope="scope">
            {{ $t(scope.row.courseTerm) }}
          </template>
        </el-table-column>
        <el-table-column
          :label="$t('courseQuery.school')"
          align="center"
        >
          <template slot-scope="scope">
            {{ $t(scope.row.collegeNameOfCourse) }}
          </template>
        </el-table-column>
        <el-table-column
          :label="$t('cuiltivatingSchemeCheckAndDrawup.isPubSelectCourse')"
          align="center"
          width="200"
        >
          <template slot-scope="scope">
            {{ $t(scope.row.isPubSelectCourse) }}
          </template>
        </el-table-column>
        <el-table-column
          :label="$t('publishThesis.operation')"
          align="center"
        >
          <template slot-scope="scope">
            <el-button size="mini" round class="allBtn" @click="insertCourse(scope.row.courseNum)">{{ $t('publishThesis.add') }}</el-button>
          </template>
        </el-table-column>
      </el-table>
    </div>

    <div>
      <el-table
        v-if="currentRole"
        :data="schemeBuxiuList"
        element-loading-text="Loading"
        border
        size="mini"
        style="width: 100%"
        :span-method="rowSpanMethodBuxiu"
        :header-cell-style="getRowClass"
        :show-header="false"
      >
        <el-table-column
          :label="$t('cuiltivatingSchemeCheckAndDrawup.type')"
          width="70"
          align="center"
        >
          <template slot-scope="scope">
            {{ $t(scope.row.category) }}
          </template>
        </el-table-column>
        <el-table-column
          :label="$t('cuiltivatingSchemeCheckAndDrawup.number')"
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
            {{ (scope.row.courseNum) }}
          </template>
        </el-table-column>
        <el-table-column
          :label="$t('cuiltivatingSchemeCheckAndDrawup.courseName')"
          align="center"
        >
          <template slot-scope="scope">
            {{ $t(scope.row.courseName) }}
          </template>
        </el-table-column>
        <el-table-column
          :label="$t('cuiltivatingSchemeCheckAndDrawup.credit')"
          align="center"
        >
          <template slot-scope="scope">
            {{ scope.row.credit }}
          </template>
        </el-table-column>
        <el-table-column
          :label="$t('cuiltivatingSchemeCheckAndDrawup.courseTerm')"
          width="180"
          align="center"
        >
          <template slot-scope="scope">
            {{ $t(scope.row.courseTerm) }}
          </template>
        </el-table-column>
        <el-table-column
          :label="$t('courseQuery.school')"
          align="center"
        >
          <template slot-scope="scope">
            {{ $t(scope.row.collegeNameOfCourse) }}
          </template>
        </el-table-column>
        <el-table-column
          :label="$t('cuiltivatingSchemeCheckAndDrawup.isPubSelectCourse')"
          width="200"
          align="center"
        >
          <template slot-scope="scope">
            {{ $t(scope.row.isPubSelectCourse) }}
          </template>
        </el-table-column>
        <el-table-column
          :label="$t('publishThesis.operation')"
          align="center"
        >
          <template slot-scope="scope">
            <el-button size="mini" round class="allBtn" @click="insertCourse(scope.row.courseNum)">{{ $t('publishThesis.add') }}</el-button>
          </template>
        </el-table-column>
      </el-table>
    </div>

    <div>
      &nbsp;&nbsp;
    </div>
    <div>
      <table v-if="currentRole" class="content" cellspacing="0" width="100%">
        <tbody><tr>
          <td class="head" height="30" colspan="6">
            <div align="center" style="color: #9b0d14">
              <el-button size="mini" class="allBtn" @click="insertPublicCourse">{{$t('cuiltivatingSchemeCheckAndDrawup.addPublic')}}</el-button>
              <el-button size="mini" class="allBtn" @click="insertAllCourse">{{$t('cuiltivatingSchemeCheckAndDrawup.interCollege')}}</el-button>
            </div>
          </td>
        </tr>
        </tbody></table>
    </div>
  </div>
</template>
<script>
import { showCultivatePlan } from '@/api/checkCultivationScheme'
import { selectCourseInsert } from '@/api/checkCultivationScheme'
import { selectCourseDelete } from '@/api/checkCultivationScheme'
export default {
  name: 'CheckTrainPlan',
  data() {
    return {
      cultSessisonList: [],
      schemeBuxiuList: [],
      schemeOptionalList: [],
      schemeRequiredList: [],
      schemeRequiredListLength: '',
      schemeOptionalListLength: '',
      schemeBuxiuListLength: '',
      planDataBuxiuList: [],
      planDataOptionalList: [],
      planDataRequiredList: [],
      planDataBuxiuListLength: '',
      planDataOptionalListLength: '',
      planDataRequiredListLength: '',
      currentRole: false
    }
  },
  created() {
    this.fetchData()
  },
  methods: {
    fetchData() {
      showCultivatePlan().then(res => {
        this.cultSessisonList = res.data.planData.cultSessisonList
        this.planDataRequiredList = res.data.planData.CourseList11
        this.planDataRequiredListLength = res.data.planData.CourseList11.length
        this.planDataOptionalList = res.data.planData.CourseList12
        this.planDataOptionalListLength = res.data.planData.CourseList12.length
        this.planDataBuxiuList = res.data.planData.CourseList13
        this.planDataBuxiuListLength = res.data.planData.CourseList13.length
        if (res.data.planState === 1) {
          this.currentRole = false
        } else {
          this.currentRole = true
          this.schemeBuxiuList = res.data.schemeData.buxiuList
          this.schemeOptionalList = res.data.schemeData.optionalList
          this.schemeRequiredList = res.data.schemeData.requiredList
          this.schemeRequiredListLength = res.data.schemeData.requiredList.length
          this.schemeOptionalListLength = res.data.schemeData.optionalList.length
          this.schemeBuxiuListLength = res.data.schemeData.buxiuList.length
        }
      })
    },
    insertCourse(courseNum) {
      selectCourseInsert({ 'courseNum': courseNum }).then(res => {
        this.fetchData()
      }).catch(e => {
      })
    },

    deleteCourse(cultPlanId) {
      selectCourseDelete({ 'cultPlanId': cultPlanId }).then(res => {
        this.fetchData()
      }).catch(e => {
      })
    },

    insertPublicCourse() {
      this.$router.push({ path: './insertPublicCourse' })
    },
    insertAllCourse() {
      this.$router.push({ path: './allCourseQuery' })
    },
    // 合并行
    rowSpanMethodRequired({ row, column, rowIndex, columnIndex }) {
      if (columnIndex === 0) {
        if (rowIndex % this.schemeRequiredListLength === 0) {
          return {
            rowspan: this.schemeRequiredListLength,
            colspan: 1
          }
        } else {
          return {
            rowspan: 0,
            colspan: 0
          }
        }
      }
    },
    rowSpanMethodOptional({ row, column, rowIndex, columnIndex }) {
      if (columnIndex === 0) {
        if (rowIndex % this.schemeOptionalListLength === 0) {
          return {
            rowspan: this.schemeOptionalListLength,
            colspan: 1
          }
        } else {
          return {
            rowspan: 0,
            colspan: 0
          }
        }
      }
    },
    rowSpanMethodBuxiu({ row, column, rowIndex, columnIndex }) {
      if (columnIndex === 0) {
        if (rowIndex % this.schemeBuxiuListLength === 0) {
          return {
            rowspan: this.schemeBuxiuListLength,
            colspan: 1
          }
        } else {
          return {
            rowspan: 0,
            colspan: 0
          }
        }
      }
    },

    rowPlanSpanMethodRequire({ row, column, rowIndex, columnIndex }) {
      if (columnIndex === 0) {
        if (rowIndex % this.planDataRequiredListLength === 0) {
          return {
            rowspan: this.planDataRequiredListLength,
            colspan: 1
          }
        } else {
          return {
            rowspan: 0,
            colspan: 0
          }
        }
      }
    },
    rowPlanSpanMethodOption({ row, column, rowIndex, columnIndex }) {
      if (columnIndex === 0) {
        if (rowIndex % this.planDataOptionalListLength === 0) {
          return {
            rowspan: this.planDataOptionalListLength,
            colspan: 1
          }
        } else {
          return {
            rowspan: 0,
            colspan: 0
          }
        }
      }
    },
    rowPlanSpanMethodBuxiu({ row, column, rowIndex, columnIndex }) {
      if (columnIndex === 0) {
        if (rowIndex % this.planDataBuxiuListLength === 0) {
          return {
            rowspan: this.planDataBuxiuListLength,
            colspan: 1
          }
        } else {
          return {
            rowspan: 0,
            colspan: 0
          }
        }
      }
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
  .allBtn{
    background-color: #A50001;
    color: #ffffff;
    border: 0px;
  }
</style>
