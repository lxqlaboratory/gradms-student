<template>
  <div class="container">
    <!--第一行-->
    <el-row>
      <el-col :span="4" class="colstyle1" style="padding-top: 10px;">
        <label class="title">{{ $t('courseQuery.school') }}</label>
      </el-col>
      <el-col :span="8" class="colstyle2">
        <el-select v-model="choseSchool" style="width: 70%" size="mini" placeholder="please Choose">
          <el-option
            v-for="item in collegeList"
            :key="item.value"
            :label="$t(item.name)"
            :value="item.value"
          />
        </el-select>
      </el-col>
      <el-col :span="4" class="colstyle3" style="padding-top: 10px;">
        <label class="title">{{ $t('courseQuery.courseNumber') }}</label>
      </el-col>
      <el-col :span="8" class="colstyle4">
        <el-input v-model="courseNum" style="width: 70%" size="mini" />
      </el-col>
    </el-row>
    <!--第二行-->
    <el-row style="border-bottom: 1px solid black">
      <el-col :span="4" class="colstyle1" style="padding-top: 10px;">
        <label class="title">{{ $t('courseQuery.courseName') }}	</label>
      </el-col>
      <el-col :span="8" class="colstyle2">
        <el-input v-model="courseName" style="width: 70%" size="mini" />
      </el-col>
    </el-row>
    <!--第三行-->
    <el-row style="padding-top:10px;border: 0px">
      <el-button type="primary" class="allBtn" style="width: 25%" @click="showAllCourse">{{ $t('courseQuery.query') }} </el-button>
    </el-row>
    <div>
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
    </div>
    <el-table
      v-if="showTable"
      :data="publicCourseList"
      element-loading-text="Loading"
      border
      fit="true"
      size="mini"
      style="width: 100%"
      :header-cell-style="{background:'#eef1f6',color:'#606266',fontSize: '14px'}"
    >
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
        width="100"
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
        :label="$t('courseQuery.courseProperty')"
        width="100"
        align="center"
      >
        <template slot-scope="scope">
          {{ $t(scope.row.courseAttribute) }}
        </template>
      </el-table-column>
      <el-table-column
        align="center"
        :label="$t('CourseQuery.total')"
      >
        <template slot-scope="scope">
          {{ scope.row.classHour }}
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
        :label="$t('cuiltivatingSchemeCheckAndDrawup.courseTerm')"
        align="center"
      >
        <template slot-scope="scope">
          {{ $t(scope.row.termCodeName) }}
        </template>
      </el-table-column>
      <el-table-column
        :label="$t('cuiltivatingSchemeCheckAndDrawup.evaluationMode')"
        align="center"
      >
        <template slot-scope="scope">
          {{ $t(scope.row.examTypeName) }}
        </template>
      </el-table-column>
      <el-table-column
        :label="$t('CourseQuery.CoursePerson')"
        align="center"
      >
        <template slot-scope="scope">
          {{ scope.row.managerName }}
        </template>
      </el-table-column>
      <el-table-column
        :label="$t('publishThesis.operation')"
        align="center"
      >
        <template slot-scope="scope">
          <el-button size="mini" round class="allBtn" type="text" @click="insertCourse(scope.row.courseId)">{{$t('cultivatingSchemeQuery.detail')}}</el-button>
        </template>
      </el-table-column>
    </el-table>
  </div>
</template>

<script>
  import { allCourseQueryInit } from '@/api/allCourseQuery.js'
  import { allCourseQueryDoQuery } from '@/api/allCourseQuery.js'
  import { translation } from '@/utils/translation'
export default {
  name: 'Kccx',
  data() {
    return {
      collegeList: [],
      showTable: false,
      choseSchool: '',
      courseNum: '',
      courseName: '',
      publicCourseList: []
    }
  },
  created() {
    this.fetchData()
  },
  computed: {
    language() {
      return this.$store.getters.language
    }
  },
  methods: {
    fetchData() {
      allCourseQueryInit().then(res => {
        this.collegeList = res.data.collegeList
      })
    },
    showAllCourse() {
      allCourseQueryDoQuery({'collegeId': this.choseSchool ,'courseNum': this.courseNum ,'courseName': this.courseName  }).then(res => {
        if(res.code == 1){
          this.$message({
            message: translation(res,this.language).message,
            type: 'error'
          });
        }else{
          this.showTable = true
          this.publicCourseList = res.data
        }
        })
    },
    insertCourse(courseId) {
      this.$router.push({ name: 'allCourseQueryDetail', params: { courseId }})
    }
  }
}
</script>

<style scoped>
  .container{
    padding: 100px;
  }
  .el-row {
    border: 1px solid black;
    border-bottom:1px solid #FFF;
    height: 40px;
    text-align: center;
    vertical-align: middle;
    padding: 0px;
    margin-left: 5px;
    margin-right: 5px;
    font-size: 16px;
  }
  .colstyle1,.colstyle2,.colstyle3,.colstyle4{
    height: 100%;
    font-size: 14px;
    padding-top: 5px;
  }
  .colstyle1,.colstyle2,.colstyle3{
    border-right: 1px solid black;
  }
  .colstyle2,.colstyle4{
    color: #9b0d14;
  }
  .colstyle1,.colstyle3{
    font-weight:bold;
  }
  el-input{
    border-radius: 0px;
  }
  .allBtn{
    background-color: #A50001;
    color: #ffffff;
    border: 0px;
  }
</style>
