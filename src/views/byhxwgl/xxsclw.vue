<template>
  <div class="container">
    <a  style="position: fixed;z-index:-1;top: 0;left: 0;" ref="temp8" :href="'/gradms/api/base/getBytesBufferDataByDataKey?dataKey='+this.dataKey" download="xwlwzg.pdf"></a>
    <p class="noticeSpan" style="border: 1px solid #EBEEF5;">{{$t('uploadThesisPaper.note')}}
      <br>{{$t('uploadThesisPaper.note1')}}
      <br>{{$t('uploadThesisPaper.note2')}}
    </p>
    <div>
      <table class="content">
        <tr>
          <td class="colspan1">{{$t('uploadThesisPaper.studentNum')}}</td>
          <td class="colspan2"><el-input v-model="formData.setStuNum" size="mini" class="elinput2" disabled></el-input></td>
          <td class="colspan1">{{$t('uploadThesisPaper.name')}}</td>
          <td class="colspan2"><el-input v-model="formData.setStuName" size="mini" class="elinput2"></el-input></td>
          <td class="colspan1">{{$t('uploadThesisPaper.language')}}</td>
          <td class="colspan2">
            <el-select v-model="formData.setThesisLanguageKind"  size="mini" class="elinput2">
              <el-option
                v-for="item in languageKinds"
                :key="item.value"
                :label="item.label"
                :value="item.value">
              </el-option>
            </el-select>
          </td>
          <td class="colspan1">{{$t('uploadThesisPaper.typeNum')}}	</td>
          <td class="colspan2"><el-input v-model="formData.setThesisClassNumber" size="mini" class="elinput2"></el-input></td>
        </tr>
        <tr>
          <td colspan="2" class="colspan1">{{$t('uploadThesisPaper.theisTitle')}}</td>
          <td colspan="6" class="colspan2"><el-input v-model="formData.setThesisName" type="text" size="mini" class="elinput"></el-input></td>
        </tr>
        <tr>
          <td colspan="2" class="colspan1">{{$t('uploadThesisPaper.foreignTitle')}}</td>
          <td colspan="6" class="colspan2"><el-input v-model="formData.setThesisEngName" type="text" size="mini" class="elinput"></el-input></td>
        </tr>
        <tr>
          <td colspan="2" class="colspan1">{{$t('uploadThesisPaper.researchDirection')}}</td>
          <td colspan="6" class="colspan2"><el-input v-model="formData.setResearchWay" type="text" size="mini" class="elinput"></el-input></td>
        </tr>
        <tr>
          <td colspan="2" class="colspan1">{{$t('uploadThesisPaper.ChineseKeyWords')}}</td>
          <td colspan="6" class="colspan2"><el-input  type="text"  size="mini" class="elinput"></el-input></td>
        </tr>
        <tr>
          <td colspan="2" class="colspan1">{{$t('uploadThesisPaper.EnglishKeyWords')}}</td>
          <td colspan="6" class="colspan2"><el-input v-model="formData.setEnglishTheme" type="text" size="mini" class="elinput"></el-input></td>
        </tr>
        <tr>
          <td colspan="2" class="colspan1">{{$t('uploadThesisPaper.ChineseAbstract')}}</td>
          <td colspan="6" class="colspan2">
            <el-input
              class="elinput"
              type="textarea"
              v-model="formData.setChineseAbstract"
              maxlength="100"
              rows="4"
              show-word-limit
            >
            </el-input>
          </td>
        </tr>
        <tr>
          <td colspan="2" class="colspan1">{{$t('uploadThesisPaper.EnglilshAbstract')}}</td>
          <td colspan="6" class="colspan2">
            <el-input
              class="elinput"
              type="textarea"
              v-model="formData.setEnglishAbstract"
              maxlength="100"
              rows="4"
              show-word-limit
            >
            </el-input>
          </td>
        </tr>
        <tr>
          <td colspan="2" class="colspan1">{{$t('uploadThesisPaper.reference')}}</td>
          <td colspan="6" class="colspan2">
            <el-input
              class="elinput"
              type="textarea"
              v-model="formData.setThesisReference"
              maxlength="100"
              rows="4"
              show-word-limit
            >
            </el-input>
          </td>
        </tr>
        <tr>
          <td colspan="8" align="center">
            <el-button class="allBtn" size="mini" @click="modifyBtn">{{$t('uploadThesisPaper.modifyAndSave')}}</el-button>
          </td>
        </tr>
      </table>
      <table class="content">
        <tr>
          <td colspan="8" class="noticeSpan">{{$t('uploadThesisPaper.note3')}}</td>
        </tr>
        <tr>
          <td colspan="8" style="text-align: center;font-size: 15px;font-weight: bold">{{$t('uploadThesisPaper.degreeTheisFinal')}}</td>
        </tr>
        <tr>
          <td width="25%" class="colspan1">{{$t('uploadThesisPaper.uploadingResult')}}</td>
          <td width="75%" class="colspan2" ><el-input v-model="formData.setStatus" size="mini" class="elinput" disabled></el-input></td>
        </tr>
        <tr>
          <td width="25%" class="colspan1">{{$t('uploadThesisPaper.reviewingResult')}}</td>
          <td width="75%" class="colspan2" ><el-input v-model="formData.setContentCheckState" size="mini" class="elinput" disabled></el-input></td>
        </tr>
        <tr>
          <td width="25%" class="colspan1">{{$t('uploadThesisPaper.reviewingAdvice')}}</td>
          <td width="75%" class="colspan2" ><el-input v-model="formData.setDuplicateCheckState" size="mini" class="elinput" disabled></el-input></td>
        </tr>
        <tr>
          <td width="25%" class="colspan1">{{$t('uploadThesisPaper.uploadImage.vue')}}</td>
          <td width="75%" class="colspan2" >

            <fileupload url="/api/degree/uploadCheckThesis"
                        accepttype=".pdf"
                        @successcallback="onSuccess"
                        @preview="onPreview"
                        remarks="只能上传.pdf文件"
            >上传文件
            </fileupload>
          </td>
        </tr>
        <tr v-if="showDownloadBtn">
          <td colspan="8" align="center" id="downloadBtn">
            <el-button class="allBtn" size="mini" @click="xwlwzg()">下载</el-button>
          </td>
        </tr>
      </table>
    </div>
  </div>
