<template>
    <div class="StudentChooseClockIn">
        <!--登录失败的弹窗-->
        <van-popup v-model="failureShow" position="top" :style="{ height: '60%' }">
            <div>
                <div>
                    <van-icon name="failure" size="2.5rem" color="green" style="margin: 0.6rem 0 0.3rem 0"/>
                </div>
                <div>
                    <p style="font-size: 0.4rem; margin: .3rem 0 .5rem 0">{{failureMessage}}</p>
                </div>
            </div>
        </van-popup>
      <!--登陆成功的弹窗-->
        <van-popup v-model="successShow" position="top" :style="{ height: '60%' }">
          <div>
            <div>
              <van-icon name="completed" size="2.5rem" color="#07c160" style="margin: 0.6rem"/>
            </div>
            <div>
              <p style="font-size: 0.4rem">{{successMessage}}</p>
            </div>
          </div>
        </van-popup>
        <div style="height: 1rem"/>
        <majorSelect ref="MajorSelect"/>
        <div style="height: 1rem"/>
        <van-button size="normal" color="linear-gradient(to right, #4bb0ff, #6149f6)" @click="submit">确认签到选项
        </van-button>
        <Footer/>
    </div>
</template>

<script>
    import majorSelect from '@/components/MajorSelect'
    import Footer from '@/components/StudentFooter'
    import {punchTheClock} from "@/api/attendance";

    export default {
        name: "StudentChooseClockIn",
        components: {
            majorSelect,
            Footer
        },
        data() {
            return {
                failureShow: false,
                failureMessage: '',
                successShow: false,
                successMessage: ''
            }
        },

        methods: {
            submit() {
                this.$refs.MajorSelect.init();
                punchTheClock({
                  'adminId' : 167,
                  'courseId' : 50,
                  'clockingTime' : new Date()
                }).then(res => {
                  console.info(res)
                  this.successShow = true;
                  this.successMessage = '签到成功';
                })

            }
        },

    }

</script>

<style scoped>

</style>
