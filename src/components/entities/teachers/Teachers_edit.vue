<template>
  <div>
    <div class="shadow-lg p-3 m-5 bg-white rounded ">
      <h4 class="text-center">Редагування викладача</h4>
      <form action="#" id="form" method="post" @submit.prevent="checkForm">
        <div class="form-group m-1 mb-4">
          <label for="teacher-name">Імя*</label><br>
          <small id="name-describe" class="form-text text-muted">Тільки українською</small>
          <input type="text" class="form-control" id="teacher-name" aria-describedby="name-describe"
                 placeholder="Введіть імя студента" v-model="teacherName" @input="checkName">
          <small v-if="errors.teacherName" class="error">{{ msg.teacherName }}</small>
        </div>
        <div class="form-group m-1 mb-4">
          <label for="teacher-name">Прізвище*</label><br>
          <small id="name-describe" class="form-text text-muted">Тільки українською</small>
          <input type="text" class="form-control" id="teacher-surname" aria-describedby="name-describe"
                 placeholder="Введіть імя студента" v-model="teacherSurname" @input="checkSurname">
          <small v-if="errors.teacherSurname" class="error">{{ msg.teacherSurname }}</small>
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
  name: "Teachers_EDIT",
  data: () => ({
    //змінні компонету
    teacherName: '',
    teacherSurname: '',
    phone: '',
    email: '',
    msg: [],
    errors: {
      teacherName: true,
      teacherSurname: true,
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
      this.checkSurname();
      if (!this.errors.teacherName && !this.errors.phone && !this.errors.email && !this.errors.group) {
        alert("Ваші дані прийнято та успішно зареєстровано")
        this.clearForm();
      } else {
        alert("Форма не прийнята... Перевірте ваші дані, виправте та надішліть ще раз ")
      }
    },
    clearForm() {
      this.teacherName = '';
      this.teacherSurname = '';
      this.email = '';
      this.phone = '';
      this.group = '';
    },

    checkName() {
      if (this.teacherName.length === 0) {
        this.errors.teacherName = true;
        this.msg['teacherName'] = 'Імя не може бути пустим';
      } else if (!/^[а-щА-ЩЬьЮюЯяЇїІіЄєҐґ]+$/.test(this.teacherName)) {
        this.errors.teacherName = true;
        this.msg['teacherName'] = 'Імя тільки українською';
      } else {
        this.errors.teacherName = false;
      }
    },
    checkSurname() {
      if (this.teacherSurname.length === 0) {
        this.errors.teacherSurname = true;
        this.msg['teacherSurname'] = 'Прізвище не може бути пустим';
      } else if (!/^[а-щА-ЩЬьЮюЯяЇїІіЄєҐґ]+$/.test(this.teacherName)) {
        this.errors.teacherSurname = true;
        this.msg['teacherSurname'] = 'Прізвище тільки українською';
      } else {
        this.errors.teacherSurname = false;
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
    checkGroup() {
      if (this.group.valueOf() === '') {
        this.errors.group = true;
        this.msg['group'] = 'Оберіть групу';
      } else {
        this.errors.group = false;
      }
    },
    validateEmail() {
      if (this.email.length === 0) {
        this.errors.email = true;
        this.msg['email'] = 'Пусто';
      } else if (!/\S+@\S+\.\S+/.test(this.email)) {
        this.errors.email = true;
        this.msg['email'] = 'Please enter a valid email address';
      } else {
        this.errors.email = false;
        this.msg['email'] = 'Супер, все вірно';
      }
    },
  },
})

</script>