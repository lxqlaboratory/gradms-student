<template>
  <div v-if="message" class="app-container">
    <table cellspacing="0" width="100%">
      <tbody>
        <tr><td colspan="11">
          <font color="#9b0d14" style="font-size: 12px">
            {{$t('statement.discript')}}：
            <br> *  1. {{$t('statement.note1')}}
            <br>*  2. {{$t('statement.note2')}}
            <br> *  3. {{$t('statement.note3')}}
            <br> *  4. {{$t('statement.note4')}}
            <br> *  5. {{$t('statement.note5')}}
          </font>
        </td>
        </tr>
        <tr>
          <td align="center" colspan="3" style="color: #9b0d14;font-size: 12px ">
            {{$t('statement.note')}}
          </td>
        </tr>
      </tbody></table>

    <table cellspacing="0" width="100%">
      <tbody><tr>
               <td class="colstyle1" style="text-align: center;width: 30%">
                 {{ $t('baseInformationModal.name') }}
               </td>
               <td class="colstyle1" style="text-align: center;width: 30%">
                 {{ $t('baseInformationModal.studentNumber') }}
               </td>
               <td class="colstyle1" style="text-align: center;width: 30%">
                 {{ $t('CourseQuery.Whether') }}
               </td>
             </tr>
        <tr>
          <td class="colstyle2" style="text-align: center;width: 30%">
            {{ $t(perNum) }}
          </td>
          <td class="colstyle2" style="text-align: center;width: 30%">
            {{ $t(perName) }}
          </td>
          <td class="colstyle2" style="text-align: center;width: 30%">
            {{ $t('CourseQuery.Whether2') }}
          </td>
        </tr>
      </tbody>
    </table>
    <table cellspacing="0" width="100%">
      <tbody><tr>
        <td style="text-align:center">
          <el-button style="background-color:#A50001;color: #ffffff " size="mini" @click="degreeGradApplySubmit">{{$t('route.submit')}}</el-button>
        </td>
      </tr>
      </tbody>
    </table>
  </div>
  <div v-else class="app-container">
    <div style="color: #9b0d14">
      {{$t('tjbysq.byzt')}}
    </div>
  </div>
</template>

<script>
import { degreeGradApplyInit } from '@/api/degreeGradApply'
import { degreeGradApplyInsert } from '@/api/degreeGradApply'
export default {
  data() {
    return {
      list: [],
      perName: '',
      perNum: '',
      message: true
    }
  },
  created() {
    this.fetchData()
  },
  methods: {
    fetchData() {
      degreeGradApplyInit().then(res => {
        if (res.code == 1) {
          this.message = false
        } else {
          this.message = true
          this.perName = res.data.perName
          this.perNum = res.data.perNum
        }
      })
    },
    degreeGradApplySubmit() {
      degreeGradApplyInsert().then(res => {
        if (res.msg === '提交成功,不可在申请，可在查看毕业及学位状态功能查看自己的状态') {
          this.$message({
            message: '提交成功,不可在申请，可在查看毕业及学位状态功能查看自己的状态',
            type: 'success'
          })
        } else if (res.msg === '您已提交毕业申请，不能再提交') {
          this.$message({
            message: '您已提交毕业申请，不能再提交',
            type: 'error'
          })
        } else {
          this.$message({
            message: '学院审核已通过，不能再提交',
            type: 'error'
          })
        }
      }).catch(e => {

      })
    }
  }
}
</script>

<style scoped>
  td{
    height:3em;
    padding:5px;
    border:1px solid #f4f4f5;
  }
  td input{
    box-sizing: border-box;
    margin: 0 !important;
    padding: 2px;
    border: none;
  }
  .colstyle1{
    height: 25px;
    color: #909399;
    font-weight: bold;
  }
  .colstyle2{
    height: 25px;
    color: #606266;
  }
</style>
