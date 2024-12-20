import './assets/reset.css'
import './assets/rem'
import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import axios from 'axios'
import Vehistogram from 'v-charts/lib/histogram.common'
import user from '@/js/global'
import moment from 'moment/moment'
import {
    Button,
    Tabbar,
    TabbarItem,
    Popup,
    Icon,
    NoticeBar,
    Divider,
    Uploader,
    Field,
    Form,
    Picker,
    Loading,
    Overlay,
    Sticky,
    DatetimePicker
    ,
    Cell,
    CellGroup,
    NavBar,
    List,
    Swipe,
    SwipeItem,
    PullRefresh,
    ContactCard,
    Row,
    Col,
    Switch,
    Step,
    Steps,
    Tab,
    Tabs,
    CountDown,
    Badge,
    Tag,
    Circle,
    CollapseItem,
    Collapse,
    Skeleton, Search
} from 'vant';
import {Image as VanImage} from 'vant';
import DatePicker from "vant/lib/datetime-picker/DatePicker";
Vue.use(Button).use(Tabbar).use(TabbarItem).use(Popup).use(Icon).use(NoticeBar)
    .use(Divider).use(Uploader).use(Field).use(Form).use(Picker).use(Loading)
    .use(Overlay).use(Sticky).use(DatetimePicker).use(Cell).use(CellGroup)
    .use(NavBar).use(List).use(Swipe).use(SwipeItem).use(VanImage)
    .use(PullRefresh).use(ContactCard).use(Col).use(Row).use(Switch)
    .use(DatePicker).use(Step).use(Steps).use(Tab).use(Tabs).use(CountDown).use(Popup)
    .use(Badge).use(Tag).use(Circle).use(Collapse).use(CollapseItem).use(Skeleton).use(Search);
Vue.component(Vehistogram.name, Vehistogram);
Vue.prototype.$user = user;
Vue.config.productionTip = false;
Vue.prototype.$axios = axios;
Vue.filter('moment', function (value, formatString) {
    formatString = formatString || 'YYYY-MM-DD HH:mm:ss'
    return moment(value).format(formatString)
})
axios.defaults.withCredentials = true;
axios.defaults.baseURL = 'http://localhost:9527/';

new Vue({
    router,
    store,
    render: h => h(App)
}).$mount('#app');

router.beforeEach((to, from, next) => {
    /* 路由发生变化修改页面title */
    if (to.meta.title) {
        document.title = to.meta.title
    }
    next()
});
