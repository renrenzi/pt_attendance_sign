<template>
<div>
  <van-nav-bar
      title="设置"
      left-text="返回"
      left-arrow
      @click-left="onClickLeft"
  />
  <div style="margin: 16px;">
    <van-button round block type="info" native-type="submit" @click="logout">退出登录</van-button>
  </div>
</div>
</template>

<script>
import {removeToken} from "@/js/auth";

export default {
  name: "Logout",
  methods: {
    onClickLeft() {
      if (this.$store.state.detail.roleName === 'student') {
        this.$router.push("/" + "studentCenter")
      } else if (this.$store.state.detail.roleName === 'teacher') {
        this.$router.push("/" + "teacherCenter")
      }
    },
    logout(){
      removeToken()
      this.$router.push("/")
    }
  }
}
</script>

<style scoped>

</style>
