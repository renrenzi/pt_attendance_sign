<template>
    <div class="Login">
        <div style="height: 2rem"/>
        <van-icon name="user-o" size="1.5rem" color="#bbdbff"/>
        <van-form @submit="onSubmit" style="margin: .5rem">
            <van-field
                    v-model="username"
                    name="userName"
                    label="用户名"
                    placeholder="请输入用户名"
                    :rules="[{ required: true, message: '用户名不能为空' }]"
                    size="large"
                    label-align="center"
            />
            <van-field
                    v-model="password"
                    type="password"
                    name="userPassword"
                    label="密码"
                    placeholder="请输入密码"
                    :rules="[{ required: true, message: '密码不能为空' }]"
                    size="large"
                    label-align="center"
            />
            <van-field
                    v-model="identity"
                    readonly
                    clickable
                    name="identity"
                    label="登录身份"
                    :value="identity"
                    placeholder="请选择身份"
                    @click="showPicker = true"
            />

            <van-popup v-model="showPicker" position="bottom">
                <van-picker
                        show-toolbar
                        :columns="columns"
                        @cancel="showPicker = false"
                        @confirm="onConfirm"
                />
            </van-popup>

            <div style="margin: .8rem;">
                <van-button round block type="info" native-type="submit">
                    提交
                </van-button>
            </div>
        </van-form>
    </div>
</template>

<script>
    import {miniLoginInfo} from "@/api/admin";
    import { setToken } from '@/js/auth'
    export default {
        name: "Login",

        data() {
            return {
                username: 'student',
                password: '123456',
                columns: ['student','teacher','manager'],
                identity: '',
                showPicker: false,
            };
        },
        methods: {
            onSubmit() {
                miniLoginInfo({
                  userName: this.username,
                  password: this.password,
                  roleName: this.identity
                }).then(res => {
                  setToken(res.data)
                  if (this.identity === 'student') {
                    this.$router.push("/" + "studentHome")
                  }else if (this.identity === 'teacher') {
                    this.$router.push("/" + "teacherHome")
                  }else {
                    this.$router.push("/" + "studentHome")
                  }
                })
            },

            //登录身份选择器确认的点击事件
            onConfirm(value) {
                this.identity = value;
                this.showPicker = false;
            },

        },
    }
</script>

<style scoped>

</style>
