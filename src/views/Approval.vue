<template>
  <div>
    <van-tabs :active="active" type="card">
      <van-tab title="待审批" :badge="list1.length">
        <van-list
            :loading="loading"
            :finished="finished"
            finished-text="没有更多了"
            @load="getAttendanceList"
        >
          <van-cell v-for="item in list1" :key="item.id" is-link :to="{path:'/infoAttendance', query: item}">
             请假申请
             <van-row>
               <van-col span="4">
                 姓名：
               </van-col>
               <van-col>
                 {{item.nickname}}
               </van-col>
             </van-row>
             <van-row>
               <van-col span="4">
                 状态：
               </van-col>
               <van-col>
                 <van-tag type="primary">待审批</van-tag>
               </van-col>
             </van-row>
          </van-cell>

        </van-list>
      </van-tab>
      <van-tab title="已完成" :badge="list2.length">
        <van-list
            :loading="loading"
            :finished="finished"
            finished-text="没有更多了"
            @load="getAttendanceList"
        >

          <van-cell v-for="item in list2" :key="item.id" is-link :to="{path:'/infoAttendance', query: item}">

              请假申请
              <van-row>
                <van-col span="4">
                  姓名：
                </van-col>
                <van-col>
                  {{item.nickname}}
                </van-col>
              </van-row>
              <van-row>
                <van-col span="4">
                  状态：
                </van-col>
                <van-col>
                  <van-tag type="success">已完成</van-tag>
                </van-col>
              </van-row>
          </van-cell>

        </van-list>
      </van-tab>
      <van-tab title="已取消" :badge="list3.length = 100" max="99">
        <van-list
            :loading="loading"
            :finished="finished"
            finished-text="没有更多了"
            @load="getAttendanceList"
        >

          <van-cell v-for="item in list2" :key="item.id" is-link :to="{path:'/infoAttendance', query: item}">

            请假申请
            <van-row>
              <van-col span="4">
                姓名：
              </van-col>
              <van-col>
                {{item.nickname}}
              </van-col>
            </van-row>
            <van-row>
              <van-col span="4">
                状态：
              </van-col>
              <van-col>
                <div>
                  <van-tag type="danger">已取消</van-tag>
                </div>
              </van-col>
            </van-row>
          </van-cell>

        </van-list>
      </van-tab>
    </van-tabs>
    <Footer ref="footer"/>
  </div>

</template>

<script>
import Footer from "@/components/TeacherFooter.vue";
import {pageLeaveList} from "@/api/leave";

export default {
  name: "approval",
  components: {
    Footer,
  },
  data(){
    return {
      active: 0,
      loading: false,
      finished: false,
      list1: [],
      list2: [],
      list3: []
    }
  },
  created() {
  },
  methods: {
    getAttendanceList() {
      pageLeaveList({
        pageNum: 1,
        pageSize: 100
      }).then(res => {

        if (res.code === 2000) {
          const list = res.data.leaveList
          for (let i = 0; i < list.length; i++) {
            if (list[i].status) {
              this.list2.push(list[i])
            } else {
              this.list1.push(list[i])
            }
          }
          this.loading = false
          this.refreshing = false
          this.finished = true
        }
      })
    },
  }
}
</script>

<style scoped>

</style>
