<template>
  <div class="container">
    <table class="content">
      <tr>
        <td colspan="8" class="titleSpan">{{$t('paperInfoAdd.paperInfoAdd')}}</td>
      </tr>
      <tr>
        <td  class="colspan1">{{$t('paperInfoAdd.thesisName')}}</td>
        <td  class="colspan2"><el-input v-model="formData.achName" type="text" size="mini" class="elinput"></el-input></td>
      </tr>

      <tr>
        <td  class="colspan1">{{$t('paperInfoAdd.periodical')}}</td>
        <td  class="colspan2"><el-input v-model="formData.magazineName" type="text" size="mini" class="elinput"></el-input></td>
      </tr>
      <tr>
        <td  class="colspan1">{{$t('paperInfoAdd.publicationNumber')}}</td>
        <td  class="colspan2">
          <el-input v-model="formData.pubNum" type="text"  size="mini" class="elinput"></el-input>
          <span class="noticeSpan">{{$t('paperInfoAdd.note')}}</span>
        </td>
      </tr>
      <tr>
        <td  class="colspan1">{{$t('paperInfoAdd.thesisClass')}}</td>
        <td  class="colspan2">
          <el-select v-model="formData.levelCode"  size="mini" class="elinput">
            <el-option
              v-for="item in levelCodeList"
              :key="item.value"
              :label="$t(item.name)"
              :value="item.value">
            </el-option>
          </el-select>
        </td>
      </tr>
      <tr>
        <td  class="colspan1">{{$t('paperInfoAdd.factor')}}</td>
        <td  class="colspan2">
          <el-input v-model="formData.impactFactor" type="text" size="mini" class="elinput"></el-input>
          <span class="noticeSpan">{{$t('paperInfoAdd.note')}}</span>
        </td>
      </tr>
      <tr>
        <td  class="colspan1">{{$t('paperInfoAdd.publicationTime')}}</td>
        <td  class="colspan2">
          <el-date-picker
            v-model="formData.useTime"
            class="elinput"
            type="date"
            size="mini"
            value-format="yyyy-MM-dd">
          </el-date-picker>
        </td>
      </tr>
      <tr>
        <td  class="colspan1">{{$t('paperInfoAdd.authorRank')}}</td>
        <td  class="colspan2">
          <el-select v-model="formData.orderCode"  size="mini" class="elinput">
            <el-option
              v-for="item in orderCodeArr"
              :key="item.value"
              :label="$t(item.name)"
              :value="item.value">
            </el-option>
          </el-select>
        </td>
      </tr>
      <tr>
        <td  class="colspan1">{{$t('paperInfoAdd.volume')}} </td>
        <td  class="colspan2">
          <el-input v-model="formData.publishTome" type="text"  size="mini" class="elinput"></el-input>
          <span class="noticeSpan">{{$t('paperInfoAdd.note')}}</span>
        </td>
      </tr>
      <tr>
        <td  class="colspan1">{{$t('paperInfoAdd.series')}}</td>
        <td  class="colspan2">
          <el-input v-model="formData.publishVolumn" type="text" size="mini" class="elinput"></el-input>
          <span class="noticeSpan">{{$t('paperInfoAdd.note')}}</span>
        </td>
      </tr>
      <tr>
        <td  class="colspan1">{{$t('paperInfoAdd.startPage')}}</td>
        <td  class="colspan2"><el-input v-model="formData.beginPage" type="text" size="mini" class="elinput"></el-input></td>
      </tr>
      <tr>
        <td  class="colspan1">{{$t('paperInfoAdd.endPage')}} </td>
        <td  class="colspan2"><el-input v-model="formData.endPage" type="text"  size="mini" class="elinput"></el-input></td>
      </tr>
      <tr>
        <td  class="colspan1">{{$t('paperInfoAdd.CollectingWays')}}</td>
        <td  class="colspan2">
          <el-select v-model="formData.include"  size="mini" class="elinput">
            <el-option
              v-for="item in includeList"
              :key="item.value"
              :label="$t(item.name)"
              :value="item.value">
            </el-option>
          </el-select>
        </td>
      </tr>
      <tr>
        <td  class="colspan1">{{$t('paperInfoAdd.enterEI')}}</td>
        <td  class="colspan2">
          <el-input v-model="formData.inputEIIndexNum" type="text" size="mini" class="elinput"></el-input>
          <span class="noticeSpan">{{$t('paperInfoAdd.note')}}</span>
        </td>
      </tr>
      <tr>
        <td class="colspan1">{{$t('paperInfoAdd.remark')}}</td>
        <td class="colspan2">
          <el-input
          v-model="formData.attachRemark"
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
        <td colspan="8"><el-button class="submitBtn" size="mini" @click="addThesis()">{{$t('FilesDirectory.Submit')}}</el-button></td>
      </tr>
    </table>
  </div>
</template>

<script>
  //  学生上传论文
  import { saveAchievementWordTypeInfo } from '@/api/getAchievementWordType'
  import { getAchievementWordTypeInfoInitList } from '@/api/getAchievementWordType'
  import { getAchievementWordTypeInfoInitById } from '@/api/getAchievementWordType'
  export default {
    data(){
      return{
        formData:{
          achName: '' ,
          magazineName: '' ,//刊物名称
          pubNum: '' ,//发表刊物编号
          levelCode: '' ,//论文级别
          impactFactor: '' ,//影响因子
          useTime: '' ,//出版日期
          orderCode:'' ,//作者位次
          publishTome: '' ,//
          publishVolumn: '' ,//
          beginPage: '' ,//起始页
          endPage: '' ,//终止页
          include: '' ,//收录情况 论文收录方式码
          inputEIIndexNum: '' ,//录入EI检索号
          attachRemark:''//备注
        },
        levelCodeList: [],
        includeList : [],
        orderCodeArr : [{
          value : '1',
          name : '第一位'
        },{
          value : '2',
          name : '第二位'
        }]
      }
    },
    watch: {
      '$route': 'fetchData'
    },
    created() {
        this.fetchData()
    },
    methods: {
      fetchData(){
        getAchievementWordTypeInfoInitList().then(res => {
            this.includeList = res.data.includeList
            this.levelCodeList = res.data.levelCodeList
        }),
        getAchievementWordTypeInfoInitById({ 'achwtId': this.$route.params.achwtId }, (err, post) => {
          this.loading = false
          if (err) {
            this.error = err.toString()
          } else {
            this.post = post
          }
        }).then(res => {
            this.formData = res.data.form
          }
        )
      },
      addThesis(){
        this.formData.orderCode = parseInt(this.formData.orderCode)
        saveAchievementWordTypeInfo(this.formData).then(res => {
          this.$message({
            type: 'info',
            message: '提交成功'
          });
          this.$router.push({ path: './publishThesis'})
        })
      },

    }
  }
</script>

<style scoped>
  .container{
    margin:20px;
  }
  .titleSpan{
    font-size: 15px !important;
    color: #A50001;
    font-weight: bold;
  }
  .noticeSpan{
    font-size: 12px;
    color: #A50001;
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
</style>
