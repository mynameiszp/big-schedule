<template>
  <div>
    <div class="shadow-lg p-3 m-5 bg-white rounded ">
      <h4 class="text-center">Редагування дисципліни</h4>
      <form action="#" id="form" method="post" @submit.prevent="checkForm">
        <div class="form-group m-1 mb-4">
          <label for="student-name">Назва*</label><br>
          <small id="name-describe" class="form-text text-muted">Тільки українською</small>
          <input type="text" class="form-control" id="student-name" aria-describedby="name-describe"
                 placeholder="Введіть назву дисципліни" v-model="disciplineName" @input="checkName">
          <small v-if="errors.disciplineName" class="error">{{ msg.disciplineName }}</small>
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
  name: "Disciplines_EDIT",
  data: () => ({
    //змінні компонету
    disciplineName: '',
    msg: [],
    errors: {
      studentName: true,
    },
  }),
  directives: {
    //Локальна реєстрація директив
    mask
  },
  methods: {
    checkForm: function (event) {
      this.checkName();
      if (!this.errors.disciplineName ) {
        alert("Ваші дані прийнято та успішно зареєстровано")
        this.clearForm();
      } else {
        alert("Форма не прийнята... Перевірте ваші дані, виправте та надішліть ще раз ")
      }
    },
    clearForm() {
      this.disciplineName = '';

    },

    checkName() {
      if (this.disciplineName.length === 0) {
        this.errors.studentName = true;
        this.msg['disciplineName'] = 'Прізвище не може бути пустим';
      } else if (!/^[а-щА-ЩЬьЮюЯяЇїІіЄєҐґ]+$/.test(this.disciplineName)) {
        this.errors.studentName = true;
        this.msg['disciplineName'] = 'Прізвище тільки українською';
      } else {
        this.errors.studentName = false;
      }
    },
  },
})

</script>