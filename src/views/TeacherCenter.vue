<template>
  <div>
    <van-nav-bar
        title="教师中心"
    />
    <div>
      <div style="height: .3rem"/>
      <van-icon name="user-o" size="1.5rem" color="#bbdbff"/>
      <p>{{ detail.username }}</p>
    </div>
    <div style="background: #EEEEEE;height: .3rem"/>
    <van-cell value="已授课程" is-link to="/teacherCourse"/>
    <div style="background: #EEEEEE;height: .3rem"/>
    <van-cell value="修改密码" is-link to="/studentInfo"/>
    <div style="background: #EEEEEE;height: .3rem"/>
    <van-cell value="设置" is-link to="/logout"/>
    <Footer ref="footer"/>
  </div>
</template>

<script>
import Footer from "@/components/TeacherFooter.vue";

export default {
  name: "Teacherenter",
  data() {
    return {
      detail: this.$store.state.detail

    }
  },
  components: {
    Footer,
  }
}
</script>

<style scoped>
.demo-nav__title {
  font-weight: 500;
  font-size: 17px;
  text-transform: capitalize;
}
</style>
