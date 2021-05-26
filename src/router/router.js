import Vue from 'vue'
import VueRouter from 'vue-router'
import Adm from '../components/Adm.vue'
import Our from '../components/Our.vue'
import PersonCent from '../components/PersonCent.vue'
import ProjectMana from '../components/ProjectMana.vue'
import PublicReq from '../components/PublicReq.vue'
import WorkMessage from '../components/WorkMessage.vue'
import Login from '../views/login/Login.vue'
import Index from '../components/index.vue'

Vue.use(VueRouter)

const routes = [
    {
        path: '/',
        redirect: '/login'
    },
    {
        path: '/login',
        component: Login
    },
    {
        path: '/adm',
        component: Adm
    },
    {
        path: '/our',
        component: Our
    },
    {
        path: '/personcent',
        component: PersonCent
    },
    {
        path: '/projectmana',
        component: ProjectMana
    },
    {
        path: '/publicreq',
        component: PublicReq
    },
    {
        path: '/workmessage',
        component: WorkMessage
    },
    {
        path: '/index',
        component: Index
    },
    {
        path: '/home',
        name: 'home',
        redirect:'/companyinfo',    //重定向
        meta: { title: '首页' },
        component: () => import('../views/home/index.vue'),
        children: [
            {
                path: '/companyinfo',
                name: 'companyinfo',
                meta: { tittle: '企业信息审核（首页）' },
                component: () => import('../views/home/companyinfo/index.vue'),
            },
            {
                path: '/projectinfo',  //工作室信息审核
                name: 'projectinfo',
                meta: { title: '工作室信息审核' },
                component: () => import('../views/home/projectinfo/index.vue')
            },
            {
                path: '/projectbid',  //项目招标进度
                name: 'projectbid',
                meta: { title: '项目招标进度' },
                component: () => import('../views/home/projectbid/index.vue')
            },
            {
                path: '/projectexe',  //项目执行进度
                name: 'projectexe',
                meta: { title: '项目执行进度' },
                component: () => import('../views/home/projectexe/index.vue')
            },
            {
                path: '/paymentstatus',  //支付情况
                name: 'paymentstatus',
                meta: { title: '支付情况' },
                component: () => import('../views/home/paymentstatus/index.vue')
            },
            // {
            //     path: '/chart',  //图表
            //     name: 'chart',
            //     meta: { title: '图表' },
            //     component: () => import('../views/home/chart/index.vue')
            // }
        ]
    }
]

const router = new VueRouter({
    routes
})

export default router