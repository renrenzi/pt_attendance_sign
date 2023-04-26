import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter);

const routes = [
  {
    path: '/clockIn',
    name: 'clockIn',
    meta:{
      title:'学生签到'
    },
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/StudentClockIn')
  },
  {
    path: '/studentHome',
    name: 'studentHome',
    meta:{
      title:'学生端首页'
    },
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/StudentHome')
  },
  {
    path: '/',
    name: 'login',
    meta:{
      title:'登录'
    },
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/Login')
  },
  {
    path: '/logout',
    name: 'logout',
    meta:{
      title:'退出登录'
    },
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/logout.vue')
  },
  {
    path: '/teacherHome',
    name: 'teacherHome',
    meta:{
      title:'教师端首页'
    },
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/TeacherHome.vue')
  },
  {
    path: '/teacherCenter',
    name: 'teacherCenter',
    meta:{
      title:'教师中心'
    },
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/TeacherCenter.vue')
  },
  {
    path: '/studentChooseClockIn',
    name: 'studentChooseClockIn',
    meta:{
      title:'签到选项'
    },
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/StudentChooseClockIn')
  },
  {
    path: '/clockInSetting',
    name: 'clockInSetting',
    meta:{
      title:'签到设置'
    },
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/TeacherClockInSetting')
  },
  {
    path: '/location',
    name: 'location',
    meta:{
      title:'获取地理位置'
    },
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/Location')
  },
  {
    path: '/studentCenter',
    name: 'studentCenter',
    meta:{
      title:'学生中心'
    },
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/StudentCenter')
  },
  {
    path: '/studentInfo',
    name: 'studentInfo',
    meta:{
      title:'修改学生信息'
    },
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/StudentInfo.vue')
  },
  {
    path: '/attendanceScore',
    name: 'attendanceScore',
    meta:{
      title:'考勤分数统计'
    },
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/AttendanceScore.vue')
  },
  {
    path: '/attendanceList',
    name: 'attendanceList',
    meta:{
      title:'考勤分数统计'
    },
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/AttendanceList.vue')
  },
  {
    path: '/attendance',
    name: 'attendance',
    meta:{
      title:'请假'
    },
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/Attendance.vue')
  },
  {
    path: '/approval',
    name: 'approval',
    meta:{
      title:'审批'
    },
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/Approval.vue')
  },
  {
    path: '/addAttendance',
    name: 'addAttendance',
    meta:{
      title:'添加请假'
    },
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/AddAttendance.vue')
  },
  {
    path: '/infoAttendance',
    name: 'infoAttendance',
    meta:{
      title:'请假详情'
    },
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/InfoAttendance.vue')
  },
  {
    path: '/selectedCourseList',
    name: 'selectedCourseList',
    meta:{
      title:'选课列表'
    },
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/SelectedCourseList.vue')
  },
  {
    path: '/teacherCourse',
    name: 'teacherCourse',
    meta:{
      title:'已授课程'
    },
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/TeacherCourse.vue')
  },
];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
});

export default router
