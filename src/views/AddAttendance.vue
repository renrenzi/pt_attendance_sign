<template>
  <div>
    <van-nav-bar
        title="请假"
        left-text="返回"
        left-arrow
        @click-left="onClickLeft"
    />
    <van-form @submit="onSubmit">
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
            :rules="[{ required: true, message: '请假详情' }]"
        />
        <van-field
            v-model="remark"
            name="请假备注"
            label="请假备注"
            placeholder="请假备注"
            :rules="[{ required: true, message: '请假备注' }]"
        />
        <van-field
            v-model="leaveDate"
            name="请假日期"
            label="请假日期"
            placeholder="请假日期"
        >

        </van-field>
        <van-popup :show="show" position="bottom"
                   :style="{ height: '30%' }">test
        </van-popup>
      </van-cell-group>
      <div style="margin: 16px;">
        <van-button round block type="primary" native-type="submit">
          提交
        </van-button>
      </div>
    </van-form>
    <studentFooter/>
  </div>
</template>

<script>
import studentFooter from "@/components/StudentFooter.vue";
import {updateLeaveInfo} from "@/api/leave";
import {Notify} from "vant";

export default {
  name: "AddAttendance",
  components: {
    studentFooter
  },
  data() {
    return {
      username: this.$store.state.detail.username,
      info: '',
      remark: '',
      currentDate: new Date(),
      minDate: new Date(),
      maxDate: new Date(2025, 5, 1),
      show: false,
      leaveDate: this.currentDate
    }
  },
  methods: {
    onClickLeft() {
      this.$router.push("/attendance")
    },
    onSubmit() {
      updateLeaveInfo({
        studentId: this.$store.state.detail.userId,
        info: this.info,
        remark: this.remark
      }).then(res => {
        if (res.code === 2000) {
          Notify({type: 'success', message: res.message});
          this.$router.push("/attendance")
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
