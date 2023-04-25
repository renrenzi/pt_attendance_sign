<template>
  <div>
    <van-popup v-model="show" position="bottom" :style="{ height: '60%' }">
      <div>
        <van-datetime-picker
            v-model="currentDate"
            type="date"
            title="选择年月日"
            :min-date="minDate"
            :max-date="maxDate"
            @confirm="confirm()"
        />
      </div>
    </van-popup>
    <van-popup v-model="showTeachName" position="bottom" :style="{ height: '40%' }">
      <div>
        <van-picker
            title="请选择老师"
            show-toolbar
            :columns="teacherNameList"
            @confirm="onConfirmTeacher"
            @cancel="onCancelTeacher"
            @change="onChangeTeacher"
        />
      </div>
    </van-popup>
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
            v-model="startDate"
            name="开始日期"
            label="开始日期"
            placeholder="开始日期"
            @click="show=true"
            @confirm="show=false; isEnd = false"
            disabled
        />
        <van-field
            v-model="endDate"
            name="结束日期"
            label="结束日期"
            placeholder="结束日期"
            @click="show=true; isEnd = true"
            @confirm="show=false"
            disabled
        />
        <van-divider :style="{ color: '#1989fa', borderColor: '#1989fa', padding: '0 16px' }"/>
        <van-field
            v-model="teacherName"
            name="审批人"
            label="审批人"
            placeholder="审批人"
            @click="showTeachName=true"
            disabled

        />
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
import {pageTeacherList} from "@/api/teacher";

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
      startDate: '',
      endDate: '',
      isEnd: false,
      teacherNameList: [],
      showTeachName: false,
      teacherName: ''
    }
  },
  created() {
    this.getTeacherList()
  },
  methods: {
    getTeacherList() {
      pageTeacherList({
        pageNum: 1,
        pageSize: 100
      }).then(res => {
        if (res.code === 2000) {
          for (let i = 0; i < res.data.teacherList.length; i++) {
            this.teacherNameList.push(res.data.teacherList[i].username)
          }
        }
      })
    },
    onChangeTeacher() {

    },
    onCancelTeacher() {
      this.showTeachName = false

    },
    onConfirmTeacher(value) {
      this.teacherName = value
      this.showTeachName = false
    },
    timeFormat(time) { // 时间格式化 2019-09-08
      let year = time.getFullYear();
      let month = time.getMonth() + 1;
      let day = time.getDate();
      return year + '年' + month + '月' + day + '日'
    },
    confirm() {
      if (this.isEnd) {
        this.endDate = this.timeFormat(this.currentDate)
      } else {
        this.startDate = this.timeFormat(this.currentDate)
      }
      this.show = false;
    },
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
