<template>
  <div>
    <div class="shadow-lg p-3 m-5 bg-white rounded">
      <h4 class="text-center">Додавання нового факультету</h4>
      <form action="#" id="form" method="post" @submit.prevent="checkForm">
        <div class="form-group m-1 mb-4">
          <label for="faculty-name">Назва повністю*</label><br>
          <small id="name-describe" class="form-text text-muted">Тільки українською</small>
          <input type="text" class="form-control" id="faculty-name" aria-describedby="name-describe"
                 placeholder="Введіть повну назву факультету" v-model="facultyName" @input="checkName">
          <small v-if="errors.facultyName" class="error">{{ msg.facultyName }}</small>
        </div>
        <div class="form-group m-1 mb-4">
          <label for="faculty-shortname">Назва коротко*</label><br>
          <small id="name-describe" class="form-text text-muted">Тільки українською, великі букви</small>
          <input type="text" class="form-control" id="faculty-shortname" aria-describedby="name-describe"
                 placeholder="Введіть коротку назву факультету" v-model="facultyShortName" @input="checkShortName">
          <small v-if="errors.facultyShortName" class="error">{{ msg.facultyShortName }}</small>
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
  name: "Faculties_ADD",
  data: () => ({
    //змінні компонету
    facultyName: '',
    facultyShortName: '',
    msg: [],
    errors: {
      facultyName: true,
      facultyShortName: true,
    },
  }),
  directives: {
    //Локальна реєстрація директив
  },
  methods: {
    checkForm: function (event) {
      this.checkName();
      this.checkShortName();
      if (!this.errors.facultyName && !this.errors.facultyShortName) {
        alert("Ваші дані прийнято та успішно зареєстровано")
        this.clearForm();
      } else {
        alert("Форма не прийнята... Перевірте ваші дані, виправте та надішліть ще раз ")
      }
    },
    clearForm() {
      this.facultyName = '';

    },

    checkName() {
      if (this.facultyName.length === 0) {
        this.errors.facultyName = true;
        this.msg['facultyName'] = 'Назва факультету не може бути пустою';
      } else if (!/^[а-щА-ЩЬьЮюЯяЇїІіЄєҐґ]+$/.test(this.facultyName)) {
        this.errors.facultyName = true;
        this.msg['facultyName'] = 'Назва факультету тільки українською';
      } else {
        this.errors.facultyName = false;
      }
    },
    checkShortName() {
      if (this.facultyShortName.length === 0) {
        this.errors.facultyShortName = true;
        this.msg['facultyShortName'] = 'Прізвище не може бути пустим';
      } else if (!/^[А-ЩЬЮЯЇІЄҐ]+$/.test(this.facultyShortName)) {
        this.errors.facultyShortName = true;
        this.msg['facultyShortName'] = 'Коротка назва тальки великі українські літери';
      } else {
        this.errors.facultyShortName = false;
      }
    },
  },
})

</script>