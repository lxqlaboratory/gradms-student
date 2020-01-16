<template>
  <div v-loading="!currentRole" class="dashboard-container">
    <component :is="currentRole" />
  </div>
</template>

<script>
import check from './checkTrainPlan'
import develop from './developTrainPlan'
import { showCultivatePlan } from '@/api/checkCultivationScheme'
export default {
  name: 'Index',
  components: { check, develop },
  data() {
    return {
      currentRole: ''
    }
  },
  created() {
    this.fetchData()
  },
  methods: {
    fetchData() {
      showCultivatePlan().then(res => {
        this.currentRole = res.data.planState === 1 ? 'check' : 'develop'
      })
    }
  }
}
</script>

<style scoped>

</style>
