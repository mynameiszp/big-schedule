import { createRouter, createWebHistory } from 'vue-router/dist/vue-router.esm-bundler'
import Home from '../components/Home.vue'
import FAQ from '../components/FAQ.vue'
import Students from '../components/Students.vue'
import Students_ADD from '../components/Students_add.vue'



const routes = [
    {
        path: '/',
        component: Home
    },
    {
        path: '/faq',
        component: FAQ
    },
    {
        path: '/students',
        component: Students
    },
    {
        path: '/addstudent',
        component: Students_ADD
    }
]

export default () => createRouter({
    history: createWebHistory(),
    routes: routes
})