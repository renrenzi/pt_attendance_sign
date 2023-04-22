<template>
<div>
  <van-nav-bar
      title="出勤状态统计"
      left-text="返回"
      left-arrow
      @click-left="onClickLeft"
  />
  <van-list
      :loading="loading"
      :finished="finished"
      finished-text="没有更多了"
      @load="onLoad"
  >
    <van-cell v-for="item in attendanceScoreList" :key="item" :title="item" />
  </van-list>

</div>
</template>

<script>
export default {
  name: "AttendanceList",

  data() {
    return {
      attendanceScoreList: '',
      loading: '',
      finished: '',
    };
  },
  methods: {
    onClickLeft() {
      this.$router.push("/" + "studentCenter")
    },
    onLoad (){
      // 异步更新数据
      // setTimeout 仅做示例，真实场景中一般为 ajax 请求
      setTimeout(() => {
        for (let i = 0; i < 10; i++) {
          this.list.value.push(this.list.value.length + 1);
        }

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
