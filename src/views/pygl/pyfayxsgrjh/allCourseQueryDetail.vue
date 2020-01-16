<template>
  <div class="app-container">

    <table class="content" width="100%">
      <tbody>
        <tr>
          <td width="15%" class="colstyle1">{{ $t('CourseQuery.creator') }}</td>
          <td width="20%" class="colstyle2" >{{$t(list.creatorName)}}</td>
          <td width="20%" class="colstyle1">{{ $t('CourseQuery.college1') }}</td>
          <td width="20%" class="colstyle2" >{{list.collegeName}}</td>
          <td width="10%" class="colstyle1">{{ $t('CourseQuery.courseType') }}</td>
          <td width="25%" class="colstyle2" >{{$t(list.courseAttribute)}}</td>
        </tr>
        <tr>
          <td class="colstyle1">{{ $t('CourseQuery.courseName') }}</td>
          <td class="colstyle2" >{{$t(list.courseName)}}</td>
          <td class="colstyle1">{{ $t('CourseQuery.semester') }}</td>
          <td class="colstyle2" >{{$t(list.termCode)}}</td>
          <td class="colstyle1">{{ $t('CourseQuery.college3') }}</td>
          <td class="colstyle2" >{{list.collegeName}}</td>
        </tr>
        <tr>
          <td class="colstyle1">{{ $t('CourseQuery.courseProperty') }}</td>
          <td class="colstyle2" >{{$t(list.courseAttribute)}}</td>
          <td class="colstyle1">{{ $t('CourseQuery.teachingWays') }}</td>
          <td class="colstyle2" >{{$t(list.teachingWay)}}</td>
          <td class="colstyle1">{{ $t('CourseQuery.examWays') }}</td>
          <td class="colstyle2" >{{$t(list.examType)}}</td>
        </tr>
        <tr>
          <td class="colstyle1">{{ $t('CourseQuery.CoursePerson') }}</td>
          <td class="colstyle2" >{{$t(list.managerName)}} </td>
          <td class="colstyle1">{{ $t('CourseQuery.TypeForStu') }}</td>
          <td class="colstyle2" > {{$t(list.basicFaceCode)}}</td>
        </tr>
      </tbody>
    </table>
    <table class="content" width="100%">
      <tbody>
        <tr>
          <td class="colstyle1" width="10%">{{$t('CourseQuery.courseStatement')}}</td>
          <td  style=" color: #606266;">{{$t(list.subSpec)}} </td>
        </tr>
        <tr>
          <td class="colstyle1" width="10%">{{$t('CourseQuery.courseIntroduction')}}</td>
          <td style=" color: #606266;">{{$t(list.briefIntroduction)}} </td>
        </tr>
      </tbody>
    </table>
  </div>

</template>

<script>
import { newCultivateCourseDetail } from '@/api/allCourseQuery.js'
export default {
  name: 'AllCourseQueryDetail',
  data() {
    return {
      loading: false,
      post: null,
      error: null,
      list: [],
      courseId: ''
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
      this.courseId = this.$route.params.courseId
      this.error = this.post = null
      this.loading = true
      newCultivateCourseDetail({ 'courseId': this.$route.params.courseId }, (err, post) => {
        this.loading = false
        if (err) {
          this.error = err.toString()
        } else {
          this.post = post
        }
      }).then(res => {
        this.list = res.data
      }, function(err) {
        console.log(err)
      }
      )
    }
  }
}
</script>

<style scoped>
  .colstyle1,.colstyle2{
    font-size: 13px;
    text-align: center;
    height: 30px;
  }
  .colstyle1{
    color: #909399;
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
    padding: 10px 30px;
    border-bottom: 1px solid #EBEEF5;
    border-right: 1px solid #EBEEF5;
  }

</style>