</template>

<script>
  //  学生上传论文
  import { uploadCheckThesisInit , thesisModifyTitle  } from '@/api/uploadCheckThesis'
  import  fileupload  from '../../components/upload/fileupload'
  import { degreeThesisAttachmentDownload } from '@/api/thesisReviewAndReplyInfoShow'
  export default {

    data(){
      return{
        formData:{
          setStuNum:'',
          setStuName: '' ,
          setThesisLanguageKind: '' ,
          setThesisClassNumber: '' ,
          setThesisName: '' ,
          setThesisEngName: '' ,
          setResearchWay: '' ,
          setEnglishTheme: '' ,
          setChineseAbstract: '' ,
          setEnglishAbstract: '' ,
          setThesisReference: '' ,
          setContentCheckState: '' , //是否审核
          setDuplicateCheckState: '' , //审核意见
          setStatus: '' ,   //是否通过
        },
        languageKinds: [
          {
            value: '01',
            label: '中文'
          }, {
            value: '02',
            label: '英文'
          }, {
            value: '03',
            label: '日文'
          }, {
            value: '04',
            label: '韩文'
          }
        ],
        degreeAttachId :'',
        showDownloadBtn :false,
      }
    },
    components:{fileupload},
    created() {
      this.fetchData()
    },
    methods: {
      onPreview:function(file){
        console.log(file)
        //window.location.href = file.response.url
      },
      onSuccess(res,file){
        console.log(res)
        console.log(file)
        this.degreeAttachId =  res.data.degreeAttachId
        this.showDownloadBtn = !this.showDownloadBtn;
        /*if(res.code === 0){
          alert(111)
        }*/
      },
      fetchData() {
        uploadCheckThesisInit().then( res => {
          this.formData = res.data
        })
      },
      modifyBtn() {
        thesisModifyTitle(this.formData).then(res => {
          this.$message({
            type: 'info',
            message: '修改成功'
          });
        })
      },
      //学位论文终稿
      xwlwzg(){
        degreeThesisAttachmentDownload().then(res => {
          this.dataKey = res.data
          if (this.dataKey != null) {
            this.$refs.temp8.click();
          } else (
            this.$message({
              message: '下载失败',
              type: 'error'
            })
          )
        })
      }
    }
  }
</script>

<style scoped>
  .container{
    margin:20px;
  }
  .noticeSpan{
    /*border: 1px solid #EBEEF5;*/
    font-size: 12px;
    color: #A50001;
    padding: 12px;
    line-height: 18px;
    text-align: left !important;
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
  }
  .colspan2{
    color:  #606266;
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
  .elinput2{
    border: 1px solid #EBEEF5;
    border-radius: 4px;
    color:  #606266;
  }
  .allBtn{
    background-color: #A50001;
    border: none;
    color: #ffffff;
  }
  .uploadBtn{
    background-color: #ffffff;
    border: 1px solid #A50001;
    color: #A50001;
  }
</style>
