<template>
  <div class="app-container">
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
        label="课程属性"
        width="100"
        align="center"
      >
        <template slot-scope="scope">
          {{ $t(scope.row.courseAttribute) }}
        </template>
      </el-table-column>
      <el-table-column
        width="50"
        align="center"
        label="学时"
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
        width="100"
        align="center"
      >
        <template slot-scope="scope">
          {{ $t(scope.row.termCodeName) }}
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
        label="负责人"
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
          <el-button size="mini" round class="allBtn" @click="insertCourse(scope.row.courseId)">{{ $t('publishThesis.add') }}</el-button>
        </template>
      </el-table-column>
    </el-table>

  </div>
</template>

<script>
import { acrossCourseQueryInit } from '@/api/checkCultivationScheme'
import { acrossCourseQueryDoQuery } from '@/api/checkCultivationScheme'
import { newCultivateSelectAcrossCourse } from '@/api/checkCultivationScheme'
export default {
  name: 'AllCourseQuery',
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
  methods: {
    fetchData() {
      acrossCourseQueryInit().then(res => {
        this.collegeList = res.data.collegeList
      })
    },
    showAllCourse() {
      acrossCourseQueryDoQuery({ 'collegeId': this.choseSchool, 'courseNum': this.courseNum, 'courseName': this.courseName }).then(res => {
        if (res.msg === '学院与（课程名或课程号）不能同时为空') {
          this.$message({
            message: '学院与（课程名或课程号）不能同时为空',
            type: 'error'
          })
        } else {
          this.showTable = true
          this.publicCourseList = res.data
        }
      }).catch(e => {

      })
    },
    insertCourse(courseId) {
      newCultivateSelectAcrossCourse({ 'courseId': courseId }).then(res => {
        if (res.msg === '操作成功！') {
          this.$message({
            message: '添加成功',
            type: 'success'
          })
        } else {
          this.$message.error('添加失败')
        }
      }).catch(e => {
      })
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
