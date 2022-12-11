<template>
  <div>
    <div class="shadow-lg p-3 m-5 bg-white rounded">
      <h4 class="text-center">Редагування департаменту</h4>
      <form action="#" id="form" method="post" @submit.prevent="checkForm">
        <div class="form-group m-1 mb-4">
          <label for="faculty-name">Назва повністю*</label><br>
          <small id="name-describe" class="form-text text-muted">Тільки українською</small>
          <input type="text" class="form-control" id="faculty-name" aria-describedby="name-describe"
                 placeholder="Введіть повну назву департаменту" v-model="departmentName" @input="checkName">
          <small v-if="errors.departmentName" class="error">{{ msg.departmentName }}</small>
        </div>
        <div class="form-group m-1 mb-4">
          <label for="faculty-shortname">Назва коротко*</label><br>
          <small id="name-describe" class="form-text text-muted">Тільки українською, великі букви</small>
          <input type="text" class="form-control" id="faculty-shortname" aria-describedby="name-describe"
                 placeholder="Введіть коротку назву департаменту" v-model="departmentshortName" @input="checkShortName">
          <small v-if="errors.departmentshortName" class="error">{{ msg.departmentshortName }}</small>
        </div>
        <div class="form-group mb-4">
          <label for="faculty">Faculty-id*</label>
          <select name="" id="faculty" class="form-select" v-model="faculty" @change="checkFaculty">
            <option value="">Оберіть</option>
            <option value="ІА-11">ІА-11</option>
            <option value="ІА-12">ІА-12</option>
            <option value="ІА-13">ІА-13</option>
            <option value="ІА-14">ІА-14</option>
          </select>
          <small v-if="errors.faculty" class="error">{{ msg.faculty}}</small>
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
  name: "Departaments_EDIT",
  data: () => ({
    //змінні компонету
    departmentName: '',
    departmentshortName: '',
    faculty: '',
    msg: [],
    errors: {
      departmentName: true,
      departmentshortName: true,
      faculty: true,
    },
  }),
  directives: {
    //Локальна реєстрація директив
  },
  methods: {
    checkForm: function (event) {
      this.checkName();
      this.checkShortName();
      this.checkFaculty();
      if (!this.errors.departmentName && !this.errors.departmentshortName && !this.errors.faculty) {
        alert("Ваші дані прийнято та успішно зареєстровано")
        this.clearForm();
      } else {
        alert("Форма не прийнята... Перевірте ваші дані, виправте та надішліть ще раз ")
      }
    },
    clearForm() {
      this.departmentName = '';

    },

    checkName() {
      if (this.departmentName.length === 0) {
        this.errors.departmentName = true;
        this.msg['departmentName'] = 'Назва факультету не може бути пустою';
      } else if (!/^[а-щА-ЩЬьЮюЯяЇїІіЄєҐґ]+$/.test(this.departmentName)) {
        this.errors.departmentName = true;
        this.msg['departmentName'] = 'Назва департаменту тільки українською';
      } else {
        this.errors.facultyName = false;
      }
    },
    checkShortName() {
      if (this.departmentshortName.length === 0) {
        this.errors.departmentshortName = true;
        this.msg['departmentshortName'] = 'Прізвище не може бути пустим';
      } else if (!/^[А-ЩЬЮЯЇІЄҐ]+$/.test(this.departmentshortName)) {
        this.errors.departmentshortName = true;
        this.msg['departmentshortName'] = 'Коротка назва тальки великі українські літери';
      } else {
        this.errors.departmentshortName = false;
      }
    },
    checkFaculty() {
      if (this.faculty.valueOf() === '') {
        this.errors.faculty = true;
        this.msg['faculty'] = 'Оберіть факультет';
      } else {
        this.errors.faculty = false;
      }
    }
  },
})

</script>