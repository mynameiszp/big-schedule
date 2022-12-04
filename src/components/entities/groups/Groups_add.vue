<template>
  <div>
    <div class="shadow-lg p-3 m-5 bg-white rounded ">
      <h4 class="text-center">Додавання нової групи</h4>
      <form action="#" id="form" method="post" @submit.prevent="checkForm">
        <div class="form-group m-1 mb-4">
          <label for="group-name">Назва*</label><br>
          <small id="name-describe" class="form-text text-muted">Формат: ІА-12 </small>
          <input type="text" class="form-control" id="group-name" aria-describedby="name-describe"
                 placeholder="Введіть назву групи" v-model="groupName" @input="checkName">
          <small v-if="errors.groupName" class="error">{{ msg.groupName }}</small>
        </div>
        <div class="form-group mb-4">
          <label for="student-email">Курс*</label>
          <input type="email" class="form-control" id="student-email"
                 placeholder="Введіть курс групи" v-model="course" @input="validateCourse">
          <small v-if="errors.course" class="error">{{ msg.course}}</small>
        </div>
        <div class="form-group mb-4">
          <label for="student-email">Departament-id*</label>
          <select name="" id="department" class="form-select" v-model="department" @change="checkDepartment">
            <option value="">Оберіть</option>
            <option value="ІА-11">ІА-11</option>
            <option value="ІА-12">ІА-12</option>
            <option value="ІА-13">ІА-13</option>
            <option value="ІА-14">ІА-14</option>
          </select>
          <small v-if="errors.department" class="error">{{ msg.department}}</small>
        </div>
        <div class="form-check">
          <input type="checkbox" class="form-check-input" id="exampleCheck1">
          <label class="form-check-label" for="exampleCheck1">Check me out</label>
        </div>
        <button type="submit" class="btn btn-primary">Submit</button>
      </form>
    </div>
  </div>
</template>

<script>
import {defineComponent} from 'vue'

// import 'vue-select/dist/vue-select.css'
export default defineComponent({
  name: "Groups_ADD",
  data: () => ({
    //змінні компонету
    groupName: '',
    course: '',
    department: '',
    msg: [],
    errors: {
      groupName: true,
      course: true,
      department: true,
    },
  }),
  directives: {
    //Локальна реєстрація директив
  },
  methods: {
    checkForm: function (event) {
      this.checkName();
      this.validateCourse();
      this.checkDepartment();
      if (!this.errors.groupName && !this.errors.course) {
        alert("Ваші дані прийнято та успішно зареєстровано")
        this.clearForm();
      } else {
        alert("Форма не прийнята... Перевірте ваші дані, виправте та надішліть ще раз ")
      }
    },
    clearForm() {
      this.groupName = '';
      this.course = '';

    },

    checkName() {
      if (this.groupName.length === 0) {
        this.errors.groupName = true;
        this.msg['groupName'] = 'Назва групи не може бути пуста';
      } else if (!/^[а-щА-ЩЬьЮюЯяЇїІіЄєҐґ]+$/.test(this.groupName)) {
        this.errors.groupName = true;
        this.msg['groupName'] = 'Невірно вказана назва групи';
      } else {
        this.errors.groupName = false;
      }
    },
    validateCourse() {
      if (this.course.length === 0) {
        this.errors.course = true;
        this.msg['course'] = 'Пусто';
      } else if (!/\d{1,6}/.test(this.course)) {
        this.errors.course = true;
        this.msg['course'] = 'Такого курсу не існує';
      } else {
        this.errors.course = false;
      }
    },
    checkDepartment() {
      if (this.department.valueOf() === '') {
        this.errors.department = true;
        this.msg['department'] = 'Оберіть групу';
      } else {
        this.errors.department = false;
      }
    }
  },
})

</script>