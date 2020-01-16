<template>
  <div class="app-container">
    <!--<div>-->
    <span class="searchSpan">{{ $t('cultivatingSchemeQuery.studentType') }}:</span>
    <el-select v-model="stuTypecode" style="width: 15%;" size="mini" filterable placeholder="please choose" @change="getMajor">
      <el-option
        v-for="item in stuTypeList"
        :key="item.value"
        :label="$t(item.name)"
        :value="item.value"
      />
    </el-select>
    <span class="searchSpan">{{ $t('cultivatingSchemeQuery.school') }}:</span>
    <el-select v-model="collegeType" style="width: 15%" size="mini" filterable placeholder="please choose" @change="getMajor">
      <el-option
        v-for="item in collegeNameList"
        :key="item.value"
        :label="$t(item.name)"
        :value="item.value"
      />
    </el-select>
    <span class="searchSpan">{{ $t('cultivatingSchemeQuery.major') }}:</span>
    <el-select v-model="majorTypeCode" style="width: 15%" size="mini" filterable placeholder="please choose">
      <el-option
        v-for="item in majorList"
        :key="item.value"
        :label="$t(item.name)"
        :value="item.value"
      />
    </el-select>
    <span class="searchSpan">{{ $t('cultivatingSchemeQuery.year') }}:</span>
    <el-input v-model="year" placeholder="year" style="width: 15%" size="mini" />
    <el-button size="mini" type="primary" class="queryBtn" @click="getTableList">{{$t('CourseQuery.query')}}</el-button>

    <el-table
      :data="cultivateFormList"
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
        :label="$t('cultivatingSchemeQuery.cultivatingSchemeName')"
        align="center"
      >
        <template slot-scope="scope">
          {{ $t(scope.row.schemeName) }}
        </template>
      </el-table-column>
      <el-table-column
        :label="$t('cultivatingSchemeQuery.major1')"
        align="center"
      >
        <template slot-scope="scope">
          {{ $t(scope.row.majorName) }}
        </template>
      </el-table-column>
      <el-table-column
        :label="$t('cultivatingSchemeQuery.startTime')"
        width="120"
        align="center"
      >
        <template slot-scope="scope">
          {{ scope.row.startTimeStr }}
        </template>
      </el-table-column>
      <el-table-column
        fixed="right"
        width="100"
        align="center"
        :label="$t('cultivatingSchemeQuery.detail')"
      >
        <template slot-scope="scope">
          <el-button class="infoBtn" type="text" @click="pushInfo(scope.row.schemeId , scope.row.majorName, scope.row.studentType )">{{$t('cultivatingSchemeQuery.detail')}}</el-button>
        </template>
      </el-table-column>
    </el-table>
  </div>
</template>
<script>
import { cultivateSchemeShow, getMajorList, getCultivateTableList } from '@/api/cultivationInquiry'
export default {
  data() {
    return {
      tablelist: [],
      cultivateFormList: [],
      collegeNameList: [],
      majorList: [],
      stuTypeList: [],
      stuTypecode: '',
      year: '',
      collegeType: '',
      majorTypeCode: ''
    }
  },
  created() {
    this.fetchData()
  },
  methods: {
    fetchData() {
      cultivateSchemeShow().then(res => {
        this.cultivateFormList = res.data.cultivateFormList
        this.stuTypeList = res.data.stuTypeList
        this.collegeNameList = res.data.collegeNameList
      })
    },
    pushInfo(id, majorName, studentType) {
      this.$router.push({ name: 'showCultivate', params: { id, majorName, studentType }})
    },
    getMajor() {
      if (this.stuTypecode && this.collegeType) {
        getMajorList({ 'stuTypecode': this.stuTypecode, 'collegeType': this.collegeType }).then(res => {
          this.majorList = res.data.majorList
          console.log(res)
        }).catch(e => {

        })
      }
    },
    getTableList() {
      getCultivateTableList({ 'stuTypecode': this.stuTypecode, 'collegeType': this.collegeType, 'majorTypeCode': this.majorTypeCode, 'year': this.year }).then(res => {
        this.cultivateFormList = res.data.cultivateFormList
        console.log(res)
      }).catch(e => {

      })
    }
  }
}
</script>

<style scoped>
  .eltable{
    margin-top: 20px;
  }
  .searchSpan{
    font-size: 14px;
    margin-left: 10px;
  }
  .queryBtn{
    margin-left: 40px;
    background-color:#A50001;
    border: 0px;
  }
  .infoBtn{
    font-size: 12px;
    color: #A50001;
  }
  el-select{
    height: 30px;
  }

</style>
