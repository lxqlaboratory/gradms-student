<template>
  <div class="container">
    <table class="content" width="100%">
      <tbody>
        <tr>
          <td width="10%" class="colstyle1">创建者</td>
          <td width="25%" class="colstyle2"> {{ list.perName }}</td>
          <td width="10%" class="colstyle1">所属学院</td>
          <td width="20%" class="colstyle2">{{ list.perNum }}</td>
          <td width="10%" class="colstyle1">课程类别</td>
          <td width="25%" class="colstyle2">{{ $t(list.stuTypeCode) }}</td>
        </tr>
        <tr>
          <td class="colstyle1">课程名</td>
          <td class="colstyle2">{{ $t(list.college) }}</td>
          <td class="colstyle1">课程英文名</td>
          <td class="colstyle2">{{ $t(list.major) }}</td>
          <td class="colstyle1">开课学院</td>
          <td class="colstyle2">{{ $t(list.tutor) }}</td>
        </tr>
        <tr>
          <td class="colstyle1">开课学期</td>
          <td class="colstyle2">{{ $t(list.thesisTopic) }}</td>
          <td class="colstyle1">总学时</td>
          <td class="colstyle2">{{ list.answerTime }}</td>
          <td class="colstyle1"> 学分</td>
          <td class="colstyle2">{{ list.answerPlace }}</td>
        </tr>
        <tr>
          <td class="colstyle1">讲课学时</td>
          <td class="colstyle2">{{ $t(list.thesisTopic) }}</td>
          <td class="colstyle1">实验课学时</td>
          <td class="colstyle2">{{ list.answerTime }}</td>
          <td class="colstyle1"> 上机学时</td>
          <td class="colstyle2">{{ list.answerPlace }}</td>
        </tr>
        <tr>
          <td class="colstyle1">课程属性</td>
          <td class="colstyle2">{{ $t(list.thesisTopic) }}</td>
          <td class="colstyle1">教学方式</td>
          <td class="colstyle2">{{ list.answerTime }}</td>
          <td class="colstyle1"> 授课语言</td>
          <td class="colstyle2">{{ list.answerPlace }}</td>
        </tr>
        <tr>
          <td class="colstyle1">学期持续数</td>
          <td class="colstyle2">{{ $t(list.thesisTopic) }}</td>
          <td class="colstyle1">考试方式</td>
          <td class="colstyle2">{{ list.answerTime }}</td>
          <td class="colstyle1"> 成绩配置</td>
          <td class="colstyle2">{{ list.answerPlace }}</td>
        </tr>
        <tr>
          <td class="colstyle1">课程负责人</td>
          <td class="colstyle2">{{ $t(list.thesisTopic) }}</td>
          <td class="colstyle1">面向学生类型</td>
          <td class="colstyle2">{{ list.answerTime }}</td>
          <td class="colstyle1"> 申请课程类型	</td>
          <td class="colstyle2">{{ list.answerPlace }}</td>
        </tr>
        <tr>
          <td>其他</td>
          <td />
        </tr>
        <tr>
          <td>备注</td>
          <td />
        </tr>
      </tbody>
    </table>
  </div>

</template>

<script>
import { courseQueryInfo } from '@/api/courseQueryInfo'
export default {
  data() {
    return {

    }
  },

  created() {
    this.fetchData()
  },
  methods: {
    fetchData() {
      courseQueryInfo().then(res => {

      })
    }
  }

}
</script>

<style scoped>
  .colstyle1,.colstyle2{
    font-size: 12px;
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
