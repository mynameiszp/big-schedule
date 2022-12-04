<template>
  <div>
    <div class="shadow-lg p-3 m-5 bg-white rounded ">
      <h4 class="text-center">Додавання нового студента</h4>
      <form action="#" id="form" method="post" @submit.prevent="checkForm">
        <div class="form-group m-1 mb-4">
          <label for="student-name">Імя*</label><br>
          <small id="name-describe" class="form-text text-muted">Тільки українською</small>
          <input type="text" class="form-control" id="student-name" aria-describedby="name-describe"
                 placeholder="Введіть імя студента" v-model="studentName" @input="checkName">
          <small v-if="errors.studentName" class="error">{{ msg.studentName }}</small>
        </div>
        <div class="form-group mb-4">
          <label for="student-email">Електронна пошта*</label>
          <input type="email" class="form-control" id="student-email"
                 placeholder="Введіть пошту студента" v-model="email" @input="validateEmail">
          <small v-if="errors.email" class="error">{{ msg.email}}</small>

        </div>
        <div class="form-group mb-4">
          <label for="phone">Телефон*</label>
          <input id="phone" type="text" class="general form-control" name="phone" placeholder="+38 (999) 999-99-99"
                 v-model="phone"
                 v-mask="'+38(0##)###-##-##'"
                 @input="checkPhone">
          <small v-if="errors.phone" class="error">{{ msg.phone }}</small>
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
import {mask} from 'vue-the-mask'

export default defineComponent({
  name: "Students_ADD",
  data: () => ({
    //змінні компонету
    studentName: '',
    phone: '',
    email: '',
    msg: [],
    errors: {
      studentName: true,
      phone: true,
      email: true,
    },
  }),
  directives: {
    //Локальна реєстрація директив
    mask
  },
  methods: {
    checkForm: function (event) {
      this.checkName();
      this.validateEmail();
      this.checkPhone();
      if (!this.errors.studentName && !this.errors.phone && !this.errors.email) {
        alert("Ваші дані прийнято та успішно зареєстровано")
        this.clearForm();
      } else {
        alert("Форма не прийнята... Перевірте ваші дані, виправте та надішліть ще раз ")
      }
    },
    clearForm() {
      this.studentName = '';
      this.email = '';
      this.phone = '';

    },

    checkName() {
      if (this.studentName.length === 0) {
        this.errors.studentName = true;
        this.msg['facultyName'] = 'Прізвище не може бути пустим';
      } else if (!/^[а-щА-ЩЬьЮюЯяЇїІіЄєҐґ]+$/.test(this.studentName)) {
        this.errors.studentName = true;
        this.msg['facultyName'] = 'Прізвище тільки українською';
      } else {
        this.errors.studentName = false;
      }
    },
    checkPhone() {
      if (this.phone.length === 0) {
        this.errors.phone = true;
        this.msg['phone'] = 'Phone не може бути пустим';
      } else if (this.phone.length < 17) {
        this.errors.phone = true;
        this.msg['phone'] = 'Недостатня к-сть цифр';
      } else {
        this.errors.phone = false;
      }
    },
    validateEmail() {
      if (this.email.length === 0) {
        this.errors.email = true;
        this.msg['course'] = 'Пусто';
      } else if (!/\S+@\S+\.\S+/.test(this.email)) {
        this.errors.email = true;
        this.msg['course'] = 'Please enter a valid email address';
      } else {
        this.errors.email = false;
        this.msg['course'] = 'Супер, все вірно';
      }
    },
  },
})

</script>