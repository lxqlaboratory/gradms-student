<template>
  <div class="container">
    <div style="color: #9b0d14">
      <!--<el-button @click="window.location.href='/gradms/api/student/printStudyProve'" download="educationCertificate.pdf" >{{$t('route.dyzxzm')}}</el-button>-->
     <a href="/gradms/api/student/printStudyProve" download="educationCertificate.pdf" >{{$t('route.dyzxzm')}}</a>
    </div>
  </div>
</template>

<script>
export default {

}
</script>

<style scoped>

</style>
