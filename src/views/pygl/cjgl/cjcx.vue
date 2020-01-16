<template>
  <div class="container">
    <div class="tableStyle">
      <el-table
        :data="gradeList"
        border
        size="mini"
        style="width: 100%;"
        :header-cell-style="{background:'#eef1f6',color:'#606266',fontSize: '14px'}"
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
          :label="$t('gradeQuery.courseNum')"
          width="125"
          align="center"
        >
          <template slot-scope="scope">
            {{ scope.row.courseNum }}
          </template>
        </el-table-column>
        <el-table-column
          :label="$t('gradeQuery.courseName')"
          align="center"
        >
          <template slot-scope="scope">
            {{ $t(scope.row.courseName) }}
          </template>
        </el-table-column>
        <el-table-column
          :label="$t('gradeQuery.teacher')"
          width="120"
          align="center"
        >
          <template slot-scope="scope">
            {{ $t(scope.row.teaName) }}
          </template>
        </el-table-column>
        <el-table-column
          :label="$t('gradeQuery.credit')"
          width="70"
          align="center"
        >
          <template slot-scope="scope">
            {{ scope.row.credit }}
          </template>
        </el-table-column>
        <el-table-column
          :label="$t('gradeQuery.courseProperty')"
          width="130"
          align="center"
        >
          <template slot-scope="scope">
            {{ $t(scope.row.courseSort) }}
          </template>
        </el-table-column>
        <el-table-column
          label="成绩"
          width="80"
          align="center"
        >
          <template slot-scope="scope">
            {{ scope.row.subItemScorePrint }}
          </template>
        </el-table-column>
        <el-table-column
          :label="$t('gradeQuery.examTime')"
          width="110"
          align="center"
        >
          <template slot-scope="scope">
            {{ scope.row.examTime }}
          </template>
        </el-table-column>
      </el-table>
    </div>
  </div>

</template>

<script>
import { stuGradeQuery } from '@/api/stuGradeQuery'
export default {
  data() {
    return {
      gradeList: [],
      courseNum: '',
      courseName: '',
      teaName: '',
      credit: '',
      dataName: '',
      subItemScorePrint: '',
      examTime: ''
    }
  },
  created() {
    this.fetchData()
  },
  methods: {
    fetchData() {
      stuGradeQuery().then(res => {
        this.gradeList = res.data
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

</style>
