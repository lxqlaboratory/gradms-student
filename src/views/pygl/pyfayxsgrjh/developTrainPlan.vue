<template>
  <div class="app-container">
    <el-table
      :data="requiredList"
      border
      size="mini"
      style="width: 100%"
    >
      <el-table-column
        label="类别"
        width="100"
      >
        <template slot-scope="scope">
          {{ $t(scope.row.category) }}
        </template>
      </el-table-column>
      <el-table-column
        label="序号"
        width="80"
      >
        <template slot-scope="scope">
          {{ scope.$index+1 }}
        </template>
      </el-table-column>
      <el-table-column
        label="课程名"
        width="280"
      >
        <template slot-scope="scope">
          {{ $t(scope.row.courseName) }}
        </template>
      </el-table-column>
      <el-table-column
        label="学分"
        width="80"
      >
        <template slot-scope="scope">
          {{ (scope.row.credit) }}
        </template>
      </el-table-column>
      <el-table-column
        label="开课学期"
        width="280"
      >
        <template slot-scope="scope">
          {{ $t(scope.row.courseTerm) }}
        </template>
      </el-table-column>
      <el-table-column
        label="所属学院"
        width="210"
      >
        <template slot-scope="scope">
          {{ $t(scope.row.collegeNameOfCourse) }}
        </template>
      </el-table-column>
      <el-table-column
        label="是否公选课"
        width="180"
      >
        <template slot-scope="scope">
          {{ $t(scope.row.isPubSelectCourse) }}
        </template>
      </el-table-column>
      <el-table-column
        label="操作"
      />
    </el-table>

    <el-table
      :data="optionalList"
      border
      size="mini"
      style="width: 100%"
    >
      <el-table-column
        label="类别"
        width="100"
      >
        <template slot-scope="scope">
          {{ $t(scope.row.category) }}
        </template>
      </el-table-column>
      <el-table-column
        label="序号"
        width="80"
      >
        <template slot-scope="scope">
          {{ scope.$index+1 }}
        </template>
      </el-table-column>
      <el-table-column
        label="课程名"
        width="280"
      >
        <template slot-scope="scope">
          {{ $t(scope.row.courseName) }}
        </template>
      </el-table-column>
      <el-table-column
        label="学分"
        width="80"
      >
        <template slot-scope="scope">
          {{ (scope.row.credit) }}
        </template>
      </el-table-column>
      <el-table-column
        label="开课学期"
        width="280"
      >
        <template slot-scope="scope">
          {{ $t(scope.row.courseTerm) }}
        </template>
      </el-table-column>
      <el-table-column
        label="所属学院"
        width="210"
      >
        <template slot-scope="scope">
          {{ $t(scope.row.collegeNameOfCourse) }}
        </template>
      </el-table-column>
      <el-table-column
        label="是否公选课"
        width="180"
      >
        <template slot-scope="scope">
          {{ $t(scope.row.isPubSelectCourse) }}
        </template>
      </el-table-column>
      <el-table-column
        label="操作"
      />
    </el-table>

    <el-table
      :data="buxiuList"
      border
      size="mini"
      style="width: 100%"
    >
      <el-table-column
        label="类别"
        width="100"
      >
        <template slot-scope="scope">
          {{ $t(scope.row.category) }}
        </template>
      </el-table-column>
      <el-table-column
        label="序号"
        width="80"
      >
        <template slot-scope="scope">
          {{ scope.$index+1 }}
        </template>
      </el-table-column>
      <el-table-column
        label="课程名"
        width="280"
      >
        <template slot-scope="scope">
          {{ $t(scope.row.courseName) }}
        </template>
      </el-table-column>
      <el-table-column
        label="学分"
        width="80"
      >
        <template slot-scope="scope">
          {{ (scope.row.credit) }}
        </template>
      </el-table-column>
      <el-table-column
        label="开课学期"
        width="280"
      >
        <template slot-scope="scope">
          {{ $t(scope.row.courseTerm) }}
        </template>
      </el-table-column>
      <el-table-column
        label="所属学院"
        width="210"
      >
        <template slot-scope="scope">
          {{ $t(scope.row.collegeNameOfCourse) }}
        </template>
      </el-table-column>
      <el-table-column
        label="是否公选课"
        width="180"
      >
        <template slot-scope="scope">
          {{ $t(scope.row.isPubSelectCourse) }}
        </template>
      </el-table-column>
      <el-table-column
        label="操作"
      />
    </el-table>
  </div>
</template>

<script>
import { showCultivatePlan } from '@/api/checkCultivationScheme'
export default {
  name: 'DevelopTrainPlan',
  data() {
    return {
      cultiveList: [],
      requiredList: [],
      optionalList: [],
      buxiuList: [],
      requiredLength: 0,
      optionalLength: 0,
      buxiuLength: 0
    }
  },
  created() {
    this.fetchData()
  },
  methods: {

    fetchData() {
      showCultivatePlan().then(res => {
        this.requiredList = res.data.requiredList
        this.optionalList = res.data.optionalList
        this.buxiuList = res.data.buxiuList
      })
    }
  }
}
</script>

<style scoped>

</style>
