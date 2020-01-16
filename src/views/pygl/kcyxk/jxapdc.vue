<template>
  <div class="container">
    <el-select v-model="value" size="mini">
      <el-option
        v-for="item in termList"
        :key="item.value"
        :label="$t(item.name)"
        :value="item.value"
      />
    </el-select>
    <el-button :loading="downloadLoading" class="exportBtn" type="primary" size="mini" @click="handleDownload">{{ $t('achievement.export') }}</el-button>
    <el-table
      :data="tableList"
      border
      size="mini"
      style="width: 100%;"
      class="eltable"
      :header-cell-style="{background:'#eef1f6',color:'#606266',fontSize: '14px'}"
    >
      <el-table-column
        prop="category"
        :label="$t('courseExport.courseNumber')"
        width="78"
        align="center"
      >
        <template slot-scope="scope">
          {{ scope.row.courseIndex }}
        </template>
      </el-table-column>
      <el-table-column
        :label="$t('courseExport.courseName')"
        align="center"
        width="250"
      >
        <template slot-scope="scope">
          {{ $t(scope.row.courseName) }}
        </template>
      </el-table-column>
      <el-table-column
        :label="$t('courseExport.courseNo')"
        width="90"
        align="center"
      >
        <template slot-scope="scope">
          {{ scope.row.courseNum }}
        </template>
      </el-table-column>
      <el-table-column
        :label="$t('courseExport.YearSemester')"
        width="204"
        align="center"
      >
        <template slot-scope="scope">
          {{ $t(scope.row.termName) }}
        </template>
      </el-table-column>
      <el-table-column
        :label="$t('courseExport.coursePlace')"
        align="center"
        width="250"
      >
        <template slot-scope="scope">
          {{ $t(scope.row.roomName) }}
        </template>
      </el-table-column>
      <el-table-column
        :label="$t('courseExport.OddOrEvenWeek')"
        width="110"
        align="center"
      >
        <template slot-scope="scope">
          {{ $t(scope.row.isOddEvenWeek) }}
        </template>
      </el-table-column>
      <el-table-column
        :label="$t('courseExport.courseDate')"
        width="110"
        align="center"
      >
        <template slot-scope="scope">
          {{ $t(scope.row.weekDay) }}
        </template>
      </el-table-column>
      <el-table-column
        :label="$t('courseExport.startWeek')"
        width="115"
        align="center"
      >
        <template slot-scope="scope">
          {{ scope.row.startWeek }}
        </template>
      </el-table-column>
      <el-table-column
        :label="$t('courseExport.startWeekNumber')"
        width="120"
        align="center"
      >
        <template slot-scope="scope">
          {{ scope.row.period }}
        </template>
      </el-table-column>
      <el-table-column
        :label="$t('courseExport.courseSection')"
        width="120"
        align="center"
      >
        <template slot-scope="scope">
          {{ scope.row.classTime }}
        </template>
      </el-table-column>
      <el-table-column
        prop="kaohefangshi"
        :label="$t('courseExport.teacher')"
        align="center"
        width="200"
      >
        <template slot-scope="scope">
          {{ $t(scope.row.personName) }}
        </template>
      </el-table-column>
    </el-table>
  </div>
</template>
<script>
import { newCultivateCourseExportInit } from '@/api/exportTeachingArrangement'
export default {
  data() {
    return {
      courseExportList: [],
      termList: [],
      downloadLoading: false,
      value: ''
    }
  },
  computed: {
    'tableList': function() {
      return this.courseExportList.filter(item => {
        if (!this.value || item.termId == this.value) { return true }
        return false
      })
    }
  },
  created() {
    this.fetchData()
  },
  methods: {
    fetchData() {
      newCultivateCourseExportInit().then(res => {
        this.termList = res.data.termList
        this.courseExportList = res.data.courseExportList
      })
    },
    handleDownload() {
      this.downloadLoading = true
      import('@/vendor/Export2Excel').then(excel => {
        const tHeader = ['CourseNo', 'CourseName', 'CourseNum', 'ClassLocation', 'YearSemester', 'OddOrEvenWeek', 'CourseDate', 'StartWeek', 'StartWeekNumber', 'CourseSection', 'Teacher']
        const filterVal = ['courseIndex', 'courseName', 'courseNum', 'roomName', 'termName', 'isOddEvenWeek', 'weekDay', 'startWeek', 'period', 'classTime', 'personName']
        const courseExportList = this.courseExportList
        const data = this.formatJson(filterVal, courseExportList)
        excel.export_json_to_excel({
          header: tHeader,
          data,
          filename: this.filename,
          autoWidth: this.autoWidth,
          bookType: this.bookType
        })
        this.downloadLoading = false
      })
    },
    formatJson(filterVal, jsonData) {
      return jsonData.map(v => filterVal.map(j => {
        return this.$t(v[j])
      }))
    }
  }
}
</script>

<style scoped>
  .container{
    margin: 15px;
  }
  .eltable{
    margin-top: 20px;
  }
  body .el-table th.gutter{
    display: table-cell!important;
  }

  body .el-table colgroup.gutter{
    display: table-cell!important;
  }
  .exportBtn{
    background-color: #A50001;
    border: 0px;
  }
</style>
