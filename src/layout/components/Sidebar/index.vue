<template>
  <div class="has-logo">
    <el-scrollbar wrap-class="scrollbar-wrapper" style="position: relative">
      <div style="padding: 18px 0px;display: flex;justify-content: flex-end">
      <span style="flex: 1 1 calc(100% - 50px);margin-left: 20px;color:rgba(255, 255, 255, 0.75);font-size: 15px;white-space:nowrap;">{{ $t('menu.application_menu') }}</span>
      <hamburger :is-active="sidebar.opened" class="hamburger-container" @toggleClick="toggleSideBar" />
    </div>
      <el-menu
        :default-active="activeMenu"
        :collapse="isCollapse"
        :background-color="variables.menuBg"
        :text-color="variables.menuText"
        :unique-opened="false"
        :active-text-color="variables.menuActiveText"
        :collapse-transition="false"
        mode="vertical"
      >
        <sidebar-item v-for="route in routes" v-if="validateRole(route)" :key="route.path" :item="route" :base-path="route.path"/>
      </el-menu>
    </el-scrollbar>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import Logo from './Logo'
import SidebarItem from './SidebarItem'
import variables from '@/styles/variables.scss'
import Hamburger from '@/components/Hamburger'

export default {
  components: { SidebarItem, Logo,Hamburger },
  computed: {
    ...mapGetters([
      'sidebar',
      'roles'
    ]),
    routes() {
      return this.$router.options.routes
    },
    activeMenu() {
      const route = this.$route
      const { meta, path } = route
      // if set path, the sidebar will highlight the path you set
      if (meta.activeMenu) {
        return meta.activeMenu
      }
      return path
    },

    variables() {
      return variables
    },
    isCollapse() {
      return !this.sidebar.opened
    }
  },
  methods: {
    validateRole: function(routeItem) { //验证用户权限
      if (routeItem.meta == null || routeItem.meta.roles == null) {
        return true
      }
      if (routeItem.meta.roles === this.roles) {
        return true
      }
      for (let role of routeItem.meta.roles) {
        return role == this.roles
      }
    },
    toggleSideBar() {
      this.$store.dispatch('app/toggleSideBar')
    }
  }
}
</script>
