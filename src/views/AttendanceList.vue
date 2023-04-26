<template>
<div>
  <van-nav-bar
      title="出勤状态统计"
      left-text="返回"
      left-arrow
      @click-left="onClickLeft"
  />
  <form action="/">
    <van-search
        v-model="value"
        show-action
        placeholder="请输入搜索关键词"
        @search="onSearch"
        @cancel="onCancel"
    />
  </form>
  <table align="center" width="100%">
    <tr>
      <td>课程</td>
      <td>时间</td>
      <td>授课老师</td>
      <td>签到状态</td>
      <td>异常原因</td>
    </tr>
    <tr v-for="(i,inx) in attendanceScoreList" :key="inx">
      <td>{{i.courseName}}</td>
      <td>{{i.date | moment}}</td>
      <td>{{"测试教师"+inx}}</td>
      <td><p :style="i.type === '正常'?'color:green':'color:red'">{{i.type}}</p></td>
      <td><p :style="i.type === '正常'?'color:black':'color:red'">{{i.message}}</p></td>
    </tr>
  </table>

</div>
</template>

<script>
import {pageAttendanceList} from "@/api/attendance";

export default {
  name: "AttendanceList",

  data() {
    return {
      attendanceScoreList: [],
      loading: '',
      finished: '',
      value: null,
      condition: {
        pageNum: 1,
        pageSize: 5,
        attendance: {
          studentId: this.$store.state.detail.userId
        }
      }
    };
  },
  created() {
    this.pageAttendance()
  },
  methods: {
    onCancel() {
      this.condition.attendance.name = null
    },
    onSearch() {
      this.condition.attendance.name = this.value
      this.attendanceScoreList = []
      this.pageAttendance()
    },
    onClickLeft() {
      this.$router.push("/" + "studentCenter")
    },
    pageAttendance() {
      pageAttendanceList(this.condition).then(res => {
        this.attendanceScoreList = res.data.attendanceList;
      })
    },
    onLoad (){
      // 异步更新数据
      // setTimeout 仅做示例，真实场景中一般为 ajax 请求

      setTimeout(() => {


        // 加载状态结束
        this.loading.value = false;

        // 数据全部加载完成
        if (this.list.value.length >= 40) {
          this.finished.value = true;
        }
      }, 1000);
    }
  }
}
</script>

<style scoped>

</style>
