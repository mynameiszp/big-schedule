import { createRouter, createWebHistory } from 'vue-router/dist/vue-router.esm-bundler'
import Home from '../components/Home.vue'
import FAQ from '../components/entities/faqs/FAQ.vue'
import FAQs_ADD from '../components/entities/faqs/FAQs_add.vue'
import FAQs_EDIT from '../components/entities/faqs/FAQs_edit.vue'
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
import Departaments from '../components/entities/departments/Departments.vue'
import Departments_ADD from '../components/entities/departments/Departments_add.vue'
import Departments_EDIT from '../components/entities/departments/Departments_edit.vue'
import Schedules_ADD  from '../components/entities/schedule/Schedules_add.vue'
import Schedules_EDIT  from '../components/entities/schedule/Schedules_edit.vue'
import Schedules  from '../components/entities/schedule/Schedules.vue'

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
        path: '/addfaq',
        component: FAQs_ADD
    },
    {
        path: '/editfaq',
        component: FAQs_EDIT
    } ,
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
    },
    {
        path: '/departaments',
        component: Departaments
    },
    {
        path: '/adddepartment',
        component: Departments_ADD
    },
    {
        path: '/editdepartment',
        component: Departments_EDIT
    },
    {
        path: '/schedules',
        component: Schedules
    },
    {
        path: '/addschedule',
        component: Schedules_ADD
    },
    {
        path: '/editschedule',
        component: Schedules_EDIT
    }

]

export default () => createRouter({
    history: createWebHistory(),
    routes: routes
})