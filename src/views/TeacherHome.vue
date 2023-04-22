<template>
    <div class="TeacherHome">
        <!--粘性置顶广告-->
        <van-sticky>
            <van-notice-bar :text="message" left-icon="volume-o" style="margin:0 0 .2rem 0"/>
        </van-sticky>
      <van-swipe class="my-swipe" :autoplay="3000" lazy-render>
        <van-swipe-item v-for="image in images" :key="image">
          <van-image
              width="100%"
              height="300"
              :src="image"
          />
        </van-swipe-item>
      </van-swipe>
      <van-divider :style="{ color: '#1989fa', borderColor: '#1989fa', padding: '0 16px' }">
        欢迎进入考勤管理系统：{{detail.nickName}}
      </van-divider>
        <!--吸底-->
        <Footer ref="footer"/>
    </div>
</template>

<script>
    import Footer from "@/components/TeacherFooter";

    export default {
        name: "TeacherHome",

        components: {
            Footer,
        },
        data(){
            return{
                message: '根据上级规定，对在校大学生进行更加严格的教育管理，请各位师生遵守规定',
                images : [
                  'https://tse2-mm.cn.bing.net/th/id/OIP-C.JxJkJ3TLnJzYZVBAIA2fpgHaEb?w=301&h=180&c=7&r=0&o=5&dpr=2.2&pid=1.7',
                  'https://tse3-mm.cn.bing.net/th/id/OIP-C.7IXeOPOFjRRQOR-pvgWz2AHaMi?w=177&h=300&c=7&r=0&o=5&dpr=2.2&pid=1.7',
                  'https://tse4-mm.cn.bing.net/th/id/OIP-C.lx1wvzyVaawnZGfxLq_7vQHaFM?w=255&h=180&c=7&r=0&o=5&dpr=2.2&pid=1.7',
                  'https://tse1-mm.cn.bing.net/th/id/OIP-C.bmUaEg85h0hFEQDf89sOlAHaGP?w=194&h=180&c=7&r=0&o=5&dpr=2.2&pid=1.7',
                ],
                detail: this.$store.state.detail
            }
        }
    }
</script>

<style scoped>

</style>
