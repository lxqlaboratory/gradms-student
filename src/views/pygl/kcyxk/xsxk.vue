<template>
  <div class="container">
    <div class="tableStyle">
      <el-table
        :data="courseList"
        border
        size="mini"
        style="width: 100%;"
      >
        <el-table-column
          :label="$t('gradeQuery.seqNum')"
          fixed="left"
          width="73"
          align="center"
          color="black"
        >
          <template slot-scope="scope">
            {{ scope.$index+1 }}
          </template>
        </el-table-column>
        <el-table-column
          :label="$t('selectCourse.courseNum')"
          width="80"
          align="center"
          color="black"
        >
          <template slot-scope="scope">
            {{ scope.row.courseNum }}
          </template>
        </el-table-column>
        <el-table-column
          :label="$t('selectCourse.courseName')"
          width="125"
          align="center"
        >
          <template slot-scope="scope">
            {{ $t(scope.row.courseName) }}
          </template>
        </el-table-column>
        <el-table-column
          width="125"
          :label="$t('selectCourse.courseSeq')"
          align="center"
        >
          <template slot-scope="scope">
            {{ (scope.row.courseIndex) }}
          </template>
        </el-table-column>
        <el-table-column
          :label="$t('selectCourse.courseProperty')"
          align="center"
        >
          <template slot-scope="scope">
            {{ $t(scope.row.courseSort) }}
          </template>
        </el-table-column>
        <el-table-column
          :label="$t('selectCourse.exammeans')"
          width="100"
          align="center"
        >
          <template slot-scope="scope">
            {{ $t(scope.row.examType) }}
          </template>
        </el-table-column>
        <el-table-column
          :label="$t('selectCourse.teacher')"
          align="center"
        >
          <template slot-scope="scope">
            {{ $t(scope.row.teaName) }}
          </template>
        </el-table-column>
        <el-table-column
          :label="$t('selectCourse.semester')"
          align="center"
        >
          <template slot-scope="scope">
            {{ $t(scope.row.termName) }}
          </template>
        </el-table-column>
        <el-table-column
          :label="$t('selectCourse.restCourse')"

          align="center"
        >
          <template slot-scope="scope">
            {{ (scope.row.remain) }}
          </template>
        </el-table-column>
        <el-table-column
          :label="$t('selectCourse.remark')"
          width="110"
          align="center"
        >
          <template slot-scope="scope">
            {{ (scope.row.remark) }}
          </template>
        </el-table-column>
        <el-table-column
          :label="$t('selectCourse.operation')"
          align="center"
          width="100"
        >
          <template slot-scope="scope">
            <el-button size="mini" class="allBtn" @click="deleteCourse(scope.row.planCourseId , scope.row.taskId)">{{ $t('cuiltivatingSchemeCheckAndDrawup.delete') }}</el-button>
          </template>
        </el-table-column>
      </el-table>
    </div>
  </div>
</template>

<script>
import { coursenewStuSelectInit } from '@/api/studentSelectCourse'
import { newcultivateCourseOperation } from '@/api/studentSelectCourse'
import { translation } from '@/utils/translation'
export default {
  name: 'Xsxk',
  data() {
    return {
      courseList: []
    }
  },
  computed: {
    language() {
      return this.$store.getters.language
    }
  },
  created() {
    this.fetchData()
  },
  methods: {
    fetchData() {
      coursenewStuSelectInit().then(res => {
        this.courseList = res.data
      })
    },
    deleteCourse(planCourseId, taskId) {
      newcultivateCourseOperation({ 'planCourseId': planCourseId, 'taskId': taskId }).then(res => {
        if (res.code == 1) {
          this.$message({
            message: translation(res, this.language).message,
            type: 'error'
          })
        } else {
          this.$message({
            message: translation(res, this.language).message,
            type: 'success'
          })
          this.fetchData()
        }
      }).catch(e => {
      })
    }
  }
}
</script>

<style scoped>
  .container{
    margin: 20px;
  }
  .tableStyle{
    margin-top: 20px;
  }
  .allBtn{
    background-color: #A50001;
    color: #ffffff;
    border: 0px;
  }
</style>
