<template>
  <div>
    <van-nav-bar
        title="请假详情"
        left-text="返回"
        left-arrow
        @click-left="onClickLeft"
    />
    <van-divider :style="{ color: '#1989fa', borderColor: '#1989fa', padding: '0 16px' }">
      请假状态
    </van-divider>
    <van-steps :active="active">
      <van-step>待审核</van-step>
      <van-step>待审批</van-step>
      <van-step>已完成</van-step>
      <van-step>已取消</van-step>
    </van-steps>
    <van-divider :style="{ color: '#1989fa', borderColor: '#1989fa', padding: '0 16px' }">
    </van-divider>
    <van-form>
      <van-cell-group inset>
        <van-field
            v-model="username"
            name="姓名"
            label="姓名"
            placeholder="姓名"
            disabled
            :rules="[{ required: true, message: '请填写姓名' }]"
        />
        <van-field
            v-model="info"
            name="请假详情"
            label="请假详情"
            placeholder="请假详情"
            disabled
            :rules="[{ required: true, message: '请假详情' }]"
        />
        <van-field
            v-model="remark"
            name="请假备注"
            label="请假备注"
            placeholder="请假备注"
            disabled
            :rules="[{ required: true, message: '请假备注' }]"
        />
        <van-field
            v-model="leaveDate"
            name="请假日期"
            label="请假日期"
            disabled
            placeholder="请假日期"
        >

        </van-field>
        <van-popup :show="show" position="bottom"
                   :style="{ height: '30%' }">test
        </van-popup>
        <van-divider :style="{ color: '#1989fa', borderColor: '#1989fa', padding: '0 16px' }">
        </van-divider>
        <van-field
            v-model="approvalName"
            name="审批人"
            label="审批人"
            disabled
            placeholder="审批人"
        >

        </van-field>
        <van-divider :style="{ color: '#1989fa', borderColor: '#1989fa', padding: '0 16px' }">
        </van-divider>
      </van-cell-group>
      <div v-if="this.$store.state.detail.roleName === 'teacher'">
        <div style="margin: 16px;" v-if="!status">
          <van-row>
            <van-col span="6" offset="6">
              <van-button type="primary"  size="small" @click="approvalLeave">
                通过
              </van-button>
            </van-col>
            <van-col span="6" offset="2">
              <van-button  type="danger" size="small" @click="rejectLeave">
                拒绝
              </van-button>
            </van-col>

          </van-row>

        </div>
        <div style="margin: 16px;" v-if="status">
          <van-button round block type="danger" native-type="submit" @click="cancel">
            取消
          </van-button>
        </div>
      </div>

    </van-form>

<!--    <studentFooter/>-->
  </div>
</template>

<script>
import {updateLeaveInfo} from "@/api/leave";
import {Notify} from "vant";

export default {
  name: "AddAttendance",
  components: {

  },
  data() {
    return {
      username: this.$store.state.detail.username,
      info: '',
      remark: '',
      status: false,
      studentId: '',
      nickname: '',
      userName: '',
      id: 0,
      currentDate: new Date(),
      minDate: new Date(),
      maxDate: new Date(2025, 5, 1),
      show: false,
      leaveDate: this.currentDate,
      active: 1,
      approvalName: 'teacher'
    }
  },
  created() {
    this.getInfo()
  },
  methods: {
    cancel(){
      // todo 调api
      Notify({ type: 'success', message: '成功'});
      this.$router.push("/approval")
    },
    rejectLeave() {
      // todo 调api
      Notify({ type: 'success', message: '成功'});
      this.$router.push("/approval")
    },
    approvalLeave(){
      updateLeaveInfo({
        id: this.id,
        studentId: this.studentId,
        userName: this.userName,
        nickname: this.nickname,
        createDate: this.leaveDate,
        info: this.info,
        remark: this.remark,
        status: !this.status
      }).then(res => {
        if (res.code === 2000){
          this.$router.push("/approval")
          Notify({ type: 'success', message: res.message });
        }
      })
    },
    getInfo(){
      console.info(this.$route.query)
      this.username = this.$route.query.nickname
      this.info = this.$route.query.info
      this.remark = this.$route.query.remark
      this.leaveDate = this.$route.query.createDate
      this.status = this.$route.query.status
      this.studentId = this.$route.query.studentId
      this.id = this.$route.query.id
      this.nickname = this.$route.query.nickname
      this.userName = this.$route.query.userName
      if (this.$route.query.status) {
        // todo 使用真实数据
        this.active = 2
      }
    },
    onClickLeft() {
      if (this.$store.state.detail.roleName === 'student') {
        this.$router.push("/" + "attendance")
      } else if (this.$store.state.detail.roleName === 'teacher') {
        this.$router.push("/" + "approval")
      }
    },
    onSubmit() {
      updateLeaveInfo({
        studentId: this.$store.state.detail.userId,
        info: this.info,
        remark: this.remark
      }).then(res => {
        if (res.code === 2000) {
          Notify({type: 'success', message: res.message});
          if (this.$store.state.detail.roleName === 'student') {
            this.$router.push("/" + "attendance")
          } else if (this.$store.state.detail.roleName === 'teacher') {
            this.$router.push("/" + "approval")
          }
        }
      })
    },
    showPopup() {
      this.show = true
    }
  }
}
</script>

<style scoped>

</style>
