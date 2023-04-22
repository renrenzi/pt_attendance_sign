<template>
  <div>
    <van-form @submit="onSubmit">
      <van-nav-bar
          title="个人信息修改"
          left-text="返回"
          left-arrow
          @click-left="onClickLeft"
      />
      <van-cell-group inset>
        <van-field
            v-model="password"
            type="password"
            name="密码"
            label="密码"
            placeholder="密码"
            :rules="[{ required: true, message: '请填写密码' }]"
        />
        <van-field
            v-model="confirmPassword"
            type="password"
            name="确认密码"
            label="确认密码"
            placeholder="确认密码"
            :rules="[{ required: true, message: '请填写确认密码' }]"
        />
      </van-cell-group>
      <div style="margin: 16px;">
        <van-button round block type="primary" native-type="submit">
          提交
        </van-button>
      </div>
    </van-form>
  </div>
</template>

<script>


import {editAdminInfo} from "@/api/admin";
import {Notify} from "vant";

export default {
  name: "StudentInfo",
  data() {
    return {
      username:'',
      password: '',
      confirmPassword: ''
    };
  },
  methods: {
    onClickLeft() {
      this.$router.push("/" + "studentCenter")
    },
    onSubmit(){
      editAdminInfo({
        adminId: this.$store.state.detail.adminId,
        password: this.password
      }).then(res => {
        if (res) {
          Notify({ type: 'success', message: res.message });
          this.$router.push('/')
        }
      })
    }
  },
}
</script>

<style scoped>

</style>
