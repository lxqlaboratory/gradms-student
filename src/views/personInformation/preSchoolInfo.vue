<template>
  <div class="container">
    <table class="content" width="100%">
      <tbody><tr>
        <td height="300" colspan="8" align="center" valign="top">
          <table class="content" width="100%">
            <tbody><tr>
                     <td style="font-size:16px;color:#A50001" colspan="4">
                       <div align="center">
                         {{ $t('preSchoolInfoModal.preSchoolInfoDisplay') }}
                       </div>
                     </td>
                   </tr>
              <tr>
                <td colspan="4" style="font-size:12px;color:#A50001">
                  {{ $t('preSchoolInfoModal.undergraduate') }}
                </td>
              </tr>
              <tr>
                <td width="25%" class="colstyle1">
                  {{ $t('preSchoolInfoModal.undergraduateType') }}
                </td>
                <td v-if="isEdit2" width="25%" class="colstyle2">
                  <el-select  v-model="list3.universityTypeCode" size="mini" class="el-w">
                    <el-option
                      v-for="item in list3.bkbylb"
                      :key="item.value"
                      :label="$t(item.name)"
                      :value="item.value"
                    />
                  </el-select>
                </td>
                <td v-else width="25%" class="colstyle2">
                  {{ $t(list3.universityTypeCode,list3.bkbylb) }}
                </td>
                <td width="25%" class="colstyle1">
                  {{ $t('preSchoolInfoModal.undergraduateMajor') }}
                </td>
                <td v-if="isEdit2" width="25%" class="colstyle2">
                  <el-autocomplete
                    v-model="baseMajor"
                    size="mini"
                    style="width: 200px"
                    :fetch-suggestions="querySearch"
                    placeholder="请输入内容"
                    @select="handleSelect"
                  >
                    <template slot-scope="{ item }">
                      <div class="show-autocomplete">
                        {{ $t(item.name) }}
                     </div>
                    </template>
                  </el-autocomplete>
                </td>
                <td v-else width="25%" class="colstyle2">
                  {{ baseMajor }}
                </td>
              </tr>
              <tr>
                <td class="colstyle1">
                  {{ $t('preSchoolInfoModal.undergraduateDate') }}
                </td>
                <td v-if="isEdit2" class="colstyle2">
                  <input v-model="list3.universityDate">
                </td>
                <td v-else class="colstyle2">
                  {{ list3.universityDate }}
                </td>
                <td class="colstyle1">
                  {{ $t('preSchoolInfoModal.undergraduateThesisTitle') }}
                </td>
                <td v-if="isEdit2" class="colstyle2">
                  <input v-model="list3.universityThesis">
                </td>
                <td v-else class="colstyle2">
                  {{ list3.universityThesis }}
                </td>
              </tr>
              <tr>
                <td class="colstyle1">
                  {{ $t('preSchoolInfoModal.bachelarDegree') }}
                </td>
                <td v-if="isEdit2" width="25%" class="colstyle2">
                  <el-select v-model="list3.bachelorDegreeCode" placeholder="please choose" size="mini" class="el-w">
                    <el-option
                      v-for="item in list3.xsxw"
                      :key="item.value"
                      :label="$t(item.name)"
                      :value="item.value"
                    />
                  </el-select>
                </td>
                <td v-else width="25%" class="colstyle2">
                  {{ $t(list3.bachelorDegreeCode,list3.xsxw) }}
                </td>
                <td class="colstyle1">
                  {{ $t('preSchoolInfoModal.bachelarDegreeMajor') }}
                </td>
                <td v-if="isEdit2" width="25%" class="colstyle2">
                  <el-autocomplete
                    v-model="DegreeBaseGradMajor"
                    size="mini"
                    style="width: 200px"
                    :fetch-suggestions="BachelorDegreeSearch"
                    placeholder="请输入内容"
                    @select="BachelorDegreeSelect"
                  >
                    <template slot-scope="{ item }">
                      <div class="show-autocomplete">
                        {{ $t(item.name) }}
                     </div>
                    </template>
                  </el-autocomplete>
                </td>
                <td v-else class="colstyle2">
                  {{ DegreeBaseGradMajor }}
                </td>
              </tr>
              <tr>
                <td class="colstyle1">
                  {{ $t('preSchoolInfoModal.bachelarDegreeType') }}
                </td>
                <td v-if="isEdit2" width="25%" class="colstyle2">
                  <el-select v-model="list3.bachelorSubjectTypeCode" placeholder="please choose" size="mini" class="el-w">
                    <el-option
                      v-for="item in list3.xsxkml"
                      :key="item.value"
                      :label="$t(item.name)"
                      :value="item.value"
                    />
                  </el-select>
                </td>
                <td v-else width="25%" class="colstyle2">
                  {{ $t(list3.bachelorSubjectTypeCode,list3.xsxkml) }}
                </td>
                <td class="colstyle1">
                  {{ $t('preSchoolInfoModal.bachelarDegreeGrantedDate') }}
                </td>
                <td v-if="isEdit2" class="colstyle2">
                  <input v-model="list3.bachelorDegreeDate">
                </td>
                <td v-else class="colstyle2">
                  {{ list3.bachelorDegreeDate }}
                </td>
              </tr>
              <tr v-if="roleJudge">
                <td colspan="4" style="font-size:12px;color:#A50001">
                  {{ $t('preSchoolInfoModal.postgraduate') }}
                </td>
              </tr>
              <tr v-if="roleJudge">
                <td class="colstyle1">
                  {{ $t('preSchoolInfoModal.postgraduateType') }}
                </td>
                <td v-if="isEdit2" width="25%" class="colstyle2">
                  <el-select v-model="list3.masterTypeCode" placeholder="please choose" size="mini" class="el-w">
                    <el-option
                      v-for="item in list3.ssbylb"
                      :key="item.value"
                      :label="$t(item.name)"
                      :value="item.value"
                    />
                  </el-select>
                </td>
                <td v-else width="25%" class="colstyle2">
                  {{ $t(list3.masterTypeCode,list3.ssbylb) }}
                </td>
                <td class="colstyle1">
                  {{ $t('preSchoolInfoModal.postgraduateMajor') }}
                </td>
                <td v-if="isEdit2" width="25%" class="colstyle2">
                  <el-autocomplete
                    v-model="BasePostGradMajor"
                    size="mini"
                    style="width: 200px"
                    :fetch-suggestions="postGradMajorSearch"
                    placeholder="请输入内容"
                    @select="postGradMajorSelect"
                  >
                    <template slot-scope="{ item }">
                    <div class="show-autocomplete">
                      {{ $t(item.name) }}
                    </div>
                  </template>
                  </el-autocomplete>
                </td>
                <td v-else class="colstyle2">
                  {{ BasePostGradMajor }}
                </td>
              </tr>
              <tr v-if="roleJudge">
                <td class="colstyle1">
                  {{ $t('preSchoolInfoModal.postgraduateDate') }}
                </td>
                <td v-if="isEdit2" class="colstyle2">
                  <input v-model="list3.masterDate">
                </td>
                <td v-else class="colstyle2">
                  {{ list3.masterDate }}
                </td>
                <td class="colstyle1">
                  {{ $t('preSchoolInfoModal.postgraduateThesisTitle') }}
                </td>
                <td v-if="isEdit2" class="colstyle2">
                  <input v-model="list3.masterThesis">
                </td>
                <td v-else class="colstyle2">
                  {{ list3.masterThesis }}
                </td>
              </tr>
              <tr v-if="roleJudge">
                <td class="colstyle1">
                  {{ $t('preSchoolInfoModal.MasterDegree') }}
                </td>
                <td v-if="isEdit2" width="25%" class="colstyle2">
                  <el-select v-model="list3.masterDegreeCode" placeholder="please choose" size="mini" class="el-w">
                    <el-option
                      v-for="item in list3.ssxw"
                      :key="item.value"
                      :label="$t(item.name)"
                      :value="item.value"
                    />
                  </el-select>
                </td>
                <td v-else width="25%" class="colstyle2">
                  {{ $t(list3.masterDegreeCode,list3.ssxw) }}
                </td>
                <td class="colstyle1">
                  {{ $t('preSchoolInfoModal.MasterDegreeMajor') }}
                </td>
                <td v-if="isEdit2" width="25%" class="colstyle2">
                  <el-autocomplete
                    v-model="DegreeBasePostGradMajor"
                    size="mini"
                    style="width: 200px"
                    :fetch-suggestions="MasterDegreeSearch"
                    placeholder="请输入内容"
                    @select="MasterDegreeSelect"
                  >
                    <template slot-scope="{ item }">
                      <div class="show-autocomplete">
                        {{ $t(item.name) }}
                      </div>
                    </template>
                  </el-autocomplete>
                </td>
                <td v-else class="colstyle2">
                  {{ DegreeBasePostGradMajor }}
                </td>
              </tr>
              <tr v-if="roleJudge">
                <td class="colstyle1">
                  {{ $t('preSchoolInfoModal.MasterSubjectType') }}
                </td>
                <td v-if="isEdit2" width="25%" class="colstyle2">
                  <el-select v-model="list3.masterSubjectTypeCode" placeholder="please choose" size="mini" class="el-w">
                    <el-option
                      v-for="item in list3.ssxkml"
                      :key="item.value"
                      :label="$t(item.name)"
                      :value="item.value"
                    />
                  </el-select>
                </td>
                <td v-else width="25%" class="colstyle2">
                  {{ $t(list3.masterSubjectTypeCode,list3.ssxkml) }}
                </td>
                <td class="colstyle1">
                  {{ $t('preSchoolInfoModal.MasterDegreeDate') }}
                </td>
                <td v-if="isEdit2" class="colstyle2">
                  <input v-model="list3.masterDegreeDate">
                </td>
                <td v-else class="colstyle2">
                  {{ list3.masterDegreeDate }}
                </td>
              </tr>
              <tr v-if="roleJudge">
                <td height="25" class="colstyle1">
                  {{ $t('preSchoolInfoModal.remark') }}
                </td>
                <td v-if="isEdit2" colspan="3" class="colstyle2">
                  <input v-model="list3.remark" style="width: 75%">
                </td>
                <td v-else colspan="3" class="colstyle2">
                  {{ list3.remark }}
                </td>
              </tr>
            </tbody>
            <tr>
              <td height="28" colspan="4">
                <div align="center">
                  <el-button v-if="!isEdit2" name="modifyIt" class="submitbutton" @click="edit2">{{ $t('route.modify') }}</el-button>
                  <el-button v-else name="modifyIt" class="submitbutton" @click="save2">{{ $t('route.save') }}</el-button>
                </div>
              </td>
            </tr>
          </table>
        </td>
      </tr>
      </tbody></table>
  </div>
