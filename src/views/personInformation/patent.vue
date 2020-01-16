<template>
  <div class="container">
    <table width="100%" class="content">
      <tbody><tr>
               <td class="head" colspan="24">
                 <div align="center" style="color: #A50001;font-size: 16px;font-weight: bold">
                   {{ $t('patent.note') }}
                   <input type="hidden" name="isTea" value="0">
                 </div>
               </td>
             </tr>
        <tr><td colspan="24" class="thesisExplain">
          {{ $t('patent.note11') }}
          <br>{{ $t('patent.note1') }}
          <br>{{ $t('patent.note2') }}
          <br>{{ $t('patent.note3') }}
        </td>
        </tr>
      </tbody>
    </table>

    <el-table
      :data="tableData"
      border
      size="mini"
      class="eltable"
      :header-cell-style="{background:'#eef1f6',color:'#606266',fontSize: '14px'}"
      style="width: 100%;"
    >
      <el-table-column
        prop="date"
        :label="$t('publishThesis.number')"
        width="60"
      >
        <template slot-scope="scope">
          {{ scope.$index+1 }}
        </template>
      </el-table-column>
      <el-table-column
        prop="date"
        :label="$t('patent.patentInfo')"
      >
        <template slot-scope="scope">
          {{ scope.row.patentName }}
        </template>
      </el-table-column>
      <el-table-column
        prop="address"
        :label="$t('patent.type')"
      >
        <template slot-scope="scope">
          {{ $t(scope.row.patentTypeName) }}
        </template>
      </el-table-column>
      <el-table-column
        prop="address"
        :label="$t('patent.patentNo')"
      >
        <template slot-scope="scope">
          {{ scope.row.applyNum }}
        </template>
      </el-table-column>
      <el-table-column
        prop="address"
        :label="$t('patent.typeNo')"
      >
        <template slot-scope="scope">
          {{ scope.row.typeNum }}
        </template>
      </el-table-column>
      <el-table-column
        prop="address"
        :label="$t('patent.grantingDate')"
      >
        <template slot-scope="scope">
          {{ scope.row.applyTime }}
        </template>
      </el-table-column>
      <el-table-column
        prop="address"
        :label="$t('patent.selfRank')"
        width="100"
      >
        <template slot-scope="scope">
          {{ scope.row.personNum }}
        </template>
      </el-table-column>
      <el-table-column
        prop="address"
        :label="$t('patent.status')"
        width="100"
      >
        <template slot-scope="scope">
          {{ scope.row.isCheck ? '审核未通过' : '审核通过' }}
        </template>
      </el-table-column>
      <el-table-column
        prop="address"
        width="250"
        :label="$t('patent.operation')"
      >
        <template slot-scope="scope">
          <el-button v-if="scope.row.isCheck" size="mini" round style="color: #9b0d14" t type="text" @click="editPatent(scope.row.achPanId)">{{$t('patent.edit')}}</el-button>
          <el-button v-if="!scope.row.isCheck" size="mini" round style="color: #9b0d14" t type="text" @click="remarkPatent(scope.row.achPanId)">{{$t('patent.modify')}}</el-button>
          <el-button v-if="scope.row.isCheck" size="mini" round style="color: #9b0d14" type="text" @click="deletePatent(scope.row.achPanId)">{{$t('patent.delete')}}</el-button>
        </template>
      </el-table-column>
    </el-table>

    <table width="100%" style="padding-top: 20px">
      <tbody><tr>
        <td style="text-align:center">
          <el-button size="mini" class="setBtn" @click="insertPatent">{{ $t('patent.add') }}</el-button>
        </td>
      </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
import { getAchievementPatentInfoList } from '@/api/getAchievementPatent'
import { deleteAchievementPatentInfo } from '@/api/getAchievementPatent'
import { translation } from '@/utils/translation'
export default {
  data() {
    return {
      value1: '',
      tableData: []
    }
  },
  computed: {
    language() {
      return this.$store.getters.language
    }
  },
  created() {
    this.fetchData()
  },
  methods: {
    fetchData() {
      getAchievementPatentInfoList().then(res => {
        this.tableData = res.data
      })
    },
    insertPatent() {
      this.$router.push({ path: './patentDetail' })
    },
    editPatent(achPanId) {
      this.$router.push({ name: 'patentDetail', params: { achPanId }})
    },
    deletePatent(achPanId) {
      deleteAchievementPatentInfo({ 'achPanId': achPanId }).then(res => {
        if (res.code == 1) {
          this.$message({
            message: '删除失败',
            type: 'error'
          })
        } else {
          this.$message({
            message: translation(res, this.language).message,
            type: 'success'
          })
          this.fetchData()
        }
      }).catch(e => {

      })
    },
    remarkPatent(achPanId) {
      this.$router.push({ name: 'savePatentRemark', params: { achPanId }})
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
  .content{
    width:100%;
    border-top: 1px solid #EBEEF5;
    border-left: 1px solid #EBEEF5;
    border-spacing: 0;/*去掉单元格间隙*/
    margin-top: 15px;
    margin-bottom: 15px;
  }
  .content td {
    padding: 10px 30px;
    border-bottom: 1px solid #EBEEF5;
    border-right: 1px solid #EBEEF5;
    text-align: left;
    font-size: 12px;
  }
  .thesisExplain{
    color: black;
    line-height: 18px;
    letter-spacing:1px;
    text-align: left !important;
  }
  .searchDiv{
    padding-top: 10px;
    padding-bottom: 10px;
  }
  .searchSpan{
    font-size: 14px;
    margin-left: 10px;
    margin-bottom: 15px !important;
    padding-bottom: 15px;
  }
  .eltable{
    margin-top: 20px;
  }
  .queryBtn{
    background-color: #A50001;
    border: 0px;
    color: #ffffff;
    margin-left: 15px;
  }
  .setBtn{
    background-color: #A50001;
    border: 0px;
    color: #ffffff;
  }
</style>
