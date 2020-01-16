<template>
  <div class="container">
    <table width="100%" class="content">
      <tbody>
        <tr>
          <td class="head" colspan="24">
            <div align="center" style="color: #A50001;font-size: 16px;">
              {{ $t('publishThesis.thesisInfo') }}
              <input type="hidden" name="isTea" value="0">
            </div>
          </td>
        </tr>
        <tr><td colspan="24" class="thesisExplain">
          {{ $t('publishThesis.note1') }}
          <br>{{ $t('publishThesis.note2') }}
          <br>{{ $t('publishThesis.note3') }}
        </td>
        </tr>
      </tbody>
    </table>

    <el-table
      :data="formData"
      border
      size="mini"
      class="eltable"
      :header-cell-style="{background:'#eef1f6',color:'#606266',fontSize: '14px'}"
      style="width: 100%"
    >
      <el-table-column
        prop="date"
        :label="$t('publishThesis.number')"
        width="73"
        align="center"
      >
        <template slot-scope="scope">
          {{ scope.$index+1 }}
        </template>
      </el-table-column>
      <el-table-column
        prop="address"
        :label="$t('publishThesis.thesisName')"
        width="350"
        align="center"
      >
        <template slot-scope="scope">
          {{ scope.row.achName }}
        </template>
      </el-table-column>
      <el-table-column
        prop="address"
        :label="$t('publishThesis.publicationTime1')"
        width="180"
        align="center"
      >
        <template slot-scope="scope">
          {{ scope.row.useTime }}
        </template>
      </el-table-column>
      <el-table-column
        prop="address"
        :label="$t('publishThesis.conferenceTitle')"
        width="220"
        align="center"
      >
        <template slot-scope="scope">
          {{ scope.row.magazineName }}
        </template>
      </el-table-column>
      <el-table-column
        prop="address"
        :label="$t('publishThesis.level')"
        width="100"
        align="center"
      >
        <template slot-scope="scope">
          {{ $t(scope.row.levelCodeNmae) }}
        </template>
      </el-table-column>
      <el-table-column
        prop="address"
        :label="$t('publishThesis.inclusion')"
        width="90"
        align="center"
      >
        <template slot-scope="scope">
          {{ $t(scope.row.includeNmae) }}
        </template>
      </el-table-column>
      <el-table-column
        prop="address"
        :label="$t('publishThesis.selfRank')"
        width="95"
        align="center"
      >
        <template slot-scope="scope">
          {{ scope.row.orderCode }}
        </template>
      </el-table-column>
      <el-table-column
        prop="address"
        :label="$t('publishThesis.status')"
        width="85"
        align="center"
      >
        <template slot-scope="scope">
          {{ scope.row.isCheck ? '审核未通过' : '审核通过' }}
        </template>
      </el-table-column>
      <el-table-column
        prop="address"
        width="250"
        align="center"
        :label="$t('patent.operation')"
      >
        <template slot-scope="scope">
          <el-button v-if="scope.row.isCheck" size="mini"  class="operateBtn" type="text" @click="editThesis(scope.row.achwtId)">{{$t('patent.edit')}}</el-button>
          <el-button v-if="!scope.row.isCheck" size="mini"  class="operateBtn" type="text" @click="remarkThesis(scope.row.achwtId)">{{$t('patent.modify')}}</el-button>
          <el-button v-if="scope.row.isCheck" size="mini"  class="operateBtn" type="text" @click="deleteThesis(scope.row.achwtId)">{{$t('patent.delete')}}</el-button>
        </template>
      </el-table-column>
    </el-table>
    <table width="100%" style="padding-top: 20px">
      <tbody><tr>
        <td align="center">
          <el-button size="mini" class="setBtn" @click="addThesis()">{{ $t('patent.add') }}</el-button>
        </td>
      </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
  import { getAchievementWordTypeInfoList } from '@/api/getAchievementWordType'
  import { deleteAchievementWordTypeInfo } from '@/api/getAchievementWordType'
  import { translation } from '@/utils/translation'
export default {
  data() {
    return {
      formData:[],
      achwtId:''
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
      getAchievementWordTypeInfoList().then(res => {
        this.formData = res.data
      })
    },
    //添加
    addThesis(){
      this.$router.push({ path: './thesisAdd'})
    },
    //编辑
    editThesis(achwtId) {
      this.$router.push({ name: 'thesisAdd', params: { achwtId }})
    },
    //删除
    deleteThesis(achwtId) {
      deleteAchievementWordTypeInfo({ 'achwtId': achwtId }).then(res => {
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
      })
    },
    //修改
    remarkThesis(achwtId) {
      this.$router.push({ name: 'remarkThesis', params: { achwtId }})
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
  .setBtn{
    background-color: #A50001;
    border: 0px;
    color: #ffffff;
  }
  .operateBtn{
    color: #A50001;
  }
</style>