</template>

<script>
  import { mapGetters } from 'vuex'
import { getStudentPreSchoolInfo, updateStudentPreSchoolInfo } from '@/api/studentPreSchoolInfo'
export default {
  data() {
    return {
      list3: [],
      master: '',
      baseMajor: '',
      BasePostGradMajor: '',
      DegreeBaseGradMajor: '',
      DegreeBasePostGradMajor: '',
      length1: [],
      activeName: 'first',
      bkbyzym: [],
      roleJudge: '',
      isEdit2: false
    }
  },
  computed: {
    ...mapGetters([
      'sidebar',
      'avatar',
      'roles'
    ])
  },
  watch: {
    'list3.BaseGradMajorCode': function(val, old) {
      for (const item of this.list3.bkbyzy) {
        if (item.value == (this.list3.BaseGradMajorCode + '')) {
          this.baseMajor = this.$t(item.name)
          return
        }
      }
    },
    'list3.DegreeBaseGradMajorCode': function(val, old) {
      for (const item of this.list3.bkbyzy) {
        if (item.value == (this.list3.DegreeBaseGradMajorCode + '')) {
          this.DegreeBaseGradMajor = this.$t(item.name)
          return
        }
      }
    },
    'list3.BasePostGradMajorCode': function(val, old) {
      for (const item of this.list3.shbyzy) {
        if (item.value == (this.list3.BasePostGradMajorCode + '')) {
          this.BasePostGradMajor = this.$t(item.name)
          return
        }
      }
    },
    'list3.DegreeBasePostGradMajorCode': function(val, old) {
      for (const item of this.list3.shbyzy) {
        if (item.value == (this.list3.DegreeBasePostGradMajorCode + '')) {
          this.DegreeBasePostGradMajor = this.$t(item.name)
          return
        }
      }
    },
    '$store.getters.language': function(val) {
      for (const item of this.list3.shbyzy) {
        if (item.value == (this.list3.BasePostGradMajorCode + '')) {
          this.BasePostGradMajor = this.$t(item.name)
          break
        }
      }
      for (const item of this.list3.shbyzy) {
        if (item.value == (this.list3.DegreeBasePostGradMajorCode + '')) {
          this.DegreeBasePostGradMajor = this.$t(item.name)
          break
        }
      }
      for (const item of this.list3.bkbyzy) {
        if (item.value == (this.list3.BaseGradMajorCode + '')) {
          this.baseMajor = this.$t(item.name)
          break
        }
      }
      for (const item of this.list3.bkbyzy) {
        if (item.value == (this.list3.DegreeBaseGradMajorCode + '')) {
          this.DegreeBaseGradMajor = this.$t(item.name)
          break
        }
      }
    }
  },
  created() {
    this.fetchData()
  },
  methods: {
    fetchData() {
      getStudentPreSchoolInfo().then(res => {
        console.log(res)
        this.list3 = res.data
        this.master = res.data.isMaster
        if(this.master == 0){
          this.roleJudge = true
        }else{
          this.roleJudge = false
        }
      })
    },
    save2() {
      this.isEdit2 = false
      updateStudentPreSchoolInfo(this.list3).then(res => {
      }).catch(e => {
      })
    },
    edit2() {
      this.isEdit2 = true
    },
    querySearch(queryString, cb) {
      var bkbyzy = this.list3.bkbyzy
      var results = queryString ? bkbyzy.filter(item => {
        const isEn = item.name.en && (item.name.en.indexOf(queryString) >= 0)
        const isCh = item.name.zh && (item.name.zh.indexOf(queryString) >= 0)
        const isValue = item.value && (item.value.indexOf(queryString) >= 0)
        return (isEn || isCh || isValue)
      }) : bkbyzy
      cb(results)
    },
    BachelorDegreeSearch(queryString, cb) {
      var bkbyzy = this.list3.bkbyzy
      var results = queryString ? bkbyzy.filter(item => {
        const isEn = item.name.en && (item.name.en.indexOf(queryString) >= 0)
        const isCh = item.name.zh && (item.name.zh.indexOf(queryString) >= 0)
        const isValue = item.value && (item.value.indexOf(queryString) >= 0)
        return (isEn || isCh || isValue)
      }) : bkbyzy
      cb(results)
    },
    postGradMajorSearch(queryString, cb) {
      var shbyzy = this.list3.shbyzy
      var results = queryString ? shbyzy.filter(item => {
        const isEn = item.name.en && (item.name.en.indexOf(queryString) >= 0)
        const isCh = item.name.zh && (item.name.zh.indexOf(queryString) >= 0)
        const isValue = item.value && (item.value.indexOf(queryString) >= 0)
        return (isEn || isCh || isValue)
      }) : shbyzy
      cb(results)
    },
    MasterDegreeSearch(queryString, cb) {
      var shbyzy = this.list3.shbyzy
      var results = queryString ? shbyzy.filter(item => {
        const isEn = item.name.en && (item.name.en.indexOf(queryString) >= 0)
        const isCh = item.name.zh && (item.name.zh.indexOf(queryString) >= 0)
        const isValue = item.value && (item.value.indexOf(queryString) >= 0)
        return (isEn || isCh || isValue)
      }) : shbyzy
      cb(results)
    },
    handleSelect(item) {
      this.list3.BaseGradMajorCode = item.value
    },
    postGradMajorSelect(item) {
      this.list3.BasePostGradMajorCode = item.value
    },
    MasterDegreeSelect(item) {
      this.list3.DegreeBasePostGradMajorCode = item.value
    },
    BachelorDegreeSelect(item) {
      this.list3.DegreeBaseGradMajorCode = item.value
    }
  }
}
</script>

<style lang="scss" scoped>

  .container{
    margin-left: 20px;
    margin-rigt: 20px;
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
    height: 30px;
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

</style>
