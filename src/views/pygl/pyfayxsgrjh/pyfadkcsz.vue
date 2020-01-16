<template>
  <el-table
    :data="requiredList"
    border
    style="width: 100%;"
    size="mini"
    :span-method="rowSpanMethod"
    width="100%"
  >
    <el-table-column
      :label="$t('cuiltivatingSchemeCheckAndDrawup.type')"
      width="70"
      align="center"
    >
      <template slot-scope="scope">
        {{ (scope.row.type) }}
      </template>
    </el-table-column>
    <el-table-column
      prop="category"
      :label="$t('cuiltivatingSchemeCheckAndDrawup.number')"
      width="52"
      align="center"
    >
      <template slot-scope="scope">
        {{ scope.$index+1 }}
      </template>
    </el-table-column>
    <el-table-column
      prop="courseNum"
      :label="$t('cuiltivatingSchemeCheckAndDrawup.courseNumber')"
      width="102"
      align="center"
    >
      <template slot-scope="scope">
        {{ $t(scope.row.courseNum) }}
      </template>
    </el-table-column>
    <el-table-column
      prop="courseName"
      :label="$t('cuiltivatingSchemeCheckAndDrawup.courseName')"
      width="204"
      align="center"
    >
      <template slot-scope="scope">
        {{ $t(scope.row.courseName) }}
      </template>
    </el-table-column>
    <el-table-column
      prop="term"
      :label="$t('cuiltivatingSchemeCheckAndDrawup.courseTerm')"
      width="102"
      align="center"
    >
      <template slot-scope="scope">
        {{ $t(scope.row.term) }}
      </template>
    </el-table-column>
    <el-table-column
      prop="classHour"
      :label="$t('cuiltivatingSchemeCheckAndDrawup.totalClassHours')"
      width="102"
      align="center"
    />
    <el-table-column
      prop="credit"
      :label="$t('cuiltivatingSchemeCheckAndDrawup.credit')"
      width="102"
      align="center"
    />
    <el-table-column
      prop="teacherGroup"
      :label="$t('cuiltivatingSchemeCheckAndDrawup.tutor')"
      width="102"
      align="center"
    >
      <template slot-scope="scope">
        {{ $t(scope.row.teacherGroup) }}
      </template>
    </el-table-column>
    <el-table-column
      prop="examStyle"
      :label="$t('cuiltivatingSchemeCheckAndDrawup.evaluationMode')"
      align="center"
    >
      <template slot-scope="scope">
        {{ $t(scope.row.examStyle) }}
      </template>
    </el-table-column>
  </el-table>
</template>

<script>
import { pyfadkcsz } from '@/api/showPersonCultivate'
export default {
  data() {
    return {
      loading: false,
      post: null,
      courseTablelist: '',
      error: null,
      schemeId: '',
      requiredList: [],
      optionalList: [],
      buxiuList: [],
      requiredListLength: '',
      rowspan: '',
      colspan: '',
      row: '',
      column: ''

    }
  },
  watch: {
    '$route': 'fetchData'
  },
  created() {
    this.fetchData()
    this.rowSpanMethod()
  },
  methods: {
    fetchData() {
      this.error = this.post = null
      this.loading = true
      console.log(this.$route.params.schemeId)
      pyfadkcsz({ 'schemeId': this.$route.params.schemeId }, (err, post) => {
        this.loading = false
        if (err) {
          this.error = err.toString()
        } else {
          this.post = post
        }
      }).then(res => {
        res.data.requiredList[0].type = '必修课'
        this.requiredList = res.data.requiredList
        this.requiredListLength = this.requiredList.length
        res.data.optionalList[0].type = '选修课'
        this.optionalList = res.data.optionalList
        this.optionalListLength = this.optionalList.length
        res.data.buxiuList[0].type = '补修课'
        this.buxiuList = res.data.buxiuList
        this.buxiuListLength = this.buxiuList.length
      }
      )
    },
    // 合并行
    rowSpanMethod({ row, column, rowIndex, columnIndex }) {
      if (columnIndex === 0) {
        if (rowIndex % this.requiredListLength === 0) {
          return {
            rowspan: this.requiredListLength,
            colspan: 1
          }
        } else {
          return {
            rowspan: 0,
            colspan: 0
          }
        }
        if (rowIndex % this.optionalListLength === 0) {
          return {
            rowspan: this.optionalListLength,
            colspan: 1
          }
        } else {
          return {
            rowspan: 0,
            colspan: 0
          }
        }
        if (rowIndex % this.buxiuListLength === 0) {
          return {
            rowspan: this.buxiuListLength,
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

</style>
