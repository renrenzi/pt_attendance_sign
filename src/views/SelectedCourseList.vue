<template>
  <div>
    <van-nav-bar
        title="选课列表"
        left-text="返回"
        left-arrow
        @click-left="onClickLeft"
    />
    <table align="center" width="100%">
      <tr>
        <td>学号</td>
        <td>姓名</td>
        <td>课程</td>
        <td>授课老师</td>
        <td>选课人数</td>
        <td>最大选课人数</td>
      </tr>

      <tr v-for="(i,inx) in list" :key="inx">
        <td>{{ i.userName }}</td>
        <td>{{ i.nickName }}</td>
        <td>{{ i.courseName }}</td>
        <td>{{ "测试教师" + inx }}</td>
        <td>{{ i.selectedNum }}</td>
        <td>{{ i.maxNum }}</td>

      </tr>
    </table>
  </div>
</template>

<script>
import {pageSelectedCourseList} from "@/api/selectedCourse";

export default {
  name: "SelectedCourseList",
  data() {
    return {
      list: []
    }
  },
  created() {
    this.getSelectedCourseList()
  },
  methods: {
    getSelectedCourseList() {
      pageSelectedCourseList({
        pageNum: 1,
        pageSize: 10,
        selectedCourse: {
          studentId: this.$store.state.userId
        }
      }).then(res => {
        if (res.code === 2000) {
            this.list = res.data.selectedCourseList
        }
      })
    },
    onClickLeft() {
      if (this.$store.state.detail.roleName === 'student') {
        this.$router.push("/" + "studentCenter")
      } else if (this.$store.state.detail.roleName === 'teacher') {
        this.$router.push("/" + "teacherCenter")
      }
    },
  }
}
</script>

<style scoped>

</style>
