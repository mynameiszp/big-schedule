import { createRouter, createWebHistory } from 'vue-router/dist/vue-router.esm-bundler'
import Home from '../components/Home.vue'
import FAQ from '../components/FAQ.vue'
import Students from '../components/entities/students/Students.vue'
import Students_ADD from '../components/entities/students/Students_add.vue'
import Students_EDIT from '../components/entities/students/Students_edit.vue'
import Disciplines from '../components/entities/disciplines/Disciplines.vue'
import Disciplines_ADD from '../components/entities/disciplines/Disciplines_add.vue'
import Disciplines_EDIT from '../components/entities/disciplines/Disciplines_edit.vue'
import Groups from '../components/entities/groups/Groups.vue'
import Groups_EDIT from '../components/entities/groups/Groups_edit.vue'
import Groups_ADD from '../components/entities/groups/Groups_add.vue'

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
    },
    {
        path: '/editstudent',
        component: Students_EDIT
    },
    {
        path: '/disciplines',
        component: Disciplines
    },
    {
        path: '/adddiscipline',
        component: Disciplines_ADD
    },
    {
        path: '/editdiscipline',
        component: Disciplines_EDIT
    },
    {
        path: '/groups',
        component: Groups
    },
    {
        path: '/addgroup',
        component: Groups_ADD
    },
    {
        path: '/editgroup',
        component: Groups_EDIT
    }
]

export default () => createRouter({
    history: createWebHistory(),
    routes: routes
})