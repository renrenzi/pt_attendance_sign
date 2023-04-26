<template>
  <div>
    <van-divider :style="{ color: '#1989fa', borderColor: '#1989fa', padding: '0 16px' }">
      请假
    </van-divider>
    <van-row>
      <van-col span="8" offset="16">
        <van-button size="normal" color="linear-gradient(to right, #4bb0ff, #6149f6)" @click="addAttendance">
          我要请假
        </van-button>
      </van-col>
    </van-row>
    <van-divider :style="{ color: '#1989fa', borderColor: '#1989fa', padding: '0 16px' }">
      我的请假列表
    </van-divider>
    <van-pull-refresh v-model="refreshing" @refresh="onRefresh">
      <van-list
          :loading="loading"
          :finished="finished"
          finished-text="没有更多了"
          @load="getAttendanceList"
      >
        <van-cell v-for="item in list" :key="item.id" is-link :to="{path:'/infoAttendance', query: item}">
          我的请假申请
          <van-row>
            <van-col span="6">
             姓名：
            </van-col>
            <van-col>
              {{item.nickname}}
            </van-col>
          </van-row>

          <van-row>
            <van-col span="6">
              请假详情：
            </van-col>
            <van-col>
              {{item.info}}
            </van-col>
          </van-row>

          <van-row>
            <van-col span="6">
              请假日期：
            </van-col>
            <van-col>
              {{item.createDate | moment}}
            </van-col>
          </van-row>

          <van-row>
            <van-col span="6">
              状态：
            </van-col>
            <van-col>
              <div v-if="!item.status">
                <van-switch v-model="item.status" disabled size="12px"/>
                待审批
              </div>

              <div v-if="item.status">
                <van-switch v-model="item.status" disabled size="12px"/>
                已完成
              </div>
            </van-col>
          </van-row>


        </van-cell>

      </van-list>
    </van-pull-refresh>
    <studentFooter/>
  </div>
</template>

<script>
import studentFooter from "@/components/StudentFooter.vue";
import {pageLeaveList} from "@/api/leave";

export default {
  name: "Attendance",
  components: {
    studentFooter
  },
  data() {
    return {
      list: [],
      loading: false,
      finished: false,
      refreshing: false
    }
  },
  created() {
    this.getAttendanceList()
  },
  methods: {
    addAttendance() {
      this.$router.push("/addAttendance");
    },
    getInfo() {

    },
    getAttendanceList() {
      pageLeaveList({
        leave: {
          studentId: this.$store.state.detail.userId
        },
        pageNum: 1,
        pageSize: 20
      }).then(res => {

        if (res.code === 2000) {
          this.list = res.data.leaveList

          this.loading = false
          this.refreshing = false
          this.finished = true
        }
      })
    },
    onRefresh() {
      // 清空列表数据
      this.finished = false
      this.list = []
      // 重新加载数据
      // 将 loading 设置为 true，表示处于加载状态
      this.loading = true
      this.getAttendanceList()
    }
  }
}
</script>

<style scoped>

</style>
