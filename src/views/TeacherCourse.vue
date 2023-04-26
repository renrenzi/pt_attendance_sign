<template>
  <div>
    <van-nav-bar
        title="当前授课列表"
        left-text="返回"
        left-arrow
        @click-left="onClickLeft"
    />
    <van-collapse v-model="activeName" accordion>
      <van-collapse-item v-for="(item, index) in list" :key="index"  :title="item.name" :name="index">
        <van-skeleton avatar :row="1" :loading="false">
          <van-cell-group inset>
            <van-cell :title="item.name" :value="item.courseDate | moment" :label="item.maxNum" />
          </van-cell-group>
        </van-skeleton>
      </van-collapse-item>
    </van-collapse>
  </div>
</template>

<script>
import {pageCourseList} from "@/api/course";

export default {
  name: "TeacherCourse",
  data() {
    return {
      activeName: 1,
      list: [],
      condition: {
        pageNum: 1,
        pageSize: 10,
        course: {
          teacherId: this.$store.state.detail.userId,
          name: null,
        }
      }
    }
  },
  created() {
    this.getCourseList()
  },
  methods: {
    onClickLeft() {
      this.$router.push("/" + "teacherCenter")
    },
    getCourseList() {
      pageCourseList(this.condition).then(res => {
        if (res.code === 2000) {
          this.list = res.data.pageCourseDtoList
        }
      })
    }
  }
}
</script>

<style scoped>

</style>
