<template>
  <div class="container">
    <el-form>
      <table class="content" width="100%">
        <tbody><tr>
          <td align="center" valign="top">
            <table class="content" width="100%">
              <tbody>
                <tr>
                  <td colspan="5" style="font-size:16px;color:#A50001">
                    <div>
                      {{ $t('baseInformationModal.personalInformation') }}
                    </div>
                  </td>
                </tr>
                <tr>
                  <td width="15%" class="colstyle1">
                    {{ $t('baseInformationModal.name') }}
                  </td>
                  <td class="colstyle2">
                    {{ list.perName }}
                  </td>
                  <td width="20%" class="colstyle1">
                    {{ $t('baseInformationModal.englishName') }}
                  </td>
                  <td v-if="isEdit" width="25%" class="colstyle2">
                    <input v-model="list.perEnglishName">
                  </td>
                  <td v-else width="25%" class="colstyle2">
                    {{ list.perEnglishName }}
                  </td>
                  <td width="20%" rowspan="4">
                    <img v-if="show" :src="'/gradms/api/base/getBytesBufferDataByDataKey?dataKey='+dataKey" height="120" align="middle" border="0" alt="photo">
                  </td>
                </tr>
                <tr>
                  <td width="15%" class="colstyle1">
                    {{ $t('baseInformationModal.studentNumber') }}
                  </td>
                  <td class="colstyle2">
                    {{ list.perNum }}
                  </td>
                  <td width="15%" class="colstyle1">
                    {{ $t('baseInformationModal.sex') }}
                  </td>
                  <td class="colstyle2">
                    {{ $t(list.genderCode) }}
                  </td>
                </tr>
                <tr>
                  <td width="15%" class="colstyle1">
                    {{ $t('baseInformationModal.date') }}
                  </td>
                  <td class="colstyle2">
                    {{ list.perBirthday }}
                  </td>
                  <td width="15%" class="colstyle1">
                    {{ $t('baseInformationModal.nationality') }}
                  </td>
                  <td width="25%" class="colstyle2">
                    {{ $t(list.nationName) }}
                  </td>
                </tr>
                <tr>
                  <td width="15%" class="colstyle1">
                    {{ $t('baseInformationModal.ID') }}
                  </td>
                  <td class="colstyle2">
                    {{ list.perIdCard }}
                  </td>
                  <td width="15%" class="colstyle1">
                    {{ $t('baseInformationModal.religion') }}
                  </td>
                  <td v-if="isEdit" width="25%" class="colstyle2">
                    <el-select v-model="religionshow" placeholder="please choose" size="mini" class="el-w">
                      <el-option
                        v-for="item in list.zjxy"
                        :key="item.value"
                        :label="$t(item.name)"
                        :value="item.value"
                      />
                    </el-select>
                  </td>
                  <td v-else width="25%" class="colstyle2">
                    {{ religionshow }}
                  </td>
                </tr>
              </tbody></table>
            <table class="content" width="100%">
              <tbody>
                <tr>
                  <td colspan="4" style="font-size:16px;color:#A50001">
                    {{ $t('baseInformationModal.person') }}
                  </td>
                </tr>
                <tr>
                  <td width="20%" class="colstyle1">
                    {{ $t('baseInformationModal.contact') }}
                  </td>
                  <td v-if="isEdit" class="colstyle2">
                    <input v-model="list.perTelephone">
                  </td>
                  <td v-else class="colstyle2">
                    {{ list.perTelephone }}
                  </td>
                  <td width="20%" class="colstyle1">
                    {{ $t('baseInformationModal.phone') }}
                  </td>
                  <td v-if="isEdit" class="colstyle2">
                    <input v-model="list.mobilePhone">
                  </td>
                  <td v-else class="colstyle2">
                    {{ list.mobilePhone }}
                  </td>
                </tr>
                <tr>
                  <td class="colstyle1">
                    {{ $t('baseInformationModal.qq') }}
                  </td>
                  <td v-if="isEdit" class="colstyle2">
                    <input v-model="list.qq">
                  </td>
                  <td v-else class="colstyle2">
                    {{ list.qq }}
                  </td>
                  <td class="colstyle1">
                    {{ $t('baseInformationModal.wechat') }}
                  </td>
                  <td v-if="isEdit" class="colstyle2">
                    <input v-model="list.wechat">
                  </td>
                  <td v-else class="colstyle2">
                    {{ list.wechat }}
                  </td>
                </tr>
                <tr>
                  <td class="colstyle1">
                    {{ $t('baseInformationModal.email') }}
                  </td>
                  <td v-if="isEdit" colspan="3" class="colstyle2">
                    <input v-model="list.email" style="width: 30%">
                  </td>
                  <td v-else colspan="3" class="colstyle2">
                    {{ list.email }}
                  </td>
                </tr>
                <tr>
                  <td class="colstyle1">
                    {{ $t('baseInformationModal.remark') }}
                  </td>
                  <td v-if="isEdit" height="40" colspan="3" class="colstyle2">
                    <input v-model="list.remark" style="width: 50%">
                  </td>
                  <td v-else colspan="3" class="colstyle2">
                    {{ list.remark }}
                  </td>
                </tr>
                <tr>
                  <td height="28" colspan="4">
                    <div align="center">
                      <el-button v-if="!isEdit" name="modifyIt" class="submitbutton" @click="edit">{{ $t('route.modify') }}</el-button>
                      <el-button v-else name="modifyIt" class="submitbutton" @click="save">{{ $t('route.save') }}</el-button>
                    </div>
                  </td>
                </tr>
              </tbody></table>
          </td>
        </tr>
        </tbody></table>
    </el-form>
  </div>
</template>

<script>
import { getStudentBaseicInfo, updateStudentBaseicInfo } from '@/api/studentBaseicInfo'
export default {
  data() {
    return {
      list: [],
      length1: [],
      activeName: 'first',
      dataKey: '',
      show: false,
      isEdit: false
    }
  },
  computed: {
    religionshow: {
      get: function() {
        const zjxy = this.list.zjxy
        const religion = this.list.religion
        if (zjxy) {
          this.length1 = zjxy.length
        }
        for (let i = 0; i < this.length1; i++) {
          const item = zjxy[i]
          if (item.value === religion) {
            return this.$t(item.name)
          }
        }
      },
      set: function(newValue) {
        this.list.religion = newValue
      }
    }
  },
  created() {
    this.fetchData()
  },
  methods: {
    downLoadPDF() {
      window.location.href = '/gradms/api/student/printStudyProve'
    },
    fetchData() {
      getStudentBaseicInfo().then(res => {
        console.log(res)
        this.list = res.data
        this.dataKey = res.data.dataKey
        if (this.dataKey == null) {
          this.show = false
        } else {
          this.show = true
        }
      })
    },
    save() {
      this.isEdit = false
      updateStudentBaseicInfo(this.list).then(res => {
      }).catch(e => {
      })
    },
    edit() {
      this.isEdit = true
    }
  }
}
</script>

<style lang="scss" scoped>
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
    text-align: center;
    font-size: 12px;
  }
  td input{
    box-sizing: border-box;
    margin: 0 !important;
    padding: 2px;
    border: none;
    border-bottom: 1px solid black;
    color: #606266;
  }
  td input:focus{
    padding: 2px;
    box-sizing: border-box;
    margin: 0 !important;
    border: none;
    color: #606266;
  }
  .submitbutton{
    width: 12em;
    background-color: #A50001;
    border: 0px;
    color: #ffffff;
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
  .el-upload-dragger{
    width: 220px;
    height: 140px;
  }
  .el-upload-dragger:hover {
    border-color: #A50001;
  }

</style>

