import Vue from 'vue';
import VueRouter from 'vue-router'

// 페이지 컴포넌트 선언
import Guide from './components/page/Guide.vue'
import Css from './components/page/Css.vue'
import Color from './components/page/Color.vue'
import Font from './components/page/Font.vue'
import Touch from './components/page/Touch.vue'
import Input from './components/page/Input.vue'
import Form from './components/page/Form.vue'
import Button from './components/page/Button.vue'
import Alert from './components/page/Alert.vue'
import Modal from './components/page/Modal.vue'
import Toast from './components/page/Toast.vue'
import Empty from './components/page/Empty.vue'
import Comment from './components/page/Comment.vue'
import Lottie from './components/page/Lottie.vue'

Vue.use(VueRouter);

// 경로와 컴포넌트 연결
const routes = [
    {
        path: "/",
        name: "",
        component: Guide,
    },
    {
        path: "/css",
        name: "",
        component: Css,
    },
    {
        path: "/color",
        name: "",
        component: Color,
    },
    {
        path: "/font",
        name: "",
        component: Font,
    },
    {
        path: "/touch",
        name: "",
        component: Touch,
    },
    {
        path: "/input",
        name: "",
        component: Input,
    },
    {
        path: "/form",
        name: "",
        component: Form,
    },
    {
        path: "/button",
        name: "",
        component: Button,
    },
    {
        path: "/alert",
        name: "",
        component: Alert,
    },
    {
        path: "/modal",
        name: "",
        component: Modal,
    },
    {
        path: "/modal",
        name: "",
        component: Modal,
    },
    {
        path: "/toast",
        name: "",
        component: Toast,
    },
    {
        path: "/empty",
        name: "",
        component: Empty,
    },
    {
        path: "/comment",
        name: "",
        component: Comment,
    },
    {
        path: "/lottie",
        name: "",
        component: Lottie,
    },
];

const router = new VueRouter({
    mode: 'history',  // URL '#'해시값 지우기 위해 설정
    routes   //  routes : routes 에서 routes : 생략
})

export default router;