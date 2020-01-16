<template>
  <div class="container">
    <table class="content">
      <tr>
        <td colspan="8" class="titleSpan">论文信息添加</td>
      </tr>
      <tr>
        <td class="colspan1">备注</td>
        <td class="colspan2">
          <el-input
            v-model="attachRemark"
            class="elinput"
            type="textarea"
            placeholder="请输入内容"
            maxlength="300"
            rows="5"
            show-word-limit
          />
        </td>
      </tr>
      <tr>
        <td colspan="8"><el-button class="submitBtn" size="mini" @click="submitThesisRemark">提交</el-button>
        </td>
      </tr>
    </table>
  </div>
</template>

<script>
  import { getAchievementWordTypeRemarkInit } from '@/api/getAchievementWordType'
  import { saveAchievementWordTypeRemark } from '@/api/getAchievementWordType'
  export default {
    data() {
      return {
        loading: false,
        post: null,
        error: null,
        achwtId: '',
        attachRemark: ''
      }
    },
    watch: {
      '$route': 'fetchData'
    },
    created() {
      this.fetchData()
    },
    methods: {
      fetchData: function() {
        getAchievementWordTypeRemarkInit({ 'achwtId': this.$route.params.achwtId }, (err, post) => {
          this.loading = false
          if (err) {
            this.error = err.toString()
          } else {
            this.post = post
          }
        }).then(res => {
            this.attachRemark = res.data.attachRemark
            this.achwtId = res.data.achwtId
          }
        )
      },
      submitThesisRemark() {
        saveAchievementWordTypeRemark({ 'achwtId': this.achwtId, 'attachRemark': this.attachRemark }).then(res => {
          this.$router.push({ path: './publishThesis' })
        })
      }

    }
  }
</script>

<style scoped>
  .container{
    margin:20px;
  }
  .titleSpan{
    font-size: 16px;
    color: #A50001;
    font-weight: bold;
  }
  .content{
    width:100%;
    border-top: 1px solid #EBEEF5;
    border-left: 1px solid #EBEEF5;
    border-spacing: 0;/*去掉单元格间隙*/
    margin-top: 15px;
    margin-bottom: 15px;
  }
  .content tr{
    width:100%;
  }
  .content td {
    padding: 10px 20px;
    border-bottom: 1px solid #EBEEF5;
    border-right: 1px solid #EBEEF5;
    text-align: center;
    font-size: 12px;
  }
  .colspan1{
    color: #909399;
    font-weight: bold;
    width : 30%;
  }
  .colspan2{
    color:  #606266;
    width: 70%;
    text-align:left !important;
  }
  .elinput{
    border: 1px solid #EBEEF5;
    border-radius: 4px;
    outline: none;
    width: 70%;
    line-height: 18px;
    color:  #606266;
    font-size: 12px;
  }
  .submitBtn{
    background-color: #A50001;
    border: none;
    color: #ffffff;
  }
  .noticeSpan{
    font-size: 12px;
    color: #A50001;
  }
</style>
