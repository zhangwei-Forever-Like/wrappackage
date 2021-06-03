import Vue from 'vue'
import VueRouter from 'vue-router'

import Two from '../views/workroom/Two.vue'
import MyWallet from '../views/workroom/myWallet.vue'
import StudioInfo from '../views/workroom/StudioInfo.vue'
import ManageProject from '../views/workroom/ManageProject.vue'
import StudioManageProgress from '../views/projectManagement/studioManageProgress.vue'
import StudioManageFinished from '../views/projectManagement/studioManageFinished.vue'

Vue.use(VueRouter)

const routes = [
    {
        path: '/',
        redirect: '/login'
    },
    {
        path: '/login',
        name:'login',
        component: ()=>import('../views/login/Login.vue')
    },
    {
        path: '/contactus',
        name:'contactus',
        component: ()=>import('../views/contactus/ContactUs.vue')
    },
    {
        path: '/personalcenter',
        name: 'personalcenter',
        component: ()=>import('../views/personalcenter/PersonalCenter.vue')
    },
    {
        path: '/management',
        name:'management',
        redirect: '/manageUnre',
        component: ()=>import('../views/project/Management.vue'),
        children:[
            {
                path:'/manageProgress',
                name:'manageProgress',
                component:()=>import('../views/project/childPro/ManageProgress.vue')
            },
            {
                path:'/manageFinished',
                name:'manageFinished',
                component:()=>import('../views/project/childPro/ManageFinished.vue')
            },
            {
                path:'/manageUnre',
                name:'manageUnre',
                component:()=>import('../views/project/childPro/ManageUnre.vue')
            }
        ]
    },
    {
         path:'/manageProject',
         name:'manageProject',
         component:()=>import('../views/project/childPro/ManageProject.vue')
    },
    {
        path:'/manageStudio',
        name:'manageStudio',
        component:()=>import('../views/project/childPro/ManageStudio.vue')
    },
    {
        path: '/demend',
        name:'demend',
        component: ()=>import('../views/demend/Demend.vue')
    },
    {
        path: '/studio',
        name:'studio',
        component: ()=>import('../views/studio/LookStudio.vue')
    },
    {
        path: '/index',
        name:'index',
        component: ()=>import('../views/studio/Index.vue')
    },
    {
        path: '/home',
        name: 'home',
         redirect:'/companyinfo',    //重定向
        meta:{title:'首页'},
        component: () => import( '../views/home/index.vue'),
        children:[
          {
          path: '/companyinfo',
          name: 'companyinfo',
          meta:{tittle:'企业信息审核（首页）'},
          component: () => import( '../views/home/companyinfo/index.vue'),
        },
        {
          path: '/projectinfo',  //工作室信息审核
          name: 'projectinfo',
          meta:{title:'工作室信息审核'},
          component: () => import( '../views/home/projectinfo/index.vue')
        },
        {
          path: '/projectbid',  //项目招标进度
          name: 'projectbid',
          meta:{title:'项目招标进度'},
          component: () => import( '../views/home/projectbid/index.vue')
        },
        {
          path: '/projectexe',  //项目执行进度
          name: 'projectexe',
          meta:{title:'项目执行进度'},
          component: () => import( '../views/home/projectexe/index.vue')
        },
        {
          path: '/paymentstatus',  //支付情况
          name: 'paymentstatus',
          meta:{title:'支付情况'},
          component: () => import( '../views/home/paymentstatus/index.vue')
        },
        {
          path: '/chart',  //图表
          name: 'chart',
          meta:{title:'图表'},
          component: () => import( '../views/home/chart/index.vue')
        }
        ]
      },
      {
        path: "/Two",
        name: 'Two',
        component: Two
      },
      {
        path: "/myWallet",
        name: 'MyWallet',
        component: MyWallet
      },
      {
        path: "/ManageProject",
        name: 'ManageProject',
        component: ManageProject
      },
      ,
      {
        path: "/studioManageProgress",
        name: 'StudioManageProgress',
        component: StudioManageProgress
      },
      ,
      {
        path: "/studioManageFinished",
        name: 'StudioManageFinished',
        component: StudioManageFinished
      },
      ,
      {
        path: "/StudioInfo",
        name: 'StudioInfo',
        component: StudioInfo
      },
      // {
      //   path: '/about',
      //   name: 'About',
      //   component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
      // }
]

const router = new VueRouter({
    routes
})

export default router