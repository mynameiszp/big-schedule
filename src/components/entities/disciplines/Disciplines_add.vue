<template>
  <div>
    <div class="shadow-lg p-3 m-5 bg-white rounded ">
      <h4 class="text-center">Додавання нової дисципліни</h4>
      <form action="#" id="form" method="post" @submit.prevent="checkForm">
        <div class="form-group m-1 mb-4">
          <label for="discipline-name">Назва*</label><br>
          <small id="name-describe" class="form-text text-muted">Тільки українською</small>
          <input type="text" class="form-control" id="discipline-name" aria-describedby="name-describe"
                 placeholder="Введіть назву дисципліни" v-model="disciplineName" @input="checkName">
          <small v-if="errors.disciplineName" class="error">{{ msg.disciplineName }}</small>
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
  name: "Disciplines_ADD",
  data: () => ({
    //змінні компонету
    disciplineName: '',
    msg: [],
    errors: {
      disciplineName: true,
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
        this.errors.disciplineName = true;
        this.msg['disciplineName'] = 'Назва дисципліни не може бути пустою';
      } else if (!/^[а-щА-ЩЬьЮюЯяЇїІіЄєҐґ]+$/.test(this.disciplineName)) {
        this.errors.disciplineName = true;
        this.msg['disciplineName'] = 'Назва дисципліни тільки українською';
      } else {
        this.errors.disciplineName = false;
      }
    },
  },
})

</script>