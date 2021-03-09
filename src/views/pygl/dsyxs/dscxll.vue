<template>
  <div class="app-container">
    <div class="query-container" >
      {{ $t('browseTutor.school') }}:
      <el-select v-model="collegeId" placeholder="please choose"  style="width: 25%;">
        <el-option
          v-for="item in collegeList"
          :key="item.collegeId"
          :label="$t(item.collegeName)"
          :value="item.collegeId">
        </el-option>
      </el-select>
      {{ $t('browseTutor.research') }}:
      <el-input v-model="research" placeholder="please enter the major or research direction" style="width: 25%;"  />
      {{ $t('browseTutor.perName') }}:
      <el-input v-model="perName" placeholder="please enter the tutor name" style="width: 18%;"  />
      <el-button  type="primary" @click="doQuery"  >{{ $t('browseTutor.query') }}</el-button>
    </div>

    <div class="table-container">
      <el-table
        :data="tutors"
        border
        style="width: 100%;"
        size="mini"
      >
        <el-table-column
          :label="$t('browseTutor.number')"
          fixed="left"
          width="60"
          align="center"
          color="black"
        >
          <template slot-scope="scope">
            {{ scope.$index+1 }}
          </template>
        </el-table-column>
        <el-table-column
          :label="$t('browseTutor.perName')"
          align="center"
          color="black"
          width="130"
        >
          <template slot-scope="scope">
            <el-button type="text" @click="showPersonInfo(scope.row.personId)">{{ $t(scope.row.perName)}}</el-button>
          </template>
        </el-table-column>
        <el-table-column
          :label="$t('browseTutor.school')"
          align="center"
          color="black"
          width="140"
        >
          <template slot-scope="scope">
            {{ $t(scope.row.collegeName) }}
          </template>
        </el-table-column>
        <el-table-column
          :label="$t('browseTutor.title')"
          align="center"
          color="black"
          width="140"
        >
          <template slot-scope="scope">
            {{ $t(scope.row.proTechPositionName) }}
          </template>
        </el-table-column>
        <el-table-column
          :label="$t('browseTutor.tutorType')"
          align="center"
          color="black"
        >
          <template slot-scope="scope">
            {{ $t(scope.row.tutorType) }}
          </template>
        </el-table-column>
        <el-table-column
          :label="$t('browseTutor.majorName')"
          align="center"
          color="black"
        >
          <template slot-scope="scope">
            {{ $t(scope.row.majorName) }}
          </template>
        </el-table-column>
        <el-table-column
          :label="$t('browseTutor.researchDirection')"
          align="center"
          color="black"
        >
          <template slot-scope="scope">
            {{ $t(scope.row.researchDirection) }}
          </template>
        </el-table-column>
        <el-table-column
          :label="$t('browseTutor.sex')"
          align="center"
          color="black"
        >
          <template slot-scope="scope">
            {{ $t(scope.row.genderName) }}
          </template>
        </el-table-column>
        <el-table-column
          :label="$t('browseTutor.age')"
          align="center"
          color="black"
        >
          <template slot-scope="scope">
            {{ $t(scope.row.age) }}
          </template>
        </el-table-column>
        <el-table-column
          :label="$t('browseTutor.degree')"
          align="center"
          color="black"
        >
          <template slot-scope="scope">
            {{ $t(scope.row.lastDegre) }}
          </template>
        </el-table-column>
        <el-table-column
          :label="$t('browseTutor.email')"
          align="center"
          color="black"
        >
          <template slot-scope="scope">
            {{ $t(scope.row.email) }}
          </template>
        </el-table-column>
      </el-table>
    </div>
  </div>
</template>
<script>
  import { tutorInfoQueryBrowseInit } from '@/api/tutor'
  import { tutorInfoQueryBrowseQuery} from '@/api/tutor'
  export default {
    name: 'tutorInfoQueryBrowse',
    data() {
      return {
        collegeId:-1,
        research:'',
        perName:'',
        collegeList:[],
        tutors:[]
      }
    },
    created() {
      this.fetchData()
    },
    methods: {
      fetchData() {
        tutorInfoQueryBrowseInit({ 'session': document.cookie }).then(res => {
          this.collegeList = res.data.collegeList
          this.collegeId = res.data.collegeId
          this.tutors=res.data.tutors
        })
      },
      doQuery(){
        tutorEngInfoQueryBrowseQuery({ 'session': document.cookie, 'collegeId': this.collegeId,
          'research': this.research, 'perName': this.perName
        }).then(res => {
          this.tutors = res.data
        })
      },
      showPersonInfo(personId){
        this.$router.push({ name: 'showTutorInfo', params: { personId }})
      }
    }
  }
</script>

<style scoped>
  .allBtn{
    background-color: #A50001;
    color: #ffffff;
    border: 0px;
  }
  .colstyle1,.colstyle2{
    font-size: 12px;
    text-align: center;
    height: 30px;
  }
  .colstyle1{
    color: #909399;
    max-height: 60px;
    font-weight: bold;

  }
  .colstyle2{
    color: #606266;
  }
  .content{
    width:100%;
    border-top: 1px solid #EBEEF5;
    border-left: 1px solid #EBEEF5;
    border-spacing: 0;/*去掉单元格间隙*/
    margin-top: 15px;
  }
  .content td {
    padding: 10px 25px;
    border-bottom: 1px solid #EBEEF5;
    border-right: 1px solid #EBEEF5;
  }
  .titlable{
    text-align: center;
    color: #A50001;
    font-size: 16px;
  }
  .style2{
    color: black;
    font-size: 22px;
    font-weight: bold;
  }
  .leftsidespan{
    align:center;
    width:13%;
    font-size: 12px;
    color: #909399;
    letter-spacing:2px;
  }
  .rightsidespan{
    align:center;
    font-size: 12px;
    color: #606266;
    letter-spacing:3px;
    text-indent:30px;
    line-height: 18px;
  }
  .part_bottom_1{
    font-size: 12px;
    text-align: center;
    color: #909399;
  }
  .part_bottom_2{
    font-size: 12px;
    text-align: center;
    color: #606266;
  }
  .news{
    float:left;
  }
</style>
