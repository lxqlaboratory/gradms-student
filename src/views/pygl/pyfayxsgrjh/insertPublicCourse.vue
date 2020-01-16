<template>
  <div class="app-container">
    <el-table
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
          {{ (scope.row.courseName) }}
        </template>
      </el-table-column>
      <el-table-column
        label="课程属性"
        width="100"
        align="center"
      >
        <template slot-scope="scope">
          {{ scope.row.courseAttribute }}
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
          {{ scope.row.termCodeName }}
        </template>
      </el-table-column>
      <el-table-column
        label="开课学院"
        width="100"
        align="center"
      >
        <template slot-scope="scope">
          {{ scope.row.collegeName }}
        </template>
      </el-table-column>
      <el-table-column
        :label="$t('cuiltivatingSchemeCheckAndDrawup.evaluationMode')"
        width="100"
        align="center"
      >
        <template slot-scope="scope">
          {{ scope.row.examTypeName }}
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
import { publicCourseQueryDoQuery } from '@/api/checkCultivationScheme'
import { newCultivateSelectPublicCourse } from '@/api/checkCultivationScheme'
export default {
  name: 'InsertPublicCourse',
  data() {
    return {
      publicCourseList: []
    }
  },
  created() {
    this.fetchData()
  },
  methods: {
    fetchData() {
      publicCourseQueryDoQuery().then(res => {
        this.publicCourseList = res.data
      })
    },
    insertCourse(courseId) {
      newCultivateSelectPublicCourse({ 'courseId': courseId }).then(res => {
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
