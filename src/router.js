import Vue from 'vue'
import VueRouter from 'vue-router'
import sessionDetailsPage from '@/pages/sessionDetails.vue'
import sessionStartPage from '@/pages/sessionStart.vue'
import sessionStatusPage from '@/pages/sessionStatus.vue'
import signUpPage from '@/pages/signUp.vue'

import createSessionPage from '@/pages/createSession.vue'
import joinSessionPage from '@/pages/joinSession.vue'
import mySessionsPage from '@/pages/mySessions.vue'

Vue.use(VueRouter)

const routes = [
    {
        path: '/sessionDetails',
        name: 'Session Details',
        component: sessionDetailsPage
    },
    {
        path: '/sessionStart',
        name: 'Session Start',
        component: sessionStartPage
    },
    {
        path: '/sessionStatus',
        name: 'Session Status',
        component: sessionStatusPage
    },
    {
        path: '/signUp',
        name: 'Session Details',
        component: signUpPage
    },
    {
        path: '/createSession',
        name: 'Create Session',
        component: createSessionPage
    }
    ,
    {
        path: '/joinSession',
        name: 'Join Session',
        component: joinSessionPage
    },
    {
        path: '/mySessions',
        name: 'My Sessions',
        component: mySessionsPage
    }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router