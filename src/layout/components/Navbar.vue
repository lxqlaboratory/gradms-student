<template>
  <div class="navbar">

    <!--    <breadcrumb class="breadcrumb-container" />-->

    <div class="right-menu">
      <img style="margin:-8px 3% 0 3%;height: 48px;vertical-align: middle" src="@/assets/login/logo.png">
      <span style="font-size: 20px;">{{ $t('login.manaegerTitle') }}</span>
      <lang-select style="position: absolute;right: 18%;top:-2px" />
      <div class="btn-fullscreen" style="position: absolute;right: 15%;top: 0px" @click="handleFullScreen">
        <el-tooltip effect="dark" :content="fullscreen?`取消全屏`:`全屏`" placement="bottom">
          <svg-icon v-if="fullscreen" icon-class="exit-fullscreen" />
          <svg-icon v-else icon-class="fullscreen" />
        </el-tooltip>
      </div>
      <el-dropdown class="avatar-container" style="position: absolute;right: 1%;top:-2px;float: right" trigger="click">
        <div class="avatar-wrapper">
          <!--<img src="@/assets/main/简历.png" class="user-avatar" style="vertical-align: middle; ">-->
          <span style="font-size: 9px;color: white">{{ this.name }}</span>
        </div>
        <el-dropdown-menu slot="dropdown" class="user-dropdown" style="margin-top: 0px">
          <router-link to="/dashboard">
            <el-dropdown-item>
              Home
            </el-dropdown-item>
          </router-link>
          <el-dropdown-item divided>
            <span style="display:block;" @click="logout">Log Out</span>
          </el-dropdown-item>
        </el-dropdown-menu>
      </el-dropdown>
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import Breadcrumb from '@/components/Breadcrumb'
import Hamburger from '@/components/Hamburger'
import LangSelect from '@/components/LangSelect'

export default {
  components: {
    Breadcrumb,
    Hamburger,
    LangSelect
  },
  data() {
    return {
      fullscreen: false
    }
  },
  computed: {
    ...mapGetters([
      'sidebar',
      'avatar',
      'name'
    ])
  },
  mounted() {
    var that = this
    window.onload = async function(e) { // 刷新时弹出提示
      console.log('======')
      await that.$store.dispatch('user/getInfo')
    }
  },
  methods: {
    // 全屏事件
    handleFullScreen() {
      const element = document.documentElement
      if (this.fullscreen) {
        if (document.exitFullscreen) {
          document.exitFullscreen()
        } else if (document.webkitCancelFullScreen) {
          document.webkitCancelFullScreen()
        } else if (document.mozCancelFullScreen) {
          document.mozCancelFullScreen()
        } else if (document.msExitFullscreen) {
          document.msExitFullscreen()
        }
      } else {
        if (element.requestFullscreen) {
          element.requestFullscreen()
        } else if (element.webkitRequestFullScreen) {
          element.webkitRequestFullScreen()
        } else if (element.mozRequestFullScreen) {
          element.mozRequestFullScreen()
        } else if (element.msRequestFullscreen) {
          // IE11
          element.msRequestFullscreen()
        }
      }
      this.fullscreen = !this.fullscreen
    },

    async logout() {
      await this.$store.dispatch('user/logout')
      this.$router.push(`/`)
    }
  }
}
</script>

<style lang="scss" scoped>
.navbar {
  height: 64px;
  overflow: hidden;
  position: relative;
  background: #a50001;
  box-shadow: 0 1px 4px rgba(0,21,41,.08);

  .breadcrumb-container {
    float: left;
  }

  .right-menu {
    float: left;
    height: 100%;
    line-height: 64px;
    color: #fff;

    .setting-icon{
      height: 48px;
    }

    .right-menu-item {
      display: inline-block;
      padding: 0 8px;
      height: 100%;
      font-size: 18px;
      color: #5a5e66;
      vertical-align: center;

      &.hover-effect {
        /*cursor: pointer;*/
        transition: background .3s;

        &:hover {
          background: rgba(214, 180, 78, 0.91)
        }
      }
    }

    .btn-fullscreen{
      margin-right: 5px;
      font-size: 16px;
      position: absolute;
      width: 24px;
      height: 24px;
      text-align: center;
      border-radius: 15px;
      cursor: pointer;
    }

    .avatar-container {
      margin-right: 0px;
      &:hover{
        background: #590305;
      }
      .avatar-wrapper {
        cursor: pointer;
        margin-top: 0px;
        margin-left: 10px;
        margin-right: 10px;
        position: relative;

        &:hover{
          background: #590305;
        }
        .user-avatar {
          /*cursor: pointer;*/
          width: 40px;
          height: 40px;
          border-radius: 50%;
        }
      }
    }
  }

}
</style>
