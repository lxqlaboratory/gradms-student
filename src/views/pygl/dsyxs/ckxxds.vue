<template>
  <div class="app-container">
    <div class="query-container" >
      {{ $t('browseSchoolTutor.type') }}:
      <el-select v-model="memberType" placeholder="please choose" >
        <el-option
          v-for="item in typeList"
          :key="item.memberType"
          :label="$t(item.memberName)"
          :value="item.memberType">
        </el-option>
      </el-select>
      <el-button  type="primary" @click="doQuery">{{ $t('browseSchoolTutor.query') }}</el-button>
    </div>

    <div class="table-container">
      <el-table
        :data="tutorList"
        border
        style="width: 100%;"
        size="mini"
      >
        <el-table-column
          :label="$t('browseSchoolTutor.number')"
          fixed="left"
          width="50"
          align="center"
          color="black"
        >
          <template slot-scope="scope">
            {{ scope.$index+1 }}
          </template>
        </el-table-column>
        <el-table-column
          :label="$t('browseSchoolTutor.perNum')"
          fixed="left"
          width="105"
          align="center"
          color="black"
        >
          <template slot-scope="scope">
            {{ scope.row.perNum }}
          </template>
        </el-table-column>

        <el-table-column
          :label="$t('browseSchoolTutor.perName')"
          align="center"
          color="black"
          width="130"
        >
          <template slot-scope="scope">
            <el-button type="text" @click="showPersonInfo(scope.row.personId)">{{ $t(scope.row.perName)}}</el-button>
          </template>
        </el-table-column>
        <el-table-column
          :label="$t('browseSchoolTutor.school')"
          align="center"
          color="black"
          width="140"
        >
          <template slot-scope="scope">
            {{ $t(scope.row.collegeName) }}
          </template>
        </el-table-column>
        <el-table-column
          :label="$t('browseSchoolTutor.title')"
          align="center"
          color="black"
          width="80"
        >
          <template slot-scope="scope">
            {{ $t(scope.row.proTechPositionName) }}
          </template>
        </el-table-column>
        <el-table-column
          :label="$t('browseSchoolTutor.tutorType')"
          align="center"
          color="black"
          width="80"
        >
          <template slot-scope="scope">
            {{ $t(scope.row.tutorType) }}
          </template>
        </el-table-column>
        <el-table-column
          :label="$t('browseSchoolTutor.majorName')"
          align="center"
          color="black"
        >
          <template slot-scope="scope">
            {{ $t(scope.row.majorName) }}
          </template>
        </el-table-column>
        <el-table-column
          :label="$t('browseSchoolTutor.researchDirection')"
          align="center"
          color="black"
        >
          <template slot-scope="scope">
            {{ $t(scope.row.researchDirection) }}
          </template>
        </el-table-column>
        <el-table-column
          :label="$t('browseSchoolTutor.sex')"
          align="center"
          color="black"
        >
          <template slot-scope="scope">
            {{ $t(scope.row.genderName) }}
          </template>
        </el-table-column>
        <el-table-column
          :label="$t('browseSchoolTutor.age')"
          align="center"
          color="black"
        >
          <template slot-scope="scope">
            {{ $t(scope.row.age) }}
          </template>
        </el-table-column>
        <el-table-column
          :label="$t('browseSchoolTutor.degree')"
          align="center"
          color="black"
        >
          <template slot-scope="scope">
            {{ $t(scope.row.lastDegre) }}
          </template>
        </el-table-column>
        <el-table-column
          :label="$t('browseSchoolTutor.email')"
          align="center"
          color="black"
          width="120"
        >
          <template slot-scope="scope">
            {{ $t(scope.row.email) }}
          </template>
        </el-table-column>
        <el-table-column
          :label="$t('browseSchoolTutor.doctoralStudent')"
          align="center"
          color="black"
        >
          <template slot-scope="scope">
            {{ $t(scope.row.docNum)}}
          </template>
        </el-table-column>
        <el-table-column
          :label="$t('browseSchoolTutor.masterStudent')"
          align="center"
          color="black"
        >
          <template slot-scope="scope">
            {{ $t(scope.row.masNum)}}
          </template>
        </el-table-column>
        <el-table-column
          :label="$t('browseSchoolTutor.applicationNumber')"
          align="center"
          color="black"
        >
          <template slot-scope="scope">
            {{ $t(scope.row.applyNum) }}
          </template>
        </el-table-column>
      </el-table>
    </div>
  </div>
</template>
<script>
  import { studentViewCollegeTutor} from '@/api/tutor'
  import { tutorEngInfoQueryBrowseQuery} from '@/api/tutor'
  export default {
    data() {
      return {
        memberType:-1,
        research:'',
        perName:'',
        typeList:[],
        tutorList:[]
      }
    },
    created() {
      this.fetchData()
    },
    methods: {
      fetchData() {
        studentViewCollegeTutor({ 'session': document.cookie }).then(res => {
          this.typeList = res.data.typeList
          this.memberType = res.data.memberType
          this.tutorList = res.data.tutorList
        })
      },
      doQuery(){
        tutorInfoQueryBrowseQuery({ 'session': document.cookie, 'collegeId': this.collegeId,
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

