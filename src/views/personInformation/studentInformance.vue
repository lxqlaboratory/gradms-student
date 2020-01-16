<template>
<div class="app-container">
  <el-tabs v-model="activeName" type="card">
    <el-tab-pane label="惩处违纪" name="first">
      <div style="text-align: center">惩处信息</div>
      <el-table
        :data="tableData"
        border
        style="width: 100%">
        <el-table-column
          prop="date"
          label="序号"
          width="80">
        </el-table-column>
        <el-table-column
          prop="name"
          label="惩处原因"
          width="180">
        </el-table-column>
        <el-table-column
          prop="address"
          label="惩处等级"
          width="80">
        </el-table-column>
        <el-table-column
          prop="address"
          label="惩处类别"
          width="180">
        </el-table-column>
        <el-table-column
          prop="address"
          label="文案编号"
          width="80">
        </el-table-column>
        <el-table-column
          prop="address"
          label="惩处部门"
          width="180">
        </el-table-column>
        <el-table-column
          prop="address"
          label="违纪时间"
          width="180">
        </el-table-column>
        <el-table-column
          prop="address"
          label="处罚时间"
         >
        </el-table-column>
      </el-table>
    </el-tab-pane>
    <el-tab-pane label="发表论文" name="second">
      <table  cellspacing="0" width="100%">
        <tbody><tr>
          <td class="head" colspan="11">
            <div align="center"  style="color: #5a5e66">
             论文信息
            <input type="hidden" name="isTea" value="0">
            </div>
          </td>
        </tr>
        <tr><td colspan="11">
            <font color="red">1.与学位论文相关信息是博士论文自评表中发表论文相关的重要内容，请务必在博士匿名评阅送审前认真填写完成。
              <br>2.学院秘书/书记审核通过该论文后，该论文信息则不可修改。若要修改论文信息，请联系审核通过的相应的学院秘书/书记，将该论文状态置为审核不通过后进行修改。
              <br>3.学院秘书审核主要用研究生优秀成果评审和毕业与学位审核，书记审核主要用于奖学金评审。
            </font>
          </td>
        </tr>
        <tr>
          <td align="left" width="30%" style="color: #5a5e66" >
            论文发表年度:
          </td>
          <td align="left" colspan="3" style="color: #5a5e66">
            论文发表时间:
            <input type="text" name="beginTime" size="15" value="" onclick="setDay(this);" style="width: 20%" >
            至
            <input type="text" name="endTime" size="15" value="" onclick="setDay(this);" style="width: 20%">
          </td>
          <td align="left" colspan="3" style="color: #5a5e66" width="20%">
            作者位次:
          </td>
          <td colspan="2">
            <input type="button" name="button" value="查询" onclick="search()" class="button">
            <input type="button" name="button" value="导出" onclick="doExport()" class="button">
          </td>
        </tr>
        </tbody></table>
      <el-table
        :data="tableData"
        border
        style="width: 100%">
        <el-table-column
          prop="date"
          label="序号"
          width="50">
        </el-table-column>
        <el-table-column
          prop="name"
          label="选择"
          width="50">
        </el-table-column>
        <el-table-column
          prop="address"
          label="论文名称"
          width="250">
        </el-table-column>
        <el-table-column
          prop="address"
          label="发表时间"
          width="80">
        </el-table-column>
        <el-table-column
          prop="address"
          label="期刊会议名称"
          width="230">
        </el-table-column>
        <el-table-column
          prop="address"
          label="级别"
          width="80">
        </el-table-column>
        <el-table-column
          prop="address"
          label="收录情况"
          width="80">
        </el-table-column>
        <el-table-column
          prop="address"
          label="本人位次"
          width="80"
        >
        </el-table-column>
        <el-table-column
          prop="address"
          label="是否公开"
          width="60"
        >
        </el-table-column>
        <el-table-column
          prop="address"
          label="状态"
          width="80"
        >
        </el-table-column>
        <el-table-column
          prop="address"
          label="是否公开"
        >
        </el-table-column>
      </el-table>
    </el-tab-pane>
    <el-tab-pane label="发表专著" name="third">
      <table  cellspacing="0" width="100%">
      <tbody><tr>
        <td class="head" colspan="11">
          <div align="center"  style="color: #5a5e66">
            专著/教材信息
            <input type="hidden" name="isTea" value="0">
          </div>
        </td>
      </tr>
      <tr><td colspan="11">
        <font color="red">1.管理员审核通过该专著/教材后，该专著/教材信息则不可修改。
          <br>2.学生->若要修改专著/教材信息，请联系审核通过的相应的学院秘书/书记将该专著/教材状态置为审核不通过后进行修改!
          <br>3.教师->若要修改专著/教材信息，请联系相应的学院秘书将该专著/教材状态置为审核不通过后进行修改!
        </font>
      </td>
      </tr>
      <tr>
        <td align="left" width="30%" style="color: #5a5e66" >
          论文发表年度:
        </td>
        <td align="left" colspan="3" style="color: #5a5e66">
          论文发表时间:
          <input type="text" name="beginTime" size="15" value="" onclick="setDay(this);" style="width: 20%" >
          至
          <input type="text" name="endTime" size="15" value="" onclick="setDay(this);" style="width: 20%">
        </td>
        <td align="left" colspan="3" style="color: #5a5e66" width="20%">
          作者位次:
        </td>
        <td colspan="2">
          <input type="button" name="button" value="查询" onclick="search()" class="button">
          <input type="button" name="button" value="导出" onclick="doExport()" class="button">
        </td>
      </tr>
      </tbody></table>
      <el-table
        :data="tableData"
        border
        style="width: 100%">
        <el-table-column
          prop="date"
          label="序号"
          width="50">
        </el-table-column>
        <el-table-column
          prop="name"
          label="选择"
          width="50">
        </el-table-column>
        <el-table-column
          prop="address"
          label="名称"
          width="150">
        </el-table-column>
        <el-table-column
          prop="address"
          label="类型"
          width="80">
        </el-table-column>
        <el-table-column
          prop="address"
          label="出版社"
          width="120">
        </el-table-column>
        <el-table-column
          prop="address"
          label="出版日期"
          width="100">
        </el-table-column>
        <el-table-column
          prop="address"
          label="页码数"
          width="80">
        </el-table-column>
        <el-table-column
          prop="address"
          label="版次"
          width="100"
        >
        </el-table-column>
        <el-table-column
          prop="address"
          label="定价"
          width="100"
        >
        </el-table-column>
        <el-table-column
          prop="address"
          label="本人位次"
          width="80"
        >
        </el-table-column>
        <el-table-column
          prop="address"
          label="是否公开"
          width="80"
        >
        </el-table-column>
        <el-table-column
          prop="address"
          label="状态"
          width="80"
        >
        </el-table-column>
        <el-table-column
          prop="address"
          label="操作"
        >
        </el-table-column>
      </el-table></el-tab-pane>
    <el-tab-pane label="专利" name="fourth">
      <table  cellspacing="0" width="100%">
      <tbody><tr>
        <td class="head" colspan="11">
          <div align="center"  style="color: #5a5e66">
            专利/著作权信息
            <input type="hidden" name="isTea" value="0">
          </div>
        </td>
      </tr>
      <tr><td colspan="11">
        <font color="red">1.管理员审核通过该专利/著作权后，该专利/著作权信息则不可修改。
          <br>2.学生->若要修改专利/著作权信息，请联系审核通过的相应的学院秘书/书记将该专利/著作权状态置为审核不通过后进行修改!
          <br>3.教师->若要修改专利/著作权信息，请联系相应的学院秘书将该专利/著作权状态置为审核不通过后进行修改!
        </font>
      </td>
      </tr>
      <tr>
        <td align="left" width="30%" style="color: #5a5e66" >
          论文发表年度:
        </td>
        <td align="left" colspan="3" style="color: #5a5e66">
          论文发表时间:
          <input type="text" name="beginTime" size="15" value="" onclick="setDay(this);" style="width: 20%" >
          至
          <input type="text" name="endTime" size="15" value="" onclick="setDay(this);" style="width: 20%">
        </td>
        <td align="left" colspan="3" style="color: #5a5e66" width="20%">
          作者位次:
        </td>
        <td colspan="2">
          <input type="button" name="button" value="查询" onclick="search()" class="button">
          <input type="button" name="button" value="导出" onclick="doExport()" class="button">
        </td>
      </tr>
      </tbody></table>
      <el-table
        :data="tableData"
        border
        style="width: 100%">
        <el-table-column
          prop="date"
          label="序号"
          width="50">
        </el-table-column>
        <el-table-column
          prop="name"
          label="选择"
          width="50">
        </el-table-column>
        <el-table-column
          prop="address"
          label="专利/著作权名称"
          width="150">
        </el-table-column>
        <el-table-column
          prop="address"
          label="类型"
          width="80">
        </el-table-column>
        <el-table-column
          prop="address"
          label="专利号/著作登记号"
          width="120">
        </el-table-column>
        <el-table-column
          prop="address"
          label="分类号"
          width="80">
        </el-table-column>
        <el-table-column
          prop="address"
          label="版证日/等级日期"
          width="100">
        </el-table-column>
        <el-table-column
          prop="address"
          label="本人位次"
          width="80"
        >
        </el-table-column>
        <el-table-column
          prop="address"
          label="是否公开"
          width="80"
        >
        </el-table-column>
        <el-table-column
          prop="address"
          label="状态"
          width="100"
        >
        </el-table-column>
        <el-table-column
          prop="address"
          label="操作"
        >
        </el-table-column>
      </el-table></el-tab-pane>
    <el-tab-pane label="成果奖项" name="fifth">
      <table  cellspacing="0" width="100%">
      <tbody><tr>
        <td class="head" colspan="11">
          <div align="center"  style="color: #5a5e66">
            成果奖励信息查看
            <input type="hidden" name="isTea" value="0">
          </div>
        </td>
      </tr>
      <tr><td colspan="11">
        <font color="red">1.限填用于毕业审核的科研成果奖励，以及用于奖学金评审的奖励奖项，不包括教学成果奖等奖励。
          <br>2.填报完成后，请将相关材料交学院审核。审核通过后不可修改，若需修改相关信息，请先联系学院将状态设置为不通过。
        </font>
      </td>
      </tr>
      <tr>
        <td align="left" width="30%" style="color: #5a5e66" >
          论文发表年度:
        </td>
        <td align="left" colspan="3" style="color: #5a5e66">
          论文发表时间:
          <input type="text" name="beginTime" size="15" value="" onclick="setDay(this);" style="width: 20%" >
          至
          <input type="text" name="endTime" size="15" value="" onclick="setDay(this);" style="width: 20%">
        </td>
        <td align="left" colspan="3" style="color: #5a5e66" width="20%">
          作者位次:
        </td>
        <td colspan="2">
          <input type="button" name="button" value="查询" onclick="search()" class="button">
          <input type="button" name="button" value="导出" onclick="doExport()" class="button">
        </td>
      </tr>
      </tbody></table>
      <el-table
        :data="tableData"
        border
        style="width: 100%">
        <el-table-column
          prop="date"
          label="序号"
          width="50">
        </el-table-column>
        <el-table-column
          prop="name"
          label="选择"
          width="50">
        </el-table-column>
        <el-table-column
          prop="address"
          label="获奖名称"
          width="250">
        </el-table-column>
        <el-table-column
          prop="address"
          label="类型"
          width="80">
        </el-table-column>
        <el-table-column
          prop="address"
          label="获奖类别"
          width="100">
        </el-table-column>
        <el-table-column
          prop="address"
          label="获奖等级"
          width="100">
        </el-table-column>
        <el-table-column
          prop="address"
          label="奖励级别"
          width="100">
        </el-table-column>
        <el-table-column
          prop="address"
          label="奖励证书时间"
          width="120"
        >
        </el-table-column>
        <el-table-column
          prop="address"
          label="奖励年度"
          width="80"
        >
        </el-table-column>
        <el-table-column
          prop="address"
          label="本人位次"
          width="80"
        >
        </el-table-column>
        <el-table-column
          prop="address"
          label="数据来源"
          width="80"
        >
        </el-table-column>
        <el-table-column
          prop="address"
          label="状态"
          width="80"
        >
        </el-table-column>
        <el-table-column
          prop="address"
          label="操作"
          width="80"
        >
        </el-table-column>
      </el-table></el-tab-pane>
    <el-tab-pane label="参与项目" name="sixth"><table  cellspacing="0" width="100%">
      <tbody><tr>
        <td class="head" colspan="11">
          <div align="center"  style="color: #5a5e66">
            项目信息
            <input type="hidden" name="isTea" value="0">
          </div>
        </td>
      </tr>
      <tr><td colspan="11">
        <font color="red">1. 填报完成后，请将相关材料交学院审核。审核通过后不可修改，若需修改相关信息，请先联系学院将状态设置为不通过。
          <br>2.学生->若要修改项目信息，请联系审核通过的相应的学院秘书/书记将该项目状态置为审核不通过后进行修改!
          <br>3.教师->若要修改项目信息，请联系相应的学院秘书将该项目状态置为审核不通过后进行修改!
        </font>
      </td>
      </tr>
      <tr>
        <td align="left" width="30%" style="color: #5a5e66" >
          论文发表年度:
        </td>
        <td align="left" colspan="3" style="color: #5a5e66">
          论文发表时间:
          <input type="text" name="beginTime" size="15" value="" onclick="setDay(this);" style="width: 20%" >
          至
          <input type="text" name="endTime" size="15" value="" onclick="setDay(this);" style="width: 20%">
        </td>
        <td align="left" colspan="3" style="color: #5a5e66" width="20%">
          作者位次:
        </td>
        <td colspan="2">
          <input type="button" name="button" value="查询" onclick="search()" class="button">
          <input type="button" name="button" value="导出" onclick="doExport()" class="button">
        </td>
      </tr>
      </tbody></table>
      <el-table
        :data="tableData"
        border
        style="width: 100%">
        <el-table-column
          prop="date"
          label="序号"
          width="50">
        </el-table-column>
        <el-table-column
          prop="name"
          label="选择"
          width="50">
        </el-table-column>
        <el-table-column
          prop="address"
          label="项目名称"
          width="250">
        </el-table-column>
        <el-table-column
          prop="address"
          label="类别"
          width="100">
        </el-table-column>
        <el-table-column
          prop="address"
          label="项目等级"
          width="100">
        </el-table-column>
        <el-table-column
          prop="address"
          label="本人位次"
          width="100">
        </el-table-column>
        <el-table-columns
          prop="address"
          label="是否公开"
          width="100">
        </el-table-columns>
        <el-table-column
          prop="address"
          label="状态"
          width="150"
        >
        </el-table-column>
        <el-table-column
          prop="address"
          label="操作"
        >
        </el-table-column>
      </el-table></el-tab-pane>
  </el-tabs>
</div>
</template>
<script>
export default {
  data() {
    return {
      activeName: 'first',
      tableData: []
    }
  }
}
</script>

<style scoped>
  td{
    height: 2.3em;
    padding:5px;
    border:1px solid #f4f4f5;
  }
  td input{
    box-sizing: border-box;
    margin: 0 !important;
    padding: 2px;
    border: none;
  }
</style>
