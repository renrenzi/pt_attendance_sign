<template>
  <div>
    <van-nav-bar
        title="学生中心"
    />
    <div>
      <div style="height: .3rem"/>
      <van-icon name="user-o" size="1.5rem" color="#bbdbff"/>
      <p>{{ detail.username }}</p>
    </div>
    <div style="background: #EEEEEE;height: .3rem"/>
    <!--        <van-cell value="各科考勤分" is-link to="/attendanceScore" />-->
    <van-cell value="出勤情况统计" is-link to="/attendanceList"/>
    <van-cell value="选课列表" is-link to="/selectedCourseList"/>
    <div style="background: #EEEEEE;height: .3rem"/>
    <van-cell value="修改密码" is-link to="/studentInfo"/>
    <div style="background: #EEEEEE;height: .3rem"/>
    <van-cell value="设置" is-link to="/logout"/>
    <studentFooter/>
  </div>
</template>

<script>
import studentFooter from '@/components/StudentFooter'

export default {
  name: "StudentCenter",
  data() {
    return {
      detail: this.$store.state.detail
    }
  },
  components: {
    studentFooter
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
