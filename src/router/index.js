import { createRouter, createWebHistory } from 'vue-router/dist/vue-router.esm-bundler'
import Home from '../components/Home.vue'
import FAQ from '../components/FAQ.vue'
// import FAQs_ADD from '../components/FAQs_add'

// import FAQS_EDIT from '../components/entities/faqs/FAQs_edit'
import Students from '../components/entities/students/Students.vue'
import Students_ADD from '../components/entities/students/Students_add.vue'
import Students_EDIT from '../components/entities/students/Students_edit.vue'
import Disciplines from '../components/entities/disciplines/Disciplines.vue'
import Disciplines_ADD from '../components/entities/disciplines/Disciplines_add.vue'
import Disciplines_EDIT from '../components/entities/disciplines/Disciplines_edit.vue'
import Groups from '../components/entities/groups/Groups.vue'
import Groups_EDIT from '../components/entities/groups/Groups_edit.vue'
import Groups_ADD from '../components/entities/groups/Groups_add.vue'
import Faculties from '../components/entities/faculties/Faculties.vue'
import Faculties_ADD from '../components/entities/faculties/Faculties_add.vue'
import Faculties_EDIT from '../components/entities/faculties/Faculties_edit.vue'
import Teachers from '../components/entities/teachers/Teachers.vue'
import Teachers_ADD from '../components/entities/teachers/Teachers_add.vue'
import Teachers_EDIT from '../components/entities/teachers/Teachers_edit.vue'

const routes = [
    {
        path: '/',
        component: Home
    },
    {
        path: '/faq',
        component: FAQ
    },
    // {
    //     path: '/addfaq',
    //     component: FAQs_ADD
    // },
    // {
    //     path: '/editfaq',
    //     component: FAQS_EDIT
    // } ,
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
    },
    {
        path: '/faculties',
        component: Faculties
    },
    {
        path: '/addfaculty',
        component: Faculties_ADD
    },
    {
        path: '/editfaculty',
        component: Faculties_EDIT
    },
    {
        path: '/teachers',
        component: Teachers
    },
    {
        path: '/addteacher',
        component: Teachers_ADD
    },
    {
        path: '/editteacher',
        component: Teachers_EDIT
    }
]

export default () => createRouter({
    history: createWebHistory(),
    routes: routes
})