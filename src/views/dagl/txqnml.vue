<template>
  <div class="app-container">
    <table class="content" width="100%">
      <tbody><tr>
               <td class="head" height="25" colspan="6">
                 <div class="titlable">{{$t('FilesDirectory.title')}}</div>
               </td>
             </tr>
        <tr>
          <td width="10%" class="colstyle1">{{$t('FilesDirectory.name')}}	 </td>
          <td width="15%" class="colstyle2">{{ form.perName }}</td>
          <td width="15%" class="colstyle1">{{$t('FilesDirectory.degreeTime')}}	</td>
          <td width="20%" class="colstyle2">{{ form.gradTime }}</td>
          <td width="15%" class="colstyle1">{{$t('FilesDirectory.degreeCertificate')}}</td>
          <td width="20%" class="colstyle2">{{ form.contentNum }}</td>
        </tr>
      </tbody></table>
    <div>
     &nbsp;&nbsp;&nbsp;
    </div>
    <el-form>
      <el-table
        :data="contentFormList"
        border
        size="mini"
        style="width: 100%"
      >
        <el-table-column
          prop="date"
          :label="$t('FilesDirectory.materialName')"
          align="center"
        >
          <template slot-scope="scope">
            <span>{{ scope.row.materialTypeName }}</span>
          </template>
        </el-table-column>
        <el-table-column
          prop="name"
          :label="$t('FilesDirectory.formationTime')+'      ****.**'"
          align="center"
        >
          <template slot-scope="scope">
            <el-input v-model="scope.row.formTimeValue" size="mini" />
          </template>
        </el-table-column>
        <el-table-column
          prop="address"
          :label="$t('FilesDirectory.copies')"
          align="center"
        >
          <template slot-scope="scope">
            <el-input v-model="scope.row.sharesValue" size="mini" />
          </template>
        </el-table-column>
        <el-table-column
          prop="address"
          :label="$t('FilesDirectory.pages')"
          align="center"
        >
          <template slot-scope="scope">
            <el-input v-model="scope.row.pageNumValue" size="mini" />
          </template>
        </el-table-column>
        <el-table-column
          prop="address"
          :label="$t('FilesDirectory.remark')"
          align="center"
        >
          <template slot-scope="scope">
            <el-input v-model="scope.row.remark" size="mini" />
          </template>
        </el-table-column>
      </el-table>
      <div>
    &nbsp;&nbsp;&nbsp;
      </div>
      <table width="100%">
        <tbody>
          <tr>
            <td style="text-align:center">
              <el-button size="mini" class="allBtn" @click="entryInfoSubmit">{{$t('DoctorPaperSelfEvaluate.submit')}}</el-button>
            </td>
          </tr>
        </tbody>
      </table>
    </el-form>
  </div>
</template>
<script>
import { initInfoMethod } from '@/api/tianxiejnml'
import { entryInfoSubmit } from '@/api/tianxiejnml'
import { translation } from '@/utils/translation'
export default {
  name: 'Txqnml',
  data() {
    return {
      form: {
        perName: '',
        personId: '',
        stuType: '',
        gradTime: '',
        contentNum: ''
      },
      contentFormList: []
    }
  },
  created() {
    this.fetchData()
  },
  computed: {
    language() {
      return this.$store.getters.language
    }
  },
  methods: {
    fetchData() {
      initInfoMethod().then(res => {
        this.form = res.data.form
        this.contentFormList = res.data.contentFormList
      })
    },
    entryInfoSubmit() {
      entryInfoSubmit({'contentFormList': this.contentFormList}).then(res => {
        if(res.code == 1){
        }else{
          this.$message({
            message: translation(res,this.language).message,
            type: 'success'
          })
        }
      })
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
  .leftsidespan{
    align:center;
    width:13%;
    font-size: 12px;
    color: #909399;
    font-weight: bold;
    letter-spacing:2px;
  }
  .rightsidespan{
    align:center;
    font-size: 12px;
    color: #606266;
    letter-spacing:2px;
    text-indent:30px;
    line-height: 18px;
  }
  .part_bottom_1{
    font-size: 12px;
    text-align: center;
    color: #909399;
    font-weight: bold;
  }
  .part_bottom_2{
    font-size: 12px;
    text-align: center;
    color: #606266;
  }

</style>
