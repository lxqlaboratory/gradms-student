<template>
  <div class="container">
    <!--第一部分-->
    <div>
      <!--第一行-->
      <el-row>
        <p style="color: #A50001;margin: 12px;font-size: 16px">{{ $t('cultivatingSchemeInfo.cultivatingSchemeDetail') }}</p>
      </el-row>
      <!--第二行-->
      <el-row>
        <p style="margin: 12px;text-align:left;font-size: 14px">{{ $t('cultivatingSchemeInfo.basicInfomation') }}</p>
      </el-row>
      <!--第三行-->
      <el-row>
        <el-col :span="4" class="colstyle1">
          <span>{{ $t('cultivatingScheme.studentType') }}</span>
        </el-col>
        <el-col :span="8" class="colstyle2">
          <span>{{ $t(detail.studentType) }}</span>
        </el-col>
        <el-col :span="4" class="colstyle3">
          <span>{{ $t('cultivatingScheme.major') }}</span>
        </el-col>
        <el-col :span="8"class="colstyle4">
          <span>{{ $t(detail.majorName) }}</span>
        </el-col>
      </el-row>
      <!--第四行-->
      <el-row>
        <el-col :span="4" class="colstyle1">
          <span>{{ $t('cultivatingScheme.schemeName') }}</span>
        </el-col>
        <el-col :span="8" class="colstyle2">
          <span>{{ $t(detail.schemeName) }}</span>
        </el-col>
        <el-col :span="4" class="colstyle3">
          <span>{{ $t('cultivatingScheme.startTime') }}</span>
        </el-col>
        <el-col :span="8" class="colstyle4">
          <span>{{ detail.startTime }}</span>
        </el-col>
      </el-row>
      <!--第五行-->
      <el-row style="border-bottom: 1px solid #EBEEF5">
        <el-col :span="4" class="colstyle1">
          <span>{{ $t('cultivatingScheme.compulsoryCredit') }}</span>
        </el-col>
        <el-col :span="8" class="colstyle2">
          <span>{{ detail.compulsoryCredit }}</span>
        </el-col>
        <el-col :span="4" class="colstyle3">
          <span>{{ $t('cultivatingScheme.totalCredit') }}</span>
        </el-col>
        <el-col :span="8" class="colstyle4">
          <span>{{ detail.totalCredit }}</span>
        </el-col>
      </el-row>
    </div>
    <!--第二部分-->
    <div class="part2">
      <el-row>
        <p style="margin: 12px;font-size: 14px">{{ $t('cultivatingScheme.cultivatingObj') }}</p>
      </el-row>
      <el-row>
        <span class="infoSpan">{{ detail.goal }}</span>
      </el-row>
      <el-row>
        <p style="margin: 12px;font-size: 14px">{{ $t('cultivatingScheme.researchDirection') }}</p>
      </el-row>
      <el-row>
        <span class="infoSpan">{{ detail.direction }}</span>
      </el-row>
      <el-row>
        <p style="margin: 12px;font-size: 14px">{{ $t('cultivatingScheme.cultivatingMeans') }}</p>
      </el-row>
      <el-row>
        <span class="infoSpan">{{ detail.culWay }}</span>
      </el-row>
      <el-row>
        <p style="margin: 12px;font-size: 14px">{{ $t('cultivatingScheme.studyYear') }}</p>
      </el-row>
      <el-row>
        <span class="infoSpan">{{ detail.studyYears }}</span>
      </el-row>
      <el-row>
        <p style="margin: 12px;font-size: 14px">{{ $t('cultivatingScheme.totalCreditAndCourse') }}</p>
      </el-row>
      <el-row>
        <span class="infoSpan">{{ detail.creditReq }}+{{ detail.middleCheck }}</span>
      </el-row>
      <el-row>
        <p style="margin: 12px;font-size: 14px">{{ $t('cultivatingScheme.cultivatingStep') }}</p>
      </el-row>
      <el-row>
        <span class="infoSpan">{{ detail.practice }}</span>
      </el-row>
      <el-row>
        <p style="margin: 12px;font-size: 14px">{{ $t('cultivatingScheme.researchandDissertation') }}</p>
      </el-row>
      <el-row>
        <span class="infoSpan">{{ detail.thesis }}</span>
      </el-row>
      <el-row>
        <p style="margin: 12px;font-size: 14px">{{ $t('cultivatingScheme.graduationAndDegree') }}</p>
      </el-row>
      <el-row style="border-bottom: 1px solid #EBEEF5">
        <span class="infoSpan">{{ detail.gradDegree }}</span>
      </el-row>
    </div>
    <!--第三部分-->
    <div class="part3">
      <el-button type="text" style="color:#A50001;font-size: 12px " @click="showCourse">{{$t('cultivatingSchemeQuery.fulu')}}</el-button><br>
    </div>
  </div>

</template>

<script>
import { showCultivate } from '@/api/cultivationInquiry'
export default {
  data() {
    return {
      loading: false,
      post: null,
      error: null,
      schemeId: '',
      detail: []
    }
  },
  watch: {
    '$route': 'fetchData'
  },
  created() {
    this.fetchData()
  },
  methods: {
    fetchData() {
      this.error = this.post = null
      this.loading = true
      this.schemeId = this.$route.params.id
      this.studentType = this.$route.params.studentType
      showCultivate({ 'schemeId': this.$route.params.id, 'studentType': this.$route.params.studentType }, (err, post) => {
        this.loading = false
        if (err) {
          this.error = err.toString()
        } else {
          this.post = post
        }
      }).then(res => {
        this.detail = res.data
        console.log(this.detail.schemeName)
        this.detail.majorName = this.$route.params.majorName
      }, function(err) {

      }
      )
    },

    showCourse(schemeId) {
      schemeId = this.schemeId
      this.$router.push({ name: 'showCourse', params: { schemeId }})
    }
  }
}

</script>

<style scoped>
  .container{
    margin-left: 20px;
    margin-right: 20px;
    margin-bottom: 30px;
  }
  .el-row{
    border: 1px solid #EBEEF5;
    border-bottom:1px solid #FFF;
    height: 40px;
    text-align: center;
    vertical-align: middle;
    padding: 0px;
    font-size: 12px;
  }
  .el-row p{
    font-weight:bold;
    color: #000000;
  }
  .colstyle1,.colstyle2,.colstyle3,.colstyle4{
    height: 100%;
    font-size: 12px;
    padding-top: 14px;
  }
  .colstyle1,.colstyle2,.colstyle3{
    border-right: 1px solid #EBEEF5;
  }
  .colstyle2,.colstyle4 span{
    color: #606266;
    font-size: 12px;
  }
  .colstyle1,.colstyle3{
    font-weight:bold;
    color: #909399;
  }
  .part2{
    margin-top: 20px;
  }
  .part2 .el-row{
    text-align: left;
    color: #606266;
    height: auto;
  }
  .part2 .el-row span{
    font-size: 14px;
    display: inline-block;
    margin: 6px;
  }
  .part3{
    margin-top: 20px;
    margin-bottom: 40px;
    padding-left: 20px;
  }
  .infoSpan{
    letter-spacing:1px;
    text-indent:30px;
    line-height: 18px;
    margin: 12px;
    font-size: 12px !important;
  }
</style>
